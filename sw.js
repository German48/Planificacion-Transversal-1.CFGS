const CACHE_NAME = 'edutrack-cache-v1';
const ASSETS = [
    './',
    './Planificacion-Docente.html',
    './Planificacion-Alumnado.html',
    './data/master-plan.js',
    './css/ra-tracker.css',
    './css/fichas.css',
    './css/dashboard.css',
    './css/gantt.css',
    './js/ra-tracker.js',
    './js/fichas-renderer.js',
    './js/progress-tracker.js',
    './js/progress-manager.js',
    './js/dashboard-renderer.js',
    './js/gantt-renderer.js',
    './manifest.json'
];

// Instalar Service Worker y cachear activos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('SW: Cacheando activos estáticos');
                return cache.addAll(ASSETS);
            })
    );
});

// Activar y limpiar caches antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Estrategia: Stale While Revalidate
// Intenta servir desde cache pero actualiza el cache en segundo plano
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            });
            return cachedResponse || fetchPromise;
        })
    );
});
