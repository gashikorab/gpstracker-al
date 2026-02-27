import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => ({
  server: {
    port: 3000,
    proxy: {
      '/api/socket': {
        target: 'https://gpstracker.al',
        ws: true,
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'https://gpstracker.al',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    // Local dev helper: Traccar UI calls /api/server on startup.
    // If the backend isn't running locally (or the live server is unreachable), the UI can hang.
    // This mock lets you preview UI/layout changes locally.
    {
      name: 'mock-api-server',
      configureServer(server) {
        server.middlewares.use('/api/server', (req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(
            JSON.stringify({
              // minimal fields used by the UI
              attributes: {},
              registration: false,
              emailEnabled: false,
              openIdEnabled: false,
              openIdForce: false,
              announcement: null,
            }),
          );
        });
      },
    },
    svgr(),
    react(),
    VitePWA({
      includeAssets: ['favicon', 'apple-touch-icon-180x180.png'],
      devOptions: { enabled: false },
      workbox: {
        navigateFallbackDenylist: [/^\/api/],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,woff,woff2,mp3}'],
      },
      manifest: {
        short_name: '${title}',
        name: '${description}',
        theme_color: '${colorPrimary}',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/@mapbox/mapbox-gl-rtl-text/dist/mapbox-gl-rtl-text.js', dest: '' },
      ],
    }),
  ],
}));
