const CACHE_NAME = 'fba-academy-v6';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/index.css',
    '/index.tsx',
    '/emi-hero.webp',
    '/hero_student_1.webp',
    '/hero_student_2.webp',
    '/hero_student_3.webp',
    '/result_cristian.webp',
    '/result_sofia.webp',
    '/result_javier.webp'
];

self.addEventListener('install', (event) => {
    // Force immediate activation
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    // Clear old caches immediately
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of all clients immediately
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
