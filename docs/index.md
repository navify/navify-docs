---
title: Introduction to Navify
sidebar_label: Overview
slug: /
hide_table_of_contents: true
demoUrl: https://navify-docs-demo.web.app/
demoSourceUrl: https://github.com/navify/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Open-Source UI Toolkit to Create Your Own Mobile Apps</title>
  <meta
    name="description"
    content="Navify Framework is an open-source UI toolkit to create your own mobile apps using web technologies with integrations for popular frameworks."
  />
  <link rel="canonical" href="https://navifyframework.web.app/docs" />
  <link rel="alternate" href="https://navifyframework.web.app/docs" hreflang="x-default" />
  <link rel="alternate" href="https://navifyframework.web.app/docs" hreflang="en" />
  <meta property="og:url" content="https://navifyframework.web.app/docs" />
</head>

Navify is an open source UI toolkit for building performant, high-quality mobile apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like [React](react.md), and [Kdu](kdu/overview.md).

Get started building by [installing Navify](intro/cli.md) or following our [First App Tutorial](intro/next.md#build-your-first-app) to learn the main concepts.

<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

<DocsCard
  header="UI Components"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>Dive into Navify beautifully designed UI component library.</p>
</DocsCard>

<DocsCard
  header="Native Functionality"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hoverIcon="/icons/guide-native-icon-hover.svg"
>
  <p>Integrate native device plugins, like Bluetooth, Maps, HealthKit, and more.</p>
</DocsCard>

  <DocsCard header="Theming" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>Learn to easily customize and modify your Navify app's visual design to fit your brand.</p>
  </DocsCard>
</DocsCards>

## Overview

Navify focuses on the frontend UX and UI interaction of an app — UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as [React](react.md), or [Kdu](kdu/overview.md). Alternatively, it can be used standalone without any frontend framework using a simple [script include](intro/cdn.md).

### One codebase, running everywhere

Navify is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with [Adaptive Styling](theming/platform-styles.md), Navify apps look and feel at home on every device.

### A focus on performance

Navify is built to perform and behave great on the latest mobile devices with best practices like efficient hardware accelerated transitions, and touch-optimized gestures.

### Clean, simple, and functional design

Navify is designed to work and display beautifully on all current mobile devices and platforms. With ready-made components, typography, and a gorgeous (yet extensible) base theme that adapts to each platform, you'll be building in style.

### Native and Web optimized

Navify emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Navify uses Jigra (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Navify is built on top of reliable, [standardized web technologies](reference/glossary.md#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Navify components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Navify is designed to work and display beautifully out-of-the-box across all platforms.
Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Navify is built with simplicity in mind, so that creating apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Framework Compatibility

Navify can be used in most frontend frameworks with success, including React and Kdu, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with moving Navify to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Navify as a standalone library in a single page even in a context like WordPress.

### React

Navify now has official support for the popular React library. Navify React lets React developers use their existing web skills to build apps that target iOS, Android, and the web. With `@navify/react`, you can use all the core Navify components, but in a way that feels like using native React components.

### Kdu

Navify now has official support for the popular Kdu 3 library. Navify Kdu lets Kdu developers use their existing web skills to build apps that target iOS, Android, and the web. With `@navify/kdu`, you can use all the core Navify components, but in a way that feels like using native Kdu components.

### Future Support

Support for other frameworks will be considered in future releases.

## Navify CLI

The official [Navify CLI](cli.md), or Command Line Interface, is a tool that quickly scaffolds Navify apps and provides a number of helpful commands to Navify developers. In addition to installing and updating Navify, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Ecosystem

Navify is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Navify to build and ship amazing apps that run everywhere.

## License

The Navify UI Toolkit is a free and open source project, released under the permissible <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/navify/navify-docs" target="_blank">navify-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.
