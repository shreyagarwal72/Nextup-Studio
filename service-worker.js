const CACHE_NAME = 'nextup-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/logo/3.png'
  // Add any other assets you'd like cached for offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
