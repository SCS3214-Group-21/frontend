// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate', // Automatically updates the service worker
//       injectRegister: 'script', // Injects the PWA registration script
//       devOptions: {
//         enabled: true, // Enables the PWA in development mode
//       },
//       manifest: {
//         name: 'DreamWed',
//         short_name: 'DreamWed',
//         description: 'A wedding planning web application',
//         display: fullscreen,
//         theme_color: '#ffffff',
//         icons: [
//           {
//             src: '/pwa-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: '/pwa-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       },
//     }),
//   ],
//   server: {
//     proxy: {
//       '/uploads': 'http://localhost:3000', // Proxy requests to your backend server
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      injectRegister: 'script', // Injects the PWA registration script
      devOptions: {
        enabled: true, // Enables PWA in development mode for testing
      },
      manifest: {
        name: 'DreamWed',
        short_name: 'DreamWed',
        description: 'A wedding planning web application',
        display: 'fullscreen', // Corrected value (use a string, not a variable)
        theme_color: '#ffffff', // Header theme color
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/uploads': {
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true, // Adjusts the origin header to match the target
        rewrite: (path) => path.replace(/^\/uploads/, '/uploads'), // Optional: Modify the request path
      },
    },
  },
});
