if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const f=e=>c(e,a),o={module:{uri:a},exports:n,require:f};s[a]=Promise.all(t.map((e=>o[e]||f(e)))).then((e=>(i(...e),n)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cc104d7c98e4b46cd38d9b1acc678510"},{url:"/_next/static/chunks/167-505710dcdb8ee7e1.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/327-36f07205cd965d23.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/458-ff69c65838c44e71.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/490-e18c7327731bc61a.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/596-11614722dc0c4fc7.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/685-fdc3ac538b5fe553.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/686-fe8efa17ef9aeb57.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/88-58caf67c3744d9f3.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/add-expense/page-fcb417cb1660f936.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/add-income/page-7f1262c8fe7172a7.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/categories/layout-1376830bfa1305f5.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/categories/page-0b16d1bf477a92d6.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/history-log/page-a168c2ae519b9916.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/layout-d9c870dd01147940.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/page-e4fb7e2bf1952d2b.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/review-budget/%5Bid%5D/page-7f2b824c8ede1bc5.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/review-budget/page-39a31323cbaa2e7b.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/set-budget/page-ff39206e871df6cd.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/app/test/page-fc886d18f8f3adfe.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/fd9d1056-e7bd375973b07c4b.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/main-app-64af2e859774dfd0.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/main-d5feb21f0880f09c.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-fe44f39c3f894092.js",revision:"yPfkhVHwXVt4I3oEqcTKh"},{url:"/_next/static/css/09ec645c7b889667.css",revision:"09ec645c7b889667"},{url:"/_next/static/css/1510ecb77a1c96dd.css",revision:"1510ecb77a1c96dd"},{url:"/_next/static/css/1bbe67198a358ad1.css",revision:"1bbe67198a358ad1"},{url:"/_next/static/css/4758bd606d433a80.css",revision:"4758bd606d433a80"},{url:"/_next/static/css/7e25d1e0c049defa.css",revision:"7e25d1e0c049defa"},{url:"/_next/static/css/7ff9a0b69bf53af2.css",revision:"7ff9a0b69bf53af2"},{url:"/_next/static/css/83623c924f23312a.css",revision:"83623c924f23312a"},{url:"/_next/static/css/917ff986210bf9bf.css",revision:"917ff986210bf9bf"},{url:"/_next/static/css/b639a3dfdff4e879.css",revision:"b639a3dfdff4e879"},{url:"/_next/static/css/b9efef3c9c85d51b.css",revision:"b9efef3c9c85d51b"},{url:"/_next/static/css/c7e39624be8273f5.css",revision:"c7e39624be8273f5"},{url:"/_next/static/css/ce1fd17cba8d44cd.css",revision:"ce1fd17cba8d44cd"},{url:"/_next/static/css/e3a0cd7f5c3a34cc.css",revision:"e3a0cd7f5c3a34cc"},{url:"/_next/static/css/fbf1b734165e924a.css",revision:"fbf1b734165e924a"},{url:"/_next/static/css/ffdbda351bf46477.css",revision:"ffdbda351bf46477"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/yPfkhVHwXVt4I3oEqcTKh/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/yPfkhVHwXVt4I3oEqcTKh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/Delete Button.png",revision:"5be07038fee2b2c80aaf89ac1f6641da"},{url:"/assets/icons/Edit Button.png",revision:"00d79c194c8c960b6c4b0b948e7bb4df"},{url:"/assets/icons/add-expense.png",revision:"e52d9426d9a26cff5fce8bdbfad06e77"},{url:"/assets/icons/add-income.png",revision:"a63fb4583a6265b866e1c18d0119f869"},{url:"/assets/icons/calendar.png",revision:"b2c6098c212e8e922e2366c51d517869"},{url:"/assets/icons/categories.png",revision:"3651e2cfa5535f2c2aad115c34714c16"},{url:"/assets/icons/delete-red.png",revision:"67ca01d8e324ab4a33ad17911765abe5"},{url:"/assets/icons/delete.png",revision:"1f2a2a4575665c1d8a0e3c9d59619761"},{url:"/assets/icons/edit white icon.png",revision:"6a7a72b134319c8a720761e7bf33241e"},{url:"/assets/icons/edit.png",revision:"244cb8bf5135ab45262b794b3474829c"},{url:"/assets/icons/history-log.png",revision:"6e95a35d44d96cbea094efcd478c02c3"},{url:"/assets/icons/review-budget.png",revision:"3d869b44e0a6d51d7c4b964175a7e362"},{url:"/assets/icons/set-budget.png",revision:"d969c9a283a0eeda39fb741443e87165"},{url:"/icon-192x192.png",revision:"a64b74784214a12feafdb91df81e0e07"},{url:"/icon-256x256.png",revision:"46ff1ea37751e2c7577a579fe5cf5833"},{url:"/icon-384x384.png",revision:"c5f971aa87455ce108c049a0e7e38d43"},{url:"/icon-512x512.png",revision:"783bc40a429fe5dd360e6f4ef4681b65"},{url:"/manifest.json",revision:"a4c5de1d8cac63a383415ceb4ae4fa57"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
