---
title: "nav-router"
hide_table_of_contents: true
---
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/router/props.md';
import Events from '@site/static/auto-generated/router/events.md';
import Methods from '@site/static/auto-generated/router/methods.md';
import Parts from '@site/static/auto-generated/router/parts.md';
import CustomProps from '@site/static/auto-generated/router/custom-props.md';
import Slots from '@site/static/auto-generated/router/slots.md';

<head>
  <title>nav-router: Router Component to Coordinate URL Navigation</title>
  <meta name="description" content="nav-router is a URL coordinator for navigation outlets of navify: nav-nav and nav-tabs. Router components handle routing inside vanilla and Rindo JavaScript." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';



<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The router is a component for handling routing inside vanilla and Rindo JavaScript projects.

:::note
 Note: this component should only be used with vanilla and Rindo JavaScript projects.router.
:::


Apps should have a single `nav-router` component in the codebase.
This component controls all interactions with the browser history and it aggregates updates through an event system.

`nav-router` is just a URL coordinator for the navigation outlets of navify: `nav-nav`, `nav-tabs`, and `nav-router-outlet`.

That means the `nav-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `nav-nav`, `nav-tabs`, and `nav-router-outlet` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `nav-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Navify events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLNavRouterElement;
}
```



## Usage

```html
<nav-router>
  <nav-route component="page-tabs">
    <nav-route url="/schedule" component="tab-schedule">
      <nav-route component="page-schedule"></nav-route>
      <nav-route url="/session/:sessionId" component="page-session"></nav-route>
    </nav-route>

    <nav-route url="/speakers" component="tab-speaker">
      <nav-route component="page-speaker-list"></nav-route>
      <nav-route url="/session/:sessionId" component="page-session"></nav-route>
      <nav-route url="/:speakerId" component="page-speaker-detail"></nav-route>
    </nav-route>

    <nav-route url="/map" component="page-map"></nav-route>
    <nav-route url="/about" component="page-about"></nav-route>
  </nav-route>

  <nav-route url="/tutorial" component="page-tutorial"></nav-route>
  <nav-route url="/login" component="page-login"></nav-route>
  <nav-route url="/account" component="page-account"></nav-route>
  <nav-route url="/signup" component="page-signup"></nav-route>
  <nav-route url="/support" component="page-support"></nav-route>
</nav-router>

```


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