self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('yt-downloader-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                'https://r3hab-yt-streamlit.hf.space/?embed=true&embed_options=hide_toolbar'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
