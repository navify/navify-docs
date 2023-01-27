---
title: "nav-app"
---
import Props from '@site/static/auto-generated/app/props.md';
import Events from '@site/static/auto-generated/app/events.md';
import Methods from '@site/static/auto-generated/app/methods.md';
import Parts from '@site/static/auto-generated/app/parts.md';
import CustomProps from '@site/static/auto-generated/app/custom-props.md';
import Slots from '@site/static/auto-generated/app/slots.md';

<head>
  <title>nav-app: Container Element for an Navify Application</title>
  <meta name="description" content="nav-app is a container element for an Navify application. Apps can have many Navify components including menus, headers, content, and footers. Read to learn more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


App is a container element for an Navify application. There should only be one `<nav-app>` element per project. An app can have many Navify components including menus, headers, content, and footers. The overlay components get appended to the `<nav-app>` when they are presented.

Using `nav-app` enables the following behaviors:

* [Keyboard Lifecycle Events](../developing/keyboard#keyboard-lifecycle-events) without the need for any native plugins
* [Hardware Back Button Listeners](../developing/hardware-back-button) for customizing the hardware back button behavior on Android devices
* Status bar support in Jigra or Cordova which allows users to scroll to the top of the view by tapping the status bar
* Scroll assist utilities which scroll the content so focused text inputs are not covered by the on-screen keyboard
* [Ripple effect](./ripple-effect) when activating buttons on Material Design mode
* Other tap and focus utilities which make the experience of using an Navify app feel more native


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
