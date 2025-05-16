import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Plugin } from 'vite';

// Custom plugin to inject Facebook Pixel code
const injectFacebookPixel = (): Plugin => {
  return {
    name: 'inject-facebook-pixel',
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

      // Insert the pixel code after the opening head tag
      return html.replace('<head>', '<head>' + pixelCode);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectFacebookPixel()],
  base: '/felander3/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
