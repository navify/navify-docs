---
title: "nav-router-outlet"
hide_table_of_contents: true
---
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/router-outlet/props.md';
import Events from '@site/static/auto-generated/router-outlet/events.md';
import Methods from '@site/static/auto-generated/router-outlet/methods.md';
import Parts from '@site/static/auto-generated/router-outlet/parts.md';
import CustomProps from '@site/static/auto-generated/router-outlet/custom-props.md';
import Slots from '@site/static/auto-generated/router-outlet/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The router outlet behaves in a similar way to Kdu's router view component, but contains the logic for providing a stacked navigation, and animating views in and out.

Although router outlet has methods for navigating around, it's recommended to use the navigation methods in your framework's router.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific Navify events that are wired up to animations


| Event Name         | Trigger                                                            |
|--------------------|--------------------------------------------------------------------|
| `navViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `navViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `navViewWillLeave` | Fired when the component routing from is about to animate.         |
| `navViewDidLeave`  | Fired when the component routing to has finished animating.        |


These event tie into Navify's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `navViewCanEnter` and `navViewCanLeave` have been replaced with their framework specific equivalent.




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