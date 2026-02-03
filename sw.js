const VERSION = '2.2';
console.log(`SW: Cargando versión ${VERSION}`);
const CACHE_NAME = 'edutrack-cache-v2';
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
    self.skipWaiting();
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
    // Solo cachear peticiones GET
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                    // Validar respuesta
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    // Clonar para el cache
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });

                    return networkResponse;
                })
                .catch(() => {
                    // Si falla la red, intentar devolver cache si existe
                    return cachedResponse;
                });

            return cachedResponse || fetchPromise;
        })
    );
});
