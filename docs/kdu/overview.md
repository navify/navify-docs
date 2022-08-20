---
title: Navify Kdu Overview
---

# Navify Kdu Overview

`@navify/kdu` combines the core Navify Framework experience with the tooling and APIs that are tailored to Kdu Developers.

## Kdu Version Support

Navify Kdu is built on top of Kdu 3.0.0. If you've built an app with early versions of Navify Kdu, you'll want to upgrade to the latest release and upgrade your Kdu dependencies.

## Kdu Tooling

Navify Kdu projects ship with the same tooling as regular Kdu CLI projects. Meaning you'll be building with the Kdu CLI and all of it's features. In addition, starter projects also ship with few features enabled by default, like Routing and TypeScript support.

## Native Tooling

[Jigra](https://jigrajs.web.app) is the official cross-platform app runtime used to make your `Navify Kdu` web app run natively on iOS, Android, and the web.

While there are no known technical limitations to using `Navify Kdu` with [Cordova](https://cordova.apache.org/) plugins, Jjigra is officially recommended. There are no plans to support a Cordova integration for `Navify Kdu` in the [Navify CLI tooling](../cli.md) at this time. For more details, please [see here](https://jigrajs.web.app/docs/cordova).

## Installation

```shell-session
$ npm install -g @navify/cli
$ navify start myApp tabs --type kdu

$ navify serve █
```

## Resources

- [Getting Started](../your-first-app): Learn the fundamentals you need to know to start building amazing apps with Navify Framework.
- [Navigation](../navigation): Learn the basics of navigation inside your app with Navify and Kdu Router.
- [Lifecycle](../lifecycle): Learn about using Navify lifecycle events in class components and with hooks.
