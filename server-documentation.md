# Linux Server Application Deployment Guide

## Server Specifications and Environment

**Server Info:**
- IP: 104-245-241-185
- OS: Ubuntu Linux
- Storage: 50GB total (34GB available)
- Memory: 5.8GB RAM, 2GB Swap
- CPU: 4 cores Intel Xeon Platinum 8163 @ 2.50GHz
- Domain: coveredamerican.com (with SSL via Let's Encrypt)

**Current Environment:**
- Web Server: Nginx (reverse proxy)
- Database: PostgreSQL 14
- Container Runtime: Docker + Containerd
- Process Manager: PM2 (for Node.js applications)
- Current Services:
  - Main application (port 54322)
  - Webhook proxy service (port 54321)
  - Audio API service (port 8531)

**Firewall:**
- UFW active with ports 22, 80, 443, and 8888 open

## Nginx Configuration

The server uses Nginx as the primary reverse proxy with the following setup:

### Main Configuration Structure
- `/etc/nginx/nginx.conf`: Global Nginx configuration
- `/etc/nginx/sites-available/`: Virtual host configuration files
- `/etc/nginx/sites-enabled/`: Symlinks to enabled virtual hosts
- Primary site config: `/etc/nginx/sites-available/webhook-manager.conf` (handles coveredamerican.com)

### Current Application Endpoints
The following endpoints are configured on the domain:

1. **Main Application**
   ```
   / -> http://localhost:54322
   ```

2. **Webhook Endpoint**
   ```
   /webhook/ -> http://localhost:54322
   ```

3. **Webhook Proxy Endpoint**
   ```
   /webhook-proxy/ -> http://localhost:54321
   ```

4. **Audio Services**
   ```
   /audio/ -> http://localhost:8531/
   /api/ -> http://localhost:8531/api/
   ```

### SSL Configuration
- Let's Encrypt certificates are used
- Certificate path: `/etc/letsencrypt/live/coveredamerican.com/`

## Standard Application Deployment Process

### 1. Choose Application Port

Reserve a unique port number for your new application:
- Recommended port range: 8000-8999
- Avoid ports already in use: 54321, 54322, 8531
- Check currently used ports with: `netstat -tulpn | grep LISTEN`

### 2. Deploy Application

Choose the deployment method based on your application type:

#### For Node.js Applications:
```bash
# Create application directory
mkdir -p /opt/apps/APP_NAME

# Copy application files
# (SFTP or git clone your application)
cd /opt/apps/APP_NAME

# Install dependencies
npm install

# Start with PM2 (replace index.js with your entry point)
pm2 start index.js --name APP_NAME -- --port=PORT_NUMBER
pm2 save

# Ensure PM2 starts on boot
pm2 startup
```

#### For Docker Applications:
```bash
# Pull the image
docker pull IMAGE_NAME

# Run the container
docker run -d \
  --name APP_NAME \
  --restart unless-stopped \
  -p PORT_NUMBER:INTERNAL_PORT \
  IMAGE_NAME

# Verify the container is running
docker ps | grep APP_NAME
```

#### For Python Applications:
```bash
# Create application directory
mkdir -p /opt/apps/APP_NAME

# Create virtual environment
cd /opt/apps/APP_NAME
python3 -m venv venv
source venv/bin/activate

# Install application and dependencies
# (Copy your app files or git clone)
pip install -r requirements.txt

# Create a systemd service file
cat > /etc/systemd/system/APP_NAME.service << EOF
[Unit]
Description=APP_NAME Application
After=network.target

[Service]
User=www-data
WorkingDirectory=/opt/apps/APP_NAME
ExecStart=/opt/apps/APP_NAME/venv/bin/python main.py
Restart=always
Environment="PORT=PORT_NUMBER"

[Install]
WantedBy=multi-user.target
EOF

# Enable and start the service
systemctl enable APP_NAME
systemctl start APP_NAME
```

### 3. Configure Nginx

Add a new location block to the existing configuration:

```bash
# Create a new location configuration temporarily
cat > /tmp/new-location.conf << EOF
location /APP_NAME/ {
    # Handle OPTIONS method in locations
    if (\$request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma' always;
        add_header 'Access-Control-Max-Age' 1728000 always;
        add_header 'Content-Type' 'text/plain charset=UTF-8' always;
        add_header 'Content-Length' 0 always;
        return 204;
    }

    # CORS headers - only add if not already present
    proxy_hide_header 'Access-Control-Allow-Origin';
    proxy_hide_header 'Access-Control-Allow-Methods';
    proxy_hide_header 'Access-Control-Allow-Headers';
    proxy_hide_header 'Access-Control-Expose-Headers';
    proxy_hide_header 'Access-Control-Max-Age';

    add_header 'Access-Control-Allow-Origin' '*' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma' always;
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

    proxy_pass http://localhost:PORT_NUMBER/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_cache_bypass \$http_upgrade;

    # Adjust based on application requirements
    proxy_connect_timeout 300s;
    proxy_send_timeout 300s;
    proxy_read_timeout 300s;
    client_max_body_size 150M;
}
EOF

# Replace placeholders with actual values
sed -i "s/APP_NAME/your-app-name/g" /tmp/new-location.conf
sed -i "s/PORT_NUMBER/8000/g" /tmp/new-location.conf  # Replace with your port

# Back up the current configuration
cp /etc/nginx/sites-available/webhook-manager.conf /etc/nginx/sites-available/webhook-manager.conf.bak

# Find insertion point (before the last closing brace)
LINE_NUMBER=$(grep -n "}" /etc/nginx/sites-available/webhook-manager.conf | tail -2 | head -1 | cut -d':' -f1)

# Insert the new location block
sed -i "${LINE_NUMBER}r /tmp/new-location.conf" /etc/nginx/sites-available/webhook-manager.conf

# Test and reload Nginx
nginx -t && systemctl reload nginx
```

### 4. Test the Application

Verify that your application is accessible at:
```
https://coveredamerican.com/APP_NAME/
```

## Deployment Templates

### Template for Nginx Location Block

```nginx
location /APP_NAME/ {
    # Handle OPTIONS method in locations
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma' always;
        add_header 'Access-Control-Max-Age' 1728000 always;
        add_header 'Content-Type' 'text/plain charset=UTF-8' always;
        add_header 'Content-Length' 0 always;
        return 204;
    }

    # CORS headers - only add if not already present
    proxy_hide_header 'Access-Control-Allow-Origin';
    proxy_hide_header 'Access-Control-Allow-Methods';
    proxy_hide_header 'Access-Control-Allow-Headers';
    proxy_hide_header 'Access-Control-Expose-Headers';
    proxy_hide_header 'Access-Control-Max-Age';

    add_header 'Access-Control-Allow-Origin' '*' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma' always;
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

    proxy_pass http://localhost:PORT_NUMBER/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;

    # Adjust these settings as needed
    proxy_connect_timeout 300s;
    proxy_send_timeout 300s;
    proxy_read_timeout 300s;
    client_max_body_size 150M;
}
```

### Template for Systemd Service

```ini
[Unit]
Description=APP_NAME Service
After=network.target

[Service]
User=www-data
WorkingDirectory=/opt/apps/APP_NAME
ExecStart=/path/to/executable
Restart=always
Environment="PORT=PORT_NUMBER"

[Install]
WantedBy=multi-user.target
```

## Common Commands and Troubleshooting

### Nginx Commands

```bash
# Test Nginx configuration
nginx -t

# Reload Nginx configuration
systemctl reload nginx

# Restart Nginx service
systemctl restart nginx

# Check Nginx status
systemctl status nginx

# View Nginx error logs
tail -f /var/log/nginx/error.log

# View Nginx access logs
tail -f /var/log/nginx/access.log
```

### PM2 Commands

```bash
# List all applications managed by PM2
pm2 list

# Start an application
pm2 start app.js --name APP_NAME

# Stop an application
pm2 stop APP_NAME

# Restart an application
pm2 restart APP_NAME

# View application logs
pm2 logs APP_NAME

# Save current process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Docker Commands

```bash
# List running containers
docker ps

# View container logs
docker logs APP_NAME

# Stop a container
docker stop APP_NAME

# Remove a container
docker rm APP_NAME

# Pull an image
docker pull IMAGE_NAME

# Run a new container
docker run -d --name APP_NAME -p PORT:INTERNAL_PORT IMAGE_NAME
```

### System Commands

```bash
# Check used ports
netstat -tulpn | grep LISTEN

# Check disk space
df -h

# Check memory usage
free -h

# Check system load
top

# Check service status
systemctl status SERVICE_NAME
```

## Common Issues and Solutions

### Nginx Configuration Errors

If you encounter "400 Bad Gateway" errors:
1. Check if your application is running: `netstat -tulpn | grep PORT_NUMBER`
2. Check application logs
3. Verify proxy_pass points to the correct address and port
4. Ensure application is listening on the specified port

### Application Not Starting

1. Check application logs:
   - PM2: `pm2 logs APP_NAME`
   - Systemd: `journalctl -u APP_NAME`
   - Docker: `docker logs APP_NAME`
2. Check permissions on application files
3. Verify port is not already in use

### SSL Certificate Issues

If SSL certificates expire:
```bash
# Renew Let's Encrypt certificates
certbot renew

# Reload Nginx after renewal
systemctl reload nginx
```

## Security Considerations

1. **Always back up configurations before changes**:
   ```bash
   cp /etc/nginx/sites-available/webhook-manager.conf /etc/nginx/sites-available/webhook-manager.conf.bak
   ```

2. **Limit access to admin interfaces** by adding IP restrictions:
   ```nginx
   location /APP_NAME/admin/ {
       # Allow specific IPs
       allow 192.168.1.100;
       # Deny all others
       deny all;
       
       # Rest of configuration...
       proxy_pass http://localhost:PORT_NUMBER/admin/;
       # ...
   }
   ```

3. **Set appropriate file permissions**:
   ```bash
   # For application files
   chown -R www-data:www-data /opt/apps/APP_NAME
   chmod -R 750 /opt/apps/APP_NAME
   ```

4. **Regularly update applications and dependencies**

## Application-Specific Guidelines

### Node.js Applications

1. Always use production mode:
   ```bash
   NODE_ENV=production pm2 start app.js
   ```

2. Recommended PM2 ecosystem file (`ecosystem.config.js`):
   ```javascript
   module.exports = {
     apps: [{
       name: "APP_NAME",
       script: "./index.js",
       env: {
         NODE_ENV: "production",
         PORT: PORT_NUMBER
       },
       instances: "max",
       exec_mode: "cluster"
     }]
   }
   ```

### Docker Applications

1. Use Docker Compose for multi-container applications:
   ```yaml
   # docker-compose.yml
   version: '3'
   services:
     app:
       image: your-image
       container_name: APP_NAME
       restart: unless-stopped
       ports:
         - "PORT_NUMBER:INTERNAL_PORT"
       volumes:
         - ./data:/app/data
       environment:
         - NODE_ENV=production
   ```

2. Run with:
   ```bash
   docker-compose up -d
   ```

## Port Allocation Guidelines

Keep track of port assignments to avoid conflicts:

| Port Range | Purpose |
|------------|---------|
| 54321-54399 | Main system services |
| 8000-8499 | Web applications |
| 8500-8999 | API services |
| 9000-9999 | Databases and supporting services |

Record new port assignments to maintain organization.
