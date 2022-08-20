---
title: Introduction to Navify
---

# Introduction to Navify

Navify is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like [Kdu](kdu/overview.md).

## Overview

Navify focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as [Kdu](kdu/overview.md). Alternatively, it can be used standalone without any frontend framework using a simple [script include](intro/cdn.md).

### One codebase, running everywhere

Navify is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](theming/platform-styles.md), Navify apps look and feel at home on every device.

### A focus on performance

Navify is built to perform and behave great on the latest mobile devices with best practices like efficient hardware accelerated transitions, and touch-optimized gestures.

### Clean, simple, and functional design

Navify is designed to work and display beautifully on all current mobile devices and platforms. With ready-made components, typography, and a gorgeous (yet extensible) base theme that adapts to each platform, you'll be building in style.

### Native and Web optimized

Navify emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Navify uses Capacitor (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, desktop, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Navify is built on top of reliable, [standardized web technologies](reference/glossary.md#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Navify components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Navify is designed to work and display beautifully out-of-the-box across all platforms.
Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Navify is built with simplicity in mind, so that creating apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Framework Compatibility

While past releases of Navify were tightly coupled to Angular, version 4.x of the framework was re-engineered to work as a standalone <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> library, with integrations for the latest JavaScript frameworks. Navify can be used in most frontend frameworks with success, including Kdu, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with moving Navify to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Navify as a standalone library in a single page even in a context like WordPress.

### Kdu

Navify now has official support for the popular Kdu 3 library. Navify Kdu lets Kdu developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@navify/kdu`, you can use all the core Navify components, but in a way that feels like using native Kdu components.

### Future Support

Support for other frameworks will be considered in future releases.

## Navify CLI

The official [Navify CLI](cli.md), or Command Line Interface, is a tool that quickly scaffolds Navify apps and provides a number of helpful commands to Navify developers. In addition to installing and updating Navify, the CLI comes with a built-in development server, build and debugging tools, and much more.

## Ecosystem

Navify is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Navify to build and ship amazing apps that run everywhere.

## License

The Navify UI Toolkit is a free and open source project, released under the permissible <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.
