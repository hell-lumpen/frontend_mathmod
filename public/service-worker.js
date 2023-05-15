import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/via\.placeholder\.com\/500x500\.png/,
  new StaleWhileRevalidate()
);
