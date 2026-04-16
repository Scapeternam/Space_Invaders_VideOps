// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"kfq6T":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "714649c608d67ed9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ULrPB":[function(require,module,exports,__globalThis) {
var _input = require("./input");
var _render = require("./render");
var _physics = require("./physics");
var _menu = require("./menu");
var _score = require("./score");
var _background = require("./background");
var _config = require("./config");
(0, _background.init)();
const $canvas = document.querySelector('#canvas');
$canvas.width = (0, _config.WORLD_SIZE);
$canvas.height = (0, _config.WORLD_SIZE);
let menuPause = true;
let inputPause = true;
const { getInput, setInputSource } = (0, _input.init)((0, _input.InputSource).Mouse, ()=>{
    inputPause = false;
}, ()=>{
    inputPause = true;
});
const { setGameOver } = (0, _menu.init)(()=>{
    menuPause = false;
}, ()=>{
    menuPause = true;
}, (source)=>{
    inputPause = true;
    setInputSource(source);
});
const { addPoints } = (0, _score.init)();
const { calculate } = (0, _physics.init)();
const { draw } = (0, _render.init)($canvas);
let lastTime = 0;
addPoints(0);
window.requestAnimationFrame(update);
function update(time) {
    const deltaTime = (time - lastTime) / 1000;
    lastTime = time;
    window.requestAnimationFrame(update);
    if (menuPause || inputPause) return;
    const input = getInput();
    const { playerPosition, projectiles, enemies, particles, gameOver } = calculate({
        input,
        deltaTime,
        addPoints
    });
    draw({
        playerPosition,
        projectiles,
        enemies,
        particles
    });
    if (gameOver) setGameOver();
}

},{"./input":"jzf8O","./render":"691Hh","./physics":"bo45a","./menu":"39nY9","./score":"4Okoo","./background":"bpT3B","./config":"c7DIC"}],"jzf8O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputSource", ()=>InputSource);
parcelHelpers.export(exports, "init", ()=>init);
var _gamepad = require("./gamepad");
var _mobile = require("./mobile");
var _mouse = require("./mouse");
var InputSource = /*#__PURE__*/ function(InputSource) {
    InputSource["Gamepad"] = "Gamepad";
    InputSource["Mouse"] = "Mouse";
    InputSource["Mobile"] = "Mobile";
    return InputSource;
}({});
let inputSource = null;
let inputFunction = null;
function init(source, ready, stop) {
    const gamepad = (0, _gamepad.init)();
    const mouse = (0, _mouse.init)();
    const mobile = (0, _mobile.init)();
    setInputSource(source);
    return {
        getInput,
        setInputSource,
        getInputSource
    };
    function setInputSource(source) {
        inputSource = source;
        if (inputFunction) inputFunction.setInactive();
        inputFunction = getInputFunction(source);
        inputFunction.setActive(ready, stop);
    }
    function getInputFunction(source) {
        switch(source){
            case "Gamepad":
                return gamepad;
            case "Mobile":
                return mobile;
            case "Mouse":
                return mouse;
        }
    }
}
function getInput() {
    return inputFunction.getInput();
}
function getInputSource() {
    return inputSource;
}

},{"./gamepad":"8uVou","./mobile":"43MuC","./mouse":"hnWVL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8uVou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    let bready = ()=>{};
    let bstop = ()=>{};
    return {
        getInput,
        setActive,
        setInactive
    };
    function setActive(ready, stop) {
        bready = ready;
        bstop = stop;
        window.addEventListener("gamepadconnected", onConnected, false);
        window.addEventListener("gamepaddisconnected", onDisconncted, false);
    }
    function setInactive() {
        window.removeEventListener("gamepadconnected", onConnected, false);
        window.removeEventListener("gamepaddisconnected", onDisconncted, false);
    }
    function onConnected({ gamepad }) {
        console.log('connected', gamepad);
        bready();
    }
    function onDisconncted({ gamepad }) {
        console.log('disconnected', gamepad);
        bstop();
    }
}
function getInput() {
    const gamepads = navigator.getGamepads();
    if (!gamepads) return;
    const gamepad = Object.values(gamepads).find((gp)=>gp);
    if (!gamepad) return;
    const axes = {
        x: gamepad.axes[0],
        y: gamepad.axes[1]
    };
    return {
        axes,
        fire: [
            0,
            5,
            7
        ].map((i)=>gamepad.buttons[i]).some((button)=>button.pressed)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"43MuC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _vector = require("../math/vector");
let position = {
    x: 0,
    y: 0
};
let fire = false;
function init() {
    const joystick = document.querySelector('#joystick');
    const handle = document.querySelector('#handle');
    const plane = document.querySelector('#mobile-plane');
    const fireButton = document.querySelector('#button-fire');
    return {
        getInput,
        setActive,
        setInactive
    };
    function setActive(ready) {
        handle.addEventListener('touchstart', onHandleGrab);
        handle.addEventListener('touchend', onHandleRelease);
        plane.addEventListener('touchmove', onMove);
        fireButton.addEventListener('touchstart', onFireGrab, false);
        fireButton.addEventListener('touchend', onFireRelease, false);
        fireButton.removeEventListener('touchcancel', onFireRelease, false);
        plane.hidden = false;
        ready();
    }
    function setInactive() {
        handle.removeEventListener('touchstart', onHandleGrab);
        handle.removeEventListener('touchend', onHandleRelease);
        plane.removeEventListener('touchmove', onMove);
        fireButton.removeEventListener('touchstart', onFireGrab);
        fireButton.removeEventListener('touchend', onFireRelease);
        fireButton.removeEventListener('touchcancel', onFireRelease);
        plane.hidden = true;
    }
    function onMove(event) {
        event.preventDefault();
        if (!moving) return;
        const touch = event.touches[0];
        const rect = joystick.getBoundingClientRect();
        const x = touch.pageX - (rect.x + rect.width / 2);
        const y = touch.pageY - (rect.y + rect.height / 2);
        const { x: nx, y: ny } = (0, _vector.normalize)({
            x,
            y
        });
        position = {
            x: nx,
            y: ny
        };
        handle.style.transform = `translate(${nx * 56.26}px, ${ny * 56.25}px)`;
    }
}
let moving = false;
function getInput() {
    return {
        axes: position,
        fire
    };
}
function onHandleGrab() {
    moving = true;
}
function onHandleRelease() {
    moving = false;
}
function onFireGrab() {
    fire = true;
}
function onFireRelease() {
    fire = false;
}

},{"../math/vector":"l0iLB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0iLB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "magnitude", ()=>magnitude);
parcelHelpers.export(exports, "slerp", ()=>slerp);
parcelHelpers.export(exports, "lerp", ()=>lerp);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "subtract", ()=>subtract);
parcelHelpers.export(exports, "mulFactor", ()=>mulFactor);
parcelHelpers.export(exports, "distance", ()=>distance);
var _math = require("./math");
function normalize(vector) {
    const mag = magnitude(vector);
    return {
        x: mag ? vector.x / mag : 0,
        y: mag ? vector.y / mag : 0
    };
}
function magnitude(vector) {
    return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}
function slerp(start, end, percent) {
    percent = (0, _math.clamp)(0, 1, percent);
    const dt = dot(start, end);
    const theta = Math.acos(dt) * percent;
    const relative = normalize(subtract(end, mulFactor(start, dt)));
    return normalize(add(mulFactor(start, Math.cos(theta)), mulFactor(relative, Math.sin(theta))));
}
function lerp(start, end, percent) {
    return {
        x: (0, _math.lerp)(start.x, end.x, percent),
        y: (0, _math.lerp)(start.y, end.y, percent)
    };
}
function dot(a, b) {
    return a.x * b.x + a.y * b.y;
}
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function mulFactor(vector, factor) {
    return {
        x: vector.x * factor,
        y: vector.y * factor
    };
}
function distance(a, b) {
    return magnitude({
        x: a.x - b.x,
        y: a.y - b.y
    });
}

},{"./math":"iHJw2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iHJw2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "lerp", ()=>lerp);
function clamp(min, max, v) {
    return v > max ? max : v < min ? min : v;
}
function lerp(start, end, v) {
    return start + (end - start) * v;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hnWVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _vector = require("../math/vector");
let position = {
    x: 0,
    y: 0
};
let fire = false;
function init() {
    const canvas = document.querySelector('#canvas');
    return {
        getInput,
        setActive (ready) {
            canvas.addEventListener('mousedown', onMouseDown);
            canvas.addEventListener('mouseup', onMouseUp);
            canvas.addEventListener('mousemove', onMouseMove);
            ready();
        },
        setInactive () {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mouseup', onMouseUp);
            canvas.removeEventListener('mousemove', onMouseMove);
        }
    };
    function onMouseDown() {
        fire = true;
    }
    function onMouseUp() {
        fire = false;
    }
    function onMouseMove({ clientX, clientY }) {
        const rect = canvas.getBoundingClientRect();
        const x = clientX - (rect.x + rect.width / 2);
        const y = clientY - (rect.y + rect.height / 2);
        const norm = (0, _vector.normalize)({
            x,
            y
        });
        position = norm;
    }
}
function getInput() {
    return {
        axes: position,
        fire: fire
    };
}

},{"../math/vector":"l0iLB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"691Hh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _config = require("./config");
var _world = require("./world");
function init($canvas) {
    const ctx = $canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-atop';
    return {
        draw: (data)=>draw($canvas, ctx, data)
    };
}
const colors = {
    enemy: `hsl(120, 100%, 50%)`,
    particle: `hsl(300, 100%, 50%)`,
    center: `hsl(260, 100%, 50%)`,
    player: `hsl(0, 100%, 50%)`,
    projectile: `hsl(60, 100%, 50%)`
};
function draw($canvas, ctx, { playerPosition, projectiles, enemies, particles }) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    drawCenter();
    drawPlayer();
    drawProjectiles();
    drawEnemies();
    drawParticles();
    drawMask();
    function drawMask() {
        const mask = ctx.createRadialGradient((0, _config.WORLD_SIZE) / 2, (0, _config.WORLD_SIZE) / 2, (0, _config.WORLD_SIZE) * 0.4, (0, _config.WORLD_SIZE) / 2, (0, _config.WORLD_SIZE) / 2, (0, _config.WORLD_SIZE) / 2);
        mask.addColorStop(0, '#ffff');
        mask.addColorStop(1, '#0000');
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = mask;
        ctx.fillRect(0, 0, (0, _config.WORLD_SIZE), (0, _config.WORLD_SIZE));
    }
    function drawCenter() {
        drawCircle($canvas.width / 2, $canvas.height / 2, 5, colors.center);
        drawCircle($canvas.width / 2, $canvas.height / 2, (0, _config.CENTER_RADIUS), colors.center, true);
    }
    function drawPlayer() {
        drawCircle(playerPosition.x + $canvas.width / 2, playerPosition.y + $canvas.height / 2, (0, _config.PLAYER_SIZE), colors.player);
    }
    function drawProjectiles() {
        for (const projectile of projectiles){
            const vector = (0, _world.toRelativeVector)(projectile.position);
            drawCircle(vector.x, vector.y, (0, _config.PROJECTILE_SIZE), colors.projectile);
        }
    }
    function drawEnemies() {
        for (const enemy of enemies){
            const vector = (0, _world.toRelativeVector)(enemy.position);
            drawCircle(vector.x, vector.y, (0, _config.ENEMY_SIZE), colors.enemy);
        }
    }
    function drawParticles() {
        for (const particle of particles){
            const color = `rgba(255, 0, 255, ${1 - particle.age / (0, _config.PARTICLE_LIFESPAN)})`;
            drawCircle(particle.position.x, particle.position.y, (0, _config.PARTICLE_SIZE), color);
        }
    }
    function drawCircle(x, y, r, color, hollow) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.shadowColor = color;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
        if (hollow) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.stroke();
        } else {
            ctx.fillStyle = color;
            ctx.fill();
        }
        // reset
        ctx.shadowBlur = 0;
    }
}

},{"./config":"c7DIC","./world":"5AjT1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c7DIC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIRE_COOLDOWN", ()=>FIRE_COOLDOWN);
parcelHelpers.export(exports, "PROJECTILE_SPEED", ()=>PROJECTILE_SPEED);
parcelHelpers.export(exports, "PROJECTILE_SIZE", ()=>PROJECTILE_SIZE);
parcelHelpers.export(exports, "PLAYER_SPEED", ()=>PLAYER_SPEED);
parcelHelpers.export(exports, "GAMEPAD_EPSILON", ()=>GAMEPAD_EPSILON);
parcelHelpers.export(exports, "ENEMY_SIZE", ()=>ENEMY_SIZE);
parcelHelpers.export(exports, "WORLD_SIZE", ()=>WORLD_SIZE);
parcelHelpers.export(exports, "PLAYER_SIZE", ()=>PLAYER_SIZE);
parcelHelpers.export(exports, "PLAYER_OFFSET", ()=>PLAYER_OFFSET);
parcelHelpers.export(exports, "PARTICLE_LIFESPAN", ()=>PARTICLE_LIFESPAN);
parcelHelpers.export(exports, "PARTICLE_SIZE", ()=>PARTICLE_SIZE);
parcelHelpers.export(exports, "PARTICLE_SPEED", ()=>PARTICLE_SPEED);
parcelHelpers.export(exports, "CENTER_RADIUS", ()=>CENTER_RADIUS);
parcelHelpers.export(exports, "ENEMY_SPAWN_COOLDOWN", ()=>ENEMY_SPAWN_COOLDOWN);
const FIRE_COOLDOWN = 0.1;
const PROJECTILE_SPEED = 1000;
const PROJECTILE_SIZE = 5;
const PLAYER_SPEED = 10;
const GAMEPAD_EPSILON = 0.3;
const ENEMY_SIZE = 20;
const WORLD_SIZE = 1000;
const PLAYER_SIZE = 20;
const PLAYER_OFFSET = 50;
const PARTICLE_LIFESPAN = 1;
const PARTICLE_SIZE = 5;
const PARTICLE_SPEED = 5;
const CENTER_RADIUS = 70;
const ENEMY_SPAWN_COOLDOWN = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5AjT1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toRelativeVector", ()=>toRelativeVector);
var _config = require("./config");
var _polarVector = require("./math/polar-vector");
function toRelativeVector(polarVector) {
    const vec = (0, _polarVector.toVector)(polarVector);
    return {
        x: vec.x + (0, _config.WORLD_SIZE) / 2,
        y: vec.y + (0, _config.WORLD_SIZE) / 2
    };
}

},{"./config":"c7DIC","./math/polar-vector":"7ZlmB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7ZlmB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toVector", ()=>toVector);
parcelHelpers.export(exports, "toPolarVector", ()=>toPolarVector);
parcelHelpers.export(exports, "distance", ()=>distance);
var _vector = require("./vector");
function toVector(polarVector) {
    return {
        x: polarVector.radius * Math.cos(polarVector.angle),
        y: polarVector.radius * Math.sin(polarVector.angle)
    };
}
function toPolarVector(vector) {
    return {
        radius: (0, _vector.magnitude)(vector),
        angle: Math.atan2(vector.y, vector.x)
    };
}
function distance(a, b) {
    return Math.sqrt(a.radius ** 2 + b.radius ** 2 - 2 * a.radius * b.radius * Math.cos(a.angle - b.angle));
}

},{"./vector":"l0iLB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bo45a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _config = require("./config");
var _enemy = require("./enemy");
var _polarVector = require("./math/polar-vector");
var _vector = require("./math/vector");
var _particle = require("./particle");
var _world = require("./world");
let currentPosition = {
    x: 0,
    y: 1
};
let destination = {
    x: 0,
    y: 1
};
let gameOver = false;
const particles = [];
const projectiles = [];
const enemies = [
    (0, _enemy.createEnemy)((0, _enemy.Type).Basic)
];
let fireTimer = 0;
let spawnTimer = 0;
function init() {
    return {
        calculate
    };
}
function calculate({ input, deltaTime, addPoints }) {
    for(const pKey in particles){
        const particle = particles[pKey];
        particle.age += deltaTime;
        if (particle.age > (0, _config.PARTICLE_LIFESPAN)) {
            particles.splice(+pKey, 1);
            continue;
        }
        particle.position = (0, _vector.add)(particle.position, particle.velocity);
    }
    if (!gameOver) {
        const mag = (0, _vector.magnitude)(input.axes);
        if (mag > (0, _config.GAMEPAD_EPSILON)) destination = (0, _vector.normalize)(input.axes);
        currentPosition = (0, _vector.slerp)(currentPosition, destination, deltaTime * (0, _config.PLAYER_SPEED));
        fireTimer += deltaTime;
        if (input.fire && fireTimer > (0, _config.FIRE_COOLDOWN)) {
            fireTimer = 0;
            projectiles.push({
                position: {
                    ...(0, _polarVector.toPolarVector)((0, _vector.mulFactor)(currentPosition, 50))
                }
            });
        }
        spawnTimer += deltaTime;
        if (spawnTimer > (0, _config.ENEMY_SPAWN_COOLDOWN)) {
            spawnTimer = 0;
            const angle = Math.random() * Math.PI * 2;
            const types = Object.values((0, _enemy.Type));
            enemies.push((0, _enemy.createEnemy)(types[Math.random() * types.length | 0], {
                angle,
                radius: (0, _config.WORLD_SIZE) / 2
            }));
        }
        for (const projectile of projectiles)projectile.position.radius += deltaTime * (0, _config.PROJECTILE_SPEED);
        for (const enemy of enemies)(0, _enemy.advanceEnemy)({
            enemy,
            deltaTime
        });
        for (const enemy of enemies)if (enemy.position.radius < (0, _config.CENTER_RADIUS) + (0, _config.ENEMY_SIZE)) {
            gameOver = true;
            for(let i = 0; i < 10; i += 1)setTimeout(()=>particles.push(...(0, _particle.createBoom)({
                    x: (0, _config.WORLD_SIZE) / 2,
                    y: (0, _config.WORLD_SIZE) / 2
                }, 4 + i * 4)), 100 * i);
            break;
        }
        projectiles: for(const pKey in projectiles)for(const eKey in enemies){
            const projectile = projectiles[pKey];
            const enemy = enemies[eKey];
            const dist = (0, _polarVector.distance)(projectile.position, enemy.position);
            if (dist < (0, _config.PROJECTILE_SIZE) + (0, _config.ENEMY_SIZE)) {
                projectiles.splice(+pKey, 1);
                enemies.splice(+eKey, 1);
                const position = (0, _world.toRelativeVector)(enemy.position);
                particles.push(...(0, _particle.createBoom)(position));
                addPoints((0, _enemy.getValue)(enemy.type));
                continue projectiles;
            }
        }
    }
    return {
        playerPosition: (0, _vector.mulFactor)(currentPosition, (0, _config.PLAYER_OFFSET)),
        projectiles,
        enemies,
        particles,
        gameOver
    };
}

},{"./config":"c7DIC","./enemy":"j5ZFn","./math/polar-vector":"7ZlmB","./math/vector":"l0iLB","./particle":"kegWz","./world":"5AjT1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j5ZFn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Type", ()=>Type);
parcelHelpers.export(exports, "createEnemy", ()=>createEnemy);
parcelHelpers.export(exports, "advanceEnemy", ()=>advanceEnemy);
parcelHelpers.export(exports, "getValue", ()=>getValue);
var _config = require("./config");
var Type = /*#__PURE__*/ function(Type) {
    Type["Basic"] = "Basic";
    Type["Spinner"] = "Spinner";
    Type["ZigZag"] = "ZigZag";
    Type["Oscillator"] = "Oscillator";
    return Type;
}({});
function createEnemy(type, position) {
    const pos = position || {
        angle: Math.random() * Math.PI * 2,
        radius: (0, _config.WORLD_SIZE)
    };
    return {
        age: 0,
        initialPosition: pos,
        position: pos,
        type,
        direction: [
            -1,
            1
        ][Math.random() * 2 | 0]
    };
}
function advanceEnemy(data) {
    data.enemy.age += data.deltaTime;
    data.enemy.position = movePatterns[data.enemy.type](data);
}
const movePatterns = {
    Basic ({ enemy, deltaTime }) {
        const newPos = {
            angle: enemy.position.angle,
            radius: enemy.position.radius - deltaTime * 100
        };
        return newPos;
    },
    Spinner ({ enemy, deltaTime }) {
        const newPos = {
            angle: enemy.position.angle + enemy.direction * deltaTime * 1,
            radius: enemy.position.radius - deltaTime * 100
        };
        return newPos;
    },
    ZigZag ({ enemy, deltaTime }) {
        const angle = enemy.initialPosition.angle + enemy.direction * Math.sin(enemy.age) * Math.PI;
        const newPos = {
            angle,
            radius: enemy.position.radius - deltaTime * 50
        };
        return newPos;
    },
    Oscillator ({ enemy, deltaTime }) {
        const angle = enemy.position.angle + enemy.direction * deltaTime * 1;
        const radius = Math.sin(enemy.age * 10) * 50 + (0, _config.WORLD_SIZE) / 2 - enemy.age * 50;
        const newPos = {
            angle,
            radius
        };
        return newPos;
    }
};
function getValue(type) {
    const values = {
        ["Basic"]: 5,
        ["Spinner"]: 10,
        ["ZigZag"]: 15,
        ["Oscillator"]: 20
    };
    return values[type];
}

},{"./config":"c7DIC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kegWz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBoom", ()=>createBoom);
parcelHelpers.export(exports, "createParticle", ()=>createParticle);
var _polarVector = require("./math/polar-vector");
var _config = require("./config");
function createBoom(position, count = 32) {
    const particles = [];
    const alpha = Math.PI * 2 / count;
    for(let i = 0; i < count; i += 1)particles.push(createParticle(position, (0, _polarVector.toVector)({
        angle: alpha * i,
        radius: (0, _config.PARTICLE_SPEED)
    })));
    return particles;
}
function createParticle(position, velocity) {
    return {
        age: 0,
        position,
        velocity
    };
}

},{"./math/polar-vector":"7ZlmB","./config":"c7DIC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"39nY9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _input = require("./input");
const INPUT_TYPE_KEY = 'psi_input_type';
function init(start, stop, inputChange) {
    const inputType = localStorage.getItem(INPUT_TYPE_KEY);
    const $menu = document.querySelector('#menu');
    window.addEventListener('keydown', handleKeyDown);
    const $startButton = document.querySelector('#start-button');
    $startButton.addEventListener('click', onStart);
    inputChange((0, _input.InputSource).Mouse);
    const $radios = document.querySelector('#input-source');
    const selectedType = [
        ...$radios.querySelectorAll('input')
    ].find((input)=>input.value == inputType);
    if (selectedType) {
        selectedType.checked = true;
        inputChange((0, _input.InputSource)[inputType]);
    }
    $radios.addEventListener('change', ()=>{
        const selected = $radios.querySelector('input:checked').value;
        localStorage.setItem(INPUT_TYPE_KEY, (0, _input.InputSource)[selected]);
        inputChange((0, _input.InputSource)[selected]);
    });
    window.addEventListener('blur', show);
    function onStart() {
        document.querySelector('html').requestFullscreen().catch(console.error);
        hide();
    }
    function show() {
        $menu.hidden = false;
        stop();
    }
    function hide() {
        $menu.hidden = true;
        start();
    }
    function handleKeyDown({ key }) {
        if (key == 'Escape') {
            if ($menu.hidden) show();
            else hide();
        }
    }
    const $gameOver = document.querySelector('#game-over');
    return {
        setGameOver () {
            document.querySelector('.score').hidden = true;
            $gameOver.hidden = false;
            window.removeEventListener('blur', show);
            window.removeEventListener('keydown', handleKeyDown);
        }
    };
}

},{"./input":"jzf8O","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4Okoo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
const HIGHSCORE_KEY = 'psi_highscore';
function init() {
    let { highscore, score } = loadPoints();
    const $score = document.querySelector('#score');
    const $gameOverScore = document.querySelector('#game-over-score');
    const $gameOverHighscore = document.querySelector('#game-over-highscore');
    const $gameOverButton = document.querySelector('#game-over-button');
    $gameOverButton.addEventListener('click', ()=>location.reload());
    return {
        addPoints
    };
    function addPoints(value) {
        score += value;
        if (score > highscore) highscore = score;
        updateUI();
        savePoints();
    }
    function savePoints() {
        localStorage.setItem(HIGHSCORE_KEY, String(highscore));
    }
    function loadPoints() {
        const highscore = localStorage.getItem(HIGHSCORE_KEY);
        return {
            score: 0,
            highscore: highscore ? +highscore : 0
        };
    }
    function updateUI() {
        $score.textContent = String(score);
        $gameOverScore.textContent = String(score);
        $gameOverHighscore.textContent = String(highscore);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bpT3B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init() {
    const $canvas = document.querySelector('#background');
    const ctx = $canvas.getContext('2d');
    window.addEventListener('resize', resize);
    resize();
    function drawBackground() {
        const imageData = new ImageData($canvas.width, $canvas.height);
        for(let i = 0; i < imageData.data.length; i += 4){
            const val = Math.random() < 0.001 ? 255 : 0;
            imageData.data[i] = val;
            imageData.data[i + 1] = val;
            imageData.data[i + 2] = val;
            imageData.data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }
    function resize() {
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
        drawBackground();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["kfq6T","ULrPB"], "ULrPB", "parcelRequire94c2", {})

//# sourceMappingURL=Space_Invaders_VideOps.08d67ed9.js.map
