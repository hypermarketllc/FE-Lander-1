#!/bin/bash
#
# Application Installer for coveredamerican.com
# This script simplifies the process of installing new applications on the server
# and configuring Nginx to serve them under the main domain.
#
# Usage: ./install-app.sh [options]
#
# Created: April 2025

set -e

# Default values
APP_NAME=""
APP_TYPE=""
APP_PORT=""
APP_PATH="/opt/apps"
APP_REPO=""
NGINX_CONF="/etc/nginx/sites-available/webhook-manager.conf"
MAX_BODY_SIZE="150M"
DOMAIN="coveredamerican.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Print banner
echo -e "${BLUE}"
echo "┌─────────────────────────────────────────────┐"
echo "│                                             │"
echo "│      Covered American Application           │"
echo "│            Installer Script                 │"
echo "│                                             │"
echo "└─────────────────────────────────────────────┘"
echo -e "${NC}"

# Functions
show_help() {
    echo -e "${CYAN}Usage:${NC} $0 [options]"
    echo 
    echo "Options:"
    echo "  -h, --help                 Show this help message"
    echo "  -n, --name NAME            Application name (required)"
    echo "  -t, --type TYPE            Application type: node, docker, python, php (required)"
    echo "  -p, --port PORT            Port number for the application (required)"
    echo "  -r, --repo URL             Git repository URL (optional)"
    echo "  -d, --directory PATH       Custom installation directory (default: /opt/apps)"
    echo "  -m, --max-body SIZE        Maximum request body size (default: 150M)"
    echo
    echo "Examples:"
    echo "  $0 --name blog --type node --port 8001"
    echo "  $0 --name shop --type docker --port 8002 --repo https://github.com/user/shop.git"
    echo
}

check_requirements() {
    echo -e "${BLUE}Checking requirements...${NC}"
    
    # Check if running as root
    if [ "$EUID" -ne 0 ]; then
        echo -e "${RED}Error: This script must be run as root${NC}"
        exit 1
    fi
    
    # Check if nginx is installed
    if ! command -v nginx &> /dev/null; then
        echo -e "${RED}Error: Nginx is not installed${NC}"
        exit 1
    fi
    
    # Check if application type requirements are met
    case $APP_TYPE in
        node)
            if ! command -v node &> /dev/null; then
                echo -e "${RED}Error: Node.js is not installed${NC}"
                exit 1
            fi
            if ! command -v npm &> /dev/null; then
                echo -e "${RED}Error: npm is not installed${NC}"
                exit 1
            fi
            if ! command -v pm2 &> /dev/null; then
                echo -e "${YELLOW}Warning: pm2 is not installed. Installing...${NC}"
                npm install -g pm2
            fi
            ;;
        docker)
            if ! command -v docker &> /dev/null; then
                echo -e "${RED}Error: Docker is not installed${NC}"
                exit 1
            fi
            ;;
        python)
            if ! command -v python3 &> /dev/null; then
                echo -e "${RED}Error: Python 3 is not installed${NC}"
                exit 1
            fi
            if ! command -v pip3 &> /dev/null; then
                echo -e "${RED}Error: pip3 is not installed${NC}"
                exit 1
            fi
            ;;
        php)
            if ! command -v php &> /dev/null; then
                echo -e "${RED}Error: PHP is not installed${NC}"
                exit 1
            fi
            ;;
        *)
            echo -e "${RED}Error: Unsupported application type: $APP_TYPE${NC}"
            echo -e "${YELLOW}Supported types: node, docker, python, php${NC}"
            exit 1
            ;;
    esac
    
    echo -e "${GREEN}All requirements satisfied!${NC}"
}

check_port() {
    echo -e "${BLUE}Checking if port $APP_PORT is available...${NC}"
    
    # Check if port is in valid range
    if ! [[ "$APP_PORT" =~ ^[0-9]+$ ]] || [ "$APP_PORT" -lt 1024 ] || [ "$APP_PORT" -gt 65535 ]; then
        echo -e "${RED}Error: Invalid port number. Must be between 1024 and 65535${NC}"
        exit 1
    fi
    
    # Check if port is already in use
    if netstat -tuln | grep ":$APP_PORT " > /dev/null; then
        echo -e "${RED}Error: Port $APP_PORT is already in use${NC}"
        exit 1
    fi
    
    # Check if port is already configured in Nginx
    if grep -q "proxy_pass.*:$APP_PORT" /etc/nginx/sites-available/*; then
        echo -e "${RED}Error: Port $APP_PORT is already configured in Nginx${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Port $APP_PORT is available!${NC}"
}

backup_configs() {
    echo -e "${BLUE}Creating backup of Nginx configurations...${NC}"
    
    # Create backups directory if it doesn't exist
    mkdir -p /etc/nginx/backups
    
    # Backup date
    BACKUP_DATE=$(date +"%Y%m%d%H%M%S")
    
    # Backup main Nginx config
    cp /etc/nginx/nginx.conf /etc/nginx/backups/nginx.conf.$BACKUP_DATE
    
    # Backup site config
    cp $NGINX_CONF /etc/nginx/backups/webhook-manager.conf.$BACKUP_DATE
    
    echo -e "${GREEN}Backup created at /etc/nginx/backups/webhook-manager.conf.$BACKUP_DATE${NC}"
}

create_app_directory() {
    echo -e "${BLUE}Creating application directory...${NC}"
    
    # Create full path
    APP_FULL_PATH="$APP_PATH/$APP_NAME"
    
    # Check if directory already exists
    if [ -d "$APP_FULL_PATH" ]; then
        echo -e "${YELLOW}Warning: Directory $APP_FULL_PATH already exists${NC}"
        read -p "Do you want to overwrite it? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${RED}Installation aborted by user${NC}"
            exit 1
        fi
        rm -rf "$APP_FULL_PATH"
    fi
    
    # Create directory
    mkdir -p "$APP_FULL_PATH"
    
    # Clone repository if provided
    if [ -n "$APP_REPO" ]; then
        echo -e "${BLUE}Cloning repository...${NC}"
        git clone "$APP_REPO" "$APP_FULL_PATH"
    fi
    
    echo -e "${GREEN}Application directory created at $APP_FULL_PATH${NC}"
}

configure_application() {
    echo -e "${BLUE}Configuring application...${NC}"
    
    APP_FULL_PATH="$APP_PATH/$APP_NAME"
    cd "$APP_FULL_PATH"
    
    case $APP_TYPE in
        node)
            if [ -f "package.json" ]; then
                echo -e "${BLUE}Installing Node.js dependencies...${NC}"
                npm install --production
                
                # Create ecosystem file for PM2
                cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: "$APP_NAME",
    script: "./index.js",
    env: {
      NODE_ENV: "production",
      PORT: $APP_PORT
    },
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "300M",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    combine_logs: true
  }]
}
EOF
                
                echo -e "${YELLOW}Note: Adjust the script path in ecosystem.config.js if needed${NC}"
                
                # Create start script
                cat > start.sh << EOF
#!/bin/bash
cd \$(dirname \$0)
pm2 start ecosystem.config.js
EOF
                chmod +x start.sh
                
                # Create stop script
                cat > stop.sh << EOF
#!/bin/bash
pm2 stop $APP_NAME
pm2 delete $APP_NAME
EOF
                chmod +x stop.sh
            else
                echo -e "${YELLOW}Warning: No package.json found. Skipping npm install.${NC}"
                
                # Create a basic project structure
                echo -e "${BLUE}Creating a basic Node.js project structure...${NC}"
                npm init -y
                
                # Create a basic index.js
                cat > index.js << EOF
const http = require('http');

const port = process.env.PORT || $APP_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>$APP_NAME is running!</h1><p>Replace this with your application.</p>');
});

server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}/\`);
});
EOF

                # Create ecosystem file for PM2
                cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: "$APP_NAME",
    script: "./index.js",
    env: {
      NODE_ENV: "production",
      PORT: $APP_PORT
    },
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "300M",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    combine_logs: true
  }]
}
EOF

                # Create start script
                cat > start.sh << EOF
#!/bin/bash
cd \$(dirname \$0)
pm2 start ecosystem.config.js
EOF
                chmod +x start.sh
                
                # Create stop script
                cat > stop.sh << EOF
#!/bin/bash
pm2 stop $APP_NAME
pm2 delete $APP_NAME
EOF
                chmod +x stop.sh
            fi
            ;;
            
        docker)
            # Create a docker-compose.yml if it doesn't exist
            if [ ! -f "docker-compose.yml" ]; then
                echo -e "${BLUE}Creating a basic docker-compose.yml...${NC}"
                cat > docker-compose.yml << EOF
version: '3'
services:
  $APP_NAME:
    image: nginx:alpine  # Replace with your image
    container_name: $APP_NAME
    restart: unless-stopped
    ports:
      - "$APP_PORT:80"
    volumes:
      - ./data:/app/data
    environment:
      - NODE_ENV=production
EOF
                echo -e "${YELLOW}Note: Update docker-compose.yml with your specific image and configuration${NC}"
            fi
            
            # Create start script
            cat > start.sh << EOF
#!/bin/bash
cd \$(dirname \$0)
docker-compose up -d
EOF
            chmod +x start.sh
            
            # Create stop script
            cat > stop.sh << EOF
#!/bin/bash
cd \$(dirname \$0)
docker-compose down
EOF
            chmod +x stop.sh
            ;;
            
        python)
            # Create a virtual environment
            echo -e "${BLUE}Creating Python virtual environment...${NC}"
            python3 -m venv venv
            
            # Create a basic app.py if it doesn't exist
            if [ ! -f "app.py" ]; then
                echo -e "${BLUE}Creating a basic Flask application...${NC}"
                cat > app.py << EOF
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>$APP_NAME is running!</h1><p>Replace this with your application.</p>'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=$APP_PORT)
EOF

                # Create requirements.txt
                cat > requirements.txt << EOF
flask==2.0.1
gunicorn==20.1.0
EOF

                # Install dependencies
                echo -e "${BLUE}Installing Python dependencies...${NC}"
                source venv/bin/activate
                pip install -r requirements.txt
                deactivate
            elif [ -f "requirements.txt" ]; then
                # Install dependencies from requirements.txt
                echo -e "${BLUE}Installing Python dependencies...${NC}"
                source venv/bin/activate
                pip install -r requirements.txt
                deactivate
            fi
            
            # Create systemd service file
            cat > /etc/systemd/system/$APP_NAME.service << EOF
[Unit]
Description=$APP_NAME Application
After=network.target

[Service]
User=www-data
WorkingDirectory=$APP_FULL_PATH
ExecStart=$APP_FULL_PATH/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:$APP_PORT app:app
Restart=always
Environment="PORT=$APP_PORT"

[Install]
WantedBy=multi-user.target
EOF

            # Create start script
            cat > start.sh << EOF
#!/bin/bash
systemctl enable $APP_NAME
systemctl start $APP_NAME
EOF
            chmod +x start.sh
            
            # Create stop script
            cat > stop.sh << EOF
#!/bin/bash
systemctl stop $APP_NAME
systemctl disable $APP_NAME
EOF
            chmod +x stop.sh
            ;;
            
        php)
            # Create a basic index.php if it doesn't exist
            if [ ! -f "index.php" ]; then
                echo -e "${BLUE}Creating a basic PHP application...${NC}"
                mkdir -p public
                cat > public/index.php << EOF
<!DOCTYPE html>
<html>
<head>
    <title>$APP_NAME</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>$APP_NAME is running!</h1>
    <p>Replace this with your application.</p>
    <p>PHP Version: <?php echo phpversion(); ?></p>
</body>
</html>
EOF
            fi
            
            # Create PHP-FPM pool configuration
            cat > /etc/php/7.4/fpm/pool.d/$APP_NAME.conf << EOF
[$APP_NAME]
user = www-data
group = www-data
listen = 127.0.0.1:$APP_PORT
listen.owner = www-data
listen.group = www-data
pm = dynamic
pm.max_children = 5
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
chdir = /
EOF

            # Restart PHP-FPM
            systemctl restart php7.4-fpm
            
            # Create start script
            cat > start.sh << EOF
#!/bin/bash
systemctl restart php7.4-fpm
EOF
            chmod +x start.sh
            
            # Create stop script
            