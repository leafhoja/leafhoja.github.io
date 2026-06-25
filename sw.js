const CACHE = 'es-study-v2';

const PRECACHE = [
  './',
  './index.html',
  './common.css',
  './common.js',
  './access-control.js',
  './quiz.js',
  './quiz-data.js',
  './quiz-predicted-s1.js',
  './quiz-predicted-s2.js',
  './spanish1-common.css',
  './spanish1-search.js',
  './spanish2-common.css',
  './spanish2-common.js',
  './ga.js',
  './Spanish1_lesson2.html',
  './Spanish1_lesson3.html',
  './Spanish1_lesson4.html',
  './Spanish1_lesson5.html',
  './Spanish1_lesson6.html',
  './Spanish1_lesson7.html',
  './Spanish2_lesson1.html',
  './Spanish2_lesson2.html',
  './Spanish2_lesson3.html',
  './Spanish2_lesson4.html',
  './Spanish2_lesson5.html',
  './Spanish2_lesson6.html',
  './spanish_dictionary.html',
  './dict/',
  './dict/index.html',
  './dict/dict-data.js',
  './dict/dict-conj.js',
  './dict/dict-meanings.js',
  './dict/dict-examples.js',
  './dict/dict-trivia.js',
  './dict/dict-boost.js',
  './dict/phrase-lookup.js',
  './スペ語不規則活用動詞.html',
  './admin.html',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // 外部リソース（GA・AdSense・Google Fonts）はキャッシュしない
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);

      // HTMLはネットワーク優先（最新コンテンツ優先）、他はキャッシュ優先
      if (e.request.headers.get('Accept')?.includes('text/html')) {
        return networkFetch || cached;
      }
      return cached || networkFetch;
    })
  );
});
