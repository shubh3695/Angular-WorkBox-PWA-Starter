'use strict'
const  {GenerateSW}  = require('workbox-webpack-plugin');

console.info("Settings up service worker....\n\n");

const serviceWorkerConfig = [
    new GenerateSW({
        cacheId: `cache_blocks`,
        swDest: `service.worker.js`,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        runtimeCaching: [{
            urlPattern: /\//,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: `all_paths`,
                expiration: {
                    maxEntries: 500,
                    maxAgeSeconds: 86400
                },
                matchOptions: {
                    ignoreSearch: true,
                }
            }
        }
        ]
    }),
];
const config = {
    plugins : serviceWorkerConfig
}
module.exports = config;