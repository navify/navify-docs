---
title: Web View
---

<head>
  <title>Jigra Web View for iOS and Android Apps - Navify Framework</title>
  <meta
    name="description"
    content="What is a Web View? Web Views are a full screen and full-powered web browser. Read to learn more about Jigra Web View on Navify Framework apps."
  />
</head>

Web Views power web apps on native devices.

The Web View is automatically provided for apps integrated with [Jigra](../reference/glossary.md#jigra).

For [Cordova](../reference/glossary.md#cordova), Navify maintains a <a href="https://github.com/navify/cordova-plugin-navify-webview" target="_blank">Web View plugin</a>. The plugin is provided by default when using the Navify CLI.

## What is a Web View?

Navify apps are built using [web technologies](../reference/glossary.md#web-standards) and are rendered using Web Views, which are a full screen and full-powered web browser.

Modern Web Views offer many built-in <a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a> for hardware functionality such as cameras, sensors, GPS, speakers, and Bluetooth, but sometimes it may also be necessary to access platform-specific hardware APIs. In Navify apps, hardware APIs can be accessed through a bridge layer, typically by using native plugins which expose JavaScript APIs.

![webview architecture](/img/building/webview-architecture.png)

The Navify Web View plugin is specialized for modern JavaScript apps. For both iOS and Android, app files are always hosted using the `http://` protocol with an optimized HTTP server that runs on the local device.

### CORS

Web Views enforce [CORS](../reference/glossary.md#cors), so it's important that external services properly handle cross-origin requests. See the [CORS FAQs](../troubleshooting/cors.md) for information on dealing with CORS in Navify apps.

### File Protocol

Jigra and Cordova apps are hosted on a local HTTP server and are served with the `http://` protocol. Some plugins, however, attempt to access device files via the `file://` protocol. To avoid difficulties between `http://` and `file://`, paths to device files must be rewritten to use the local HTTP server. For example, `file:///path/to/device/file` must be rewritten as `http://<host>:<port>/<prefix>/path/to/device/file` before being rendered in the app.

For Jigra apps, convert file URIs like so:

```javascript
import { Jigra } from '@jigra/core';

Jigra.convertFileSrc(filePath);
```

For Cordova apps, the [Navify Web View plugin](https://github.com/navify/cordova-plugin-navify-webview) provides a utility function for converting File URIs: `window.Navify.WebView.convertFileSrc()`. There is also a corresponding Navify Native plugin: [`@awesome-cordova-plugins/navify-webview`](../native/navify-webview.md).

### Implementations

- **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
- **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>
