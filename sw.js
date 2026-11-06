// Lets the browser offer "Install app". It keeps no copies of the page:
// every request goes to the network as normal, so the series always loads fresh.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
