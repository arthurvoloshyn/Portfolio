var staticCacheName = `static-cache-v${new Date().getTime()}`;
var filesToCache = [
  '/offline',
  '/0.js',
  '/1.js',
  '/2.js',
  '/3.js',
  '/4.js',
  '/5.js',
  '/6.js',
  '/7.js',
  '/css/NotFound.css',
  '/js/libraries/NotFound.js',
  '/js/app.js',
  '/favicons/panda.png',
  '/favicons/icons/icon-16x16.png',
  '/favicons/icons/icon-32x32.png',
  '/favicons/icons/icon-72x72.png',
  '/favicons/icons/icon-96x96.png',
  '/favicons/icons/icon-128x128.png',
  '/favicons/icons/icon-144x144.png',
  '/favicons/icons/icon-152x152.png',
  '/favicons/icons/icon-192x192.png',
  '/favicons/icons/icon-256x256.png',
  '/favicons/icons/icon-384x384.png',
  '/favicons/icons/icon-512x512.png'
];

// Cache on install
self.addEventListener('install', event => {
  this.skipWaiting();
  event.waitUntil(caches.open(staticCacheName).then(cache => cache.addAll(filesToCache)));
});

// Clear cache on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('static-cache-'))
          .filter(cacheName => cacheName !== staticCacheName)
          .map(cacheName => caches.delete(cacheName))
      )
    )
  );

  this.clients.claim();
});

// Serve from Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('offline'))
  );
});
