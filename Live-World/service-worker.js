self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("live-welt-cache").then(cache=>{
            return cache.addAll(["./","./index.html","./manifest.json"]);
        })
    );
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(r=>r||fetch(e.request))
    );
});
