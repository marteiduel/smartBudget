if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8187a22023eb18126fd37a77d074f385"},{url:"/_next/static/JG_3A5HQ3aGCFYeBOetvt/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/JG_3A5HQ3aGCFYeBOetvt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/222-65271cdf3c290a63.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/596-8c8d2f11939ee382.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/685-f9fbc85b6db10085.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/add-expense/page-f8608950233f97a4.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/add-income/page-7f1262c8fe7172a7.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/categories/layout-1376830bfa1305f5.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/categories/page-00fff3949ac07954.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/history-log/page-c552f14eae095760.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/layout-550daecb3bbbd96f.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/page-e8db0dfd0f7ec5bc.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/review-budget/%5Bid%5D/page-24214095e49449a7.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/review-budget/page-3471fe7cbca5841c.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/app/set-budget/page-bc941f630ef76fb7.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/fd9d1056-2a48348db6e9e5e0.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/main-89dc2250cf66e469.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/main-app-28945dd06ab28ec5.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d1218d9231496237.js",revision:"JG_3A5HQ3aGCFYeBOetvt"},{url:"/_next/static/css/09ec645c7b889667.css",revision:"09ec645c7b889667"},{url:"/_next/static/css/31c116939f42999f.css",revision:"31c116939f42999f"},{url:"/_next/static/css/3a1143017d4889de.css",revision:"3a1143017d4889de"},{url:"/_next/static/css/7ff9a0b69bf53af2.css",revision:"7ff9a0b69bf53af2"},{url:"/_next/static/css/b62f5cfea8b3bec4.css",revision:"b62f5cfea8b3bec4"},{url:"/_next/static/css/bf0c4279ceee5481.css",revision:"bf0c4279ceee5481"},{url:"/_next/static/css/ce2e50f5dc11edc4.css",revision:"ce2e50f5dc11edc4"},{url:"/_next/static/css/d84e8f35ae9f7f11.css",revision:"d84e8f35ae9f7f11"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/assets/icons/Delete Button.png",revision:"5be07038fee2b2c80aaf89ac1f6641da"},{url:"/assets/icons/Edit Button.png",revision:"00d79c194c8c960b6c4b0b948e7bb4df"},{url:"/assets/icons/add-expense.png",revision:"e52d9426d9a26cff5fce8bdbfad06e77"},{url:"/assets/icons/add-income.png",revision:"a63fb4583a6265b866e1c18d0119f869"},{url:"/assets/icons/calendar.png",revision:"b2c6098c212e8e922e2366c51d517869"},{url:"/assets/icons/categories.png",revision:"3651e2cfa5535f2c2aad115c34714c16"},{url:"/assets/icons/delete-red.png",revision:"67ca01d8e324ab4a33ad17911765abe5"},{url:"/assets/icons/delete.png",revision:"1f2a2a4575665c1d8a0e3c9d59619761"},{url:"/assets/icons/edit white icon.png",revision:"6a7a72b134319c8a720761e7bf33241e"},{url:"/assets/icons/edit.png",revision:"244cb8bf5135ab45262b794b3474829c"},{url:"/assets/icons/history-log.png",revision:"6e95a35d44d96cbea094efcd478c02c3"},{url:"/assets/icons/review-budget.png",revision:"3d869b44e0a6d51d7c4b964175a7e362"},{url:"/assets/icons/set-budget.png",revision:"d969c9a283a0eeda39fb741443e87165"},{url:"/icon-192x192.png",revision:"a64b74784214a12feafdb91df81e0e07"},{url:"/icon-256x256.png",revision:"46ff1ea37751e2c7577a579fe5cf5833"},{url:"/icon-384x384.png",revision:"c5f971aa87455ce108c049a0e7e38d43"},{url:"/icon-512x512.png",revision:"783bc40a429fe5dd360e6f4ef4681b65"},{url:"/manifest.json",revision:"e811f5ea596648dfbd5705b569db2a35"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
