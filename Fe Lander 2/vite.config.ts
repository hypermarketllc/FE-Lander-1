import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Plugin } from 'vite';

// Custom plugin to inject Facebook Pixel code and Ringba script
const injectScripts = (): Plugin => {
  return {
    name: 'inject-scripts',
    transformIndexHtml(html) {
      // Facebook Pixel code to inject
      const pixelCode = `
    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '654103513919385');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=654103513919385&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->`;

      // Ringba script with proper error handling
      const ringbaScript = `
    <!-- Ringba Dynamic Number Script -->
    <script>
      (function() {
        var script = document.createElement('script');
        script.src = '//b-js.ringba.com/CA036b4b35257140c3ba3093c5d7bbe82f';
        script.async = true;
        script.type = 'application/javascript';
        
        script.onload = function() {
          console.log('Ringba script loaded successfully');
          // Debug info
          if (window.Ringba) {
            console.log('Ringba object available:', typeof window.Ringba);
          }
        };
        
        script.onerror = function() {
          console.error('Failed to load Ringba script');
        };
        
        document.head.appendChild(script);
      })();
    </script>
    <!-- End Ringba Script -->`;

      // Debug script to help troubleshoot Ringba
      const debugScript = `
    <script>
      // Enhanced debug function for Ringba
      window.debugRingba = function() {
        console.log('=== Enhanced Ringba Debug Info ===');
        console.log('Ringba script found:', !!document.querySelector('script[src*="ringba.com"]'));
        
        // Check all possible Ringba objects
        const possibleRingba = {
          'window.ringba': window.ringba,
          'window.Ringba': window.Ringba,
          'window._ringba': window._ringba,
          'window.ringba_conf': window.ringba_conf
        };
        
        console.log('Possible Ringba objects:', possibleRingba);
        
        // Find which one exists and log its properties
        Object.keys(possibleRingba).forEach(key => {
          const obj = possibleRingba[key];
          if (obj) {
            console.log(key + ' exists with properties:', Object.keys(obj));
            console.log(key + ' full object:', obj);
          }
        });
        
        // Check all window properties that might be related to Ringba
        const allRingbaProps = Object.keys(window).filter(key => 
          key.toLowerCase().includes('ringba')
        );
        console.log('All Ringba-related window properties:', allRingbaProps);
        
        console.log('=== End Enhanced Debug ===');
      };
      
      // Debug known numbers specifically
      window.debugRingbaNumbers = function() {
        console.log('=== Ringba Numbers Debug ===');
        console.log('ringba_known_numbers:', window.ringba_known_numbers);
        console.log('Type:', typeof window.ringba_known_numbers);
        console.log('Is Array:', Array.isArray(window.ringba_known_numbers));
        
        if (window.ringba_known_numbers) {
          if (Array.isArray(window.ringba_known_numbers)) {
            window.ringba_known_numbers.forEach((item, index) => {
              console.log('Array[' + index + ']:', item);
              console.log('Type of Array[' + index + ']:', typeof item);
              if (typeof item === 'object') {
                console.log('Properties of Array[' + index + ']:', Object.keys(item));
              }
            });
          } else {
            Object.keys(window.ringba_known_numbers).forEach(key => {
              console.log('Object[' + key + ']:', window.ringba_known_numbers[key]);
            });
          }
        }
        console.log('=== End Numbers Debug ===');
      };
      
      // Auto-debug after page load with multiple checks
      window.addEventListener('load', function() {
        setTimeout(() => window.debugRingba(), 1000);
        setTimeout(() => window.debugRingbaNumbers(), 2000);
        setTimeout(() => window.debugRingba(), 3000);
        setTimeout(() => window.debugRingbaNumbers(), 4000);
        setTimeout(() => window.debugRingba(), 5000);
      });
    </script>`;

      // Insert all scripts after the opening head tag
      return html.replace('<head>', '<head>' + pixelCode + ringbaScript + debugScript);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectScripts()],
  base: '/felander2/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});