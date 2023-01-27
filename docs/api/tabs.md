---
title: "nav-tabs"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/tabs/index.html"
demoSourceUrl: "https://github.com/navify/navify-docs/tree/main/static/demos/api/tabs/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/tabs/props.md';
import Events from '@site/static/auto-generated/tabs/events.md';
import Methods from '@site/static/auto-generated/tabs/methods.md';
import Parts from '@site/static/auto-generated/tabs/parts.md';
import CustomProps from '@site/static/auto-generated/tabs/custom-props.md';
import Slots from '@site/static/auto-generated/tabs/slots.md';

<head>
  <title>Nav-Tabs: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabs are top-level components to implement tab-based navigation. Nav-tabs have no styling & work as router outlets for navigation that behaves like native apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Tabs are a top level navigation component to implement a tab-based navigation.
The component is a container of individual [Tab](tab.md) components.

The `nav-tabs` component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an `nav-tab-bar` should be provided as a direct child of `nav-tabs`.

Both `nav-tabs` and `nav-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.

The `nav-tab-bar` needs a slot defined in order to be projected to the right place in an `nav-tabs` component.

## Interfaces

### TabsCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Navify events emitted from this component.

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLNavTabsElement;
}
```




## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'rindo', label: 'Rindo' }, { value: 'kdu', label: 'Kdu' }]}>

<TabItem value="javascript">

```html
<nav-tabs>

  <nav-tab tab="tab-schedule">
    <nav-nav></nav-nav>
  </nav-tab>

  <nav-tab tab="tab-speaker">
    <nav-nav></nav-nav>
  </nav-tab>

  <nav-tab tab="tab-map" component="page-map">
    <nav-nav></nav-nav>
  </nav-tab>

  <nav-tab tab="tab-about" component="page-about">
    <nav-nav></nav-nav>
  </nav-tab>

  <nav-tab-bar slot="bottom">
    <nav-tab-button tab="tab-schedule">
      <nav-icon name="calendar" aria-hidden="true"></nav-icon>
      <nav-label>Schedule</nav-label>
      <nav-badge>6</nav-badge>
    </nav-tab-button>

    <nav-tab-button tab="tab-speaker">
      <nav-icon name="person-circle" aria-hidden="true"></nav-icon>
      <nav-label>Speakers</nav-label>
    </nav-tab-button>

    <nav-tab-button tab="tab-map">
      <nav-icon name="map" aria-hidden="true"></nav-icon>
      <nav-label>Map</nav-label>
    </nav-tab-button>

    <nav-tab-button tab="tab-about">
      <nav-icon name="information-circle" aria-hidden="true"></nav-icon>
      <nav-label>About</nav-label>
    </nav-tab-button>
  </nav-tab-bar>

</nav-tabs>
```


### Activating Tabs

Each `nav-tab-button` will activate one of the tabs when pressed. In order to link the `nav-tab-button` to the `nav-tab` container, a matching `tab` property should be set on each component.

```html
<nav-tab tab="settings">
  ...
</nav-tab>

<nav-tab-button tab="settings">
  ...
</nav-tab-button>
```

The `nav-tab-button` and `nav-tab` above are linked by the common `tab` property.

The `tab` property identifies each tab, and it has to be unique within the `nav-tabs`. It's important to always set the `tab` property on the `nav-tab` and `nav-tab-button`, even if one component is not used.


### Router integration

When used with Navify's router (`nav-router`) the `tab` property of the `nav-tab` matches the `component` property of an `nav-route`.

The following route within the scope of an `nav-tabs` outlet:

```html
<nav-route url="/settings-page" component="settings"></nav-route>
```

will match the following tab:

```html
<nav-tab tab="settings" component="settings-component"></nav-tab>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { NavTabs, NavTabBar, NavTabButton, NavIcon, NavLabel, NavBadge } from '@navify/react';
import { calendar, personCircle, map, informationCircle } from 'navicons/icons';


export const TabsExample: React.FC = () => (
  <NavTabs>
    <NavTabBar slot="bottom">
      <NavTabButton tab="schedule">
        <NavIcon icon={calendar} aria-hidden="true" />
        <NavLabel>Schedule</NavLabel>
        <NavBadge>6</NavBadge>
      </NavTabButton>

      <NavTabButton tab="speakers">
        <NavIcon icon={personCircle} aria-hidden="true" />
        <NavLabel>Speakers</NavLabel>
      </NavTabButton>

      <NavTabButton tab="map">
        <NavIcon icon={map} aria-hidden="true" />
        <NavLabel>Map</NavLabel>
      </NavTabButton>

      <NavTabButton tab="about">
        <NavIcon icon={informationCircle} aria-hidden="true" />
        <NavLabel>About</NavLabel>
      </NavTabButton>
    </NavTabBar>
  </NavTabs>
);
```


</TabItem>


<TabItem value="rindo">

```tsx
import { Component, h } from '@rindo/core';

@Component({
  tag: 'tabs-example',
  styleUrl: 'tabs-example.css'
})
export class TabsExample {
  render() {
    return [
     <nav-tabs>
      <nav-tab tab="tab-schedule">
        <nav-nav></nav-nav>
      </nav-tab>

      <nav-tab tab="tab-speaker">
        <nav-nav></nav-nav>
      </nav-tab>

      <nav-tab tab="tab-map" component="page-map">
        <nav-nav></nav-nav>
      </nav-tab>

      <nav-tab tab="tab-about" component="page-about">
        <nav-nav></nav-nav>
      </nav-tab>

      <nav-tab-bar slot="bottom">
        <nav-tab-button tab="tab-schedule">
          <nav-icon name="calendar" aria-hidden="true"></nav-icon>
          <nav-label>Schedule</nav-label>
          <nav-badge>6</nav-badge>
        </nav-tab-button>

        <nav-tab-button tab="tab-speaker">
          <nav-icon name="person-circle" aria-hidden="true"></nav-icon>
          <nav-label>Speakers</nav-label>
        </nav-tab-button>

        <nav-tab-button tab="tab-map">
          <nav-icon name="map" aria-hidden="true"></nav-icon>
          <nav-label>Map</nav-label>
        </nav-tab-button>

        <nav-tab-button tab="tab-about">
          <nav-icon name="information-circle" aria-hidden="true"></nav-icon>
          <nav-label>About</nav-label>
        </nav-tab-button>
      </nav-tab-bar>

    </nav-tabs>
    ];
  }
}
```


### Activating Tabs

Each `nav-tab-button` will activate one of the tabs when pressed. In order to link the `nav-tab-button` to the `nav-tab` container, a matching `tab` property should be set on each component.

```jsx
<nav-tab tab="settings">
  ...
</nav-tab>

<nav-tab-button tab="settings">
  ...
</nav-tab-button>
```

The `nav-tab-button` and `nav-tab` above are linked by the common `tab` property.

The `tab` property identifies each tab, and it has to be unique within the `nav-tabs`. It's important to always set the `tab` property on the `nav-tab` and `nav-tab-button`, even if one component is not used.


### Router integration

When used with Navify's router (`nav-router`) the `tab` property of the `nav-tab` matches the `component` property of an `nav-route`.

The following route within the scope of an `nav-tabs` outlet:

```tsx
<nav-route url="/settings-page" component="settings"></nav-route>
```

will match the following tab:

```tsx
<nav-tab tab="settings" component="settings-component"></nav-tab>
```

</TabItem>


<TabItem value="kdu">

**Tabs.kdu**
```html
<template>
  <nav-page>
    <nav-tabs @navTabsWillChange="beforeTabChange" @navTabsDidChange="afterTabChange">
      <!-- https://navifyframework.web.app/docs/kdu/navigation#working-with-tabs -->
      <nav-router-outlet></nav-router-outlet>
      <nav-tab-bar slot="bottom">
        <nav-tab-button tab="schedule" href="/tabs/schedule">
          <nav-icon :icon="calendar" aria-hidden="true"></nav-icon>
          <nav-label>Schedule</nav-label>
          <nav-badge>6</nav-badge>
        </nav-tab-button>
  
        <nav-tab-button tab="speakers" href="/tabs/speakers">
          <nav-icon :icon="personCircle" aria-hidden="true"></nav-icon>
          <nav-label>Speakers</nav-label>
        </nav-tab-button>
      </nav-tab-bar>
    </nav-tabs>
  </nav-page>
</template>

<script>
import { defineComponent } from 'kdu';
import { 
  NavIcon, 
  NavLabel, 
  NavPage,
  NavRouterOutlet,
  NavTabBar, 
  NavTabButton, 
  NavTabs
} from '@navify/kdu';
import { calendar, personCircle } from 'navicons/icons';

export default defineComponent({
  components: { NavIcon, NavLabel, NavPage, NavRouterOutlet, NavTabBar, NavTabButton, NavTabs },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange
    }
  }
});
</script>
```

**Schedule.kdu**
```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Schedule</nav-title>
      </nav-toolbar>
    </nav-header>
    
    <nav-content class="nav-padding">Schedule Tab</nav-content>
  </nav-page>
</template>

<script>
import { defineComponent } from 'kdu';
import {
  NavContent,
  NavHeader,
  NavPage,
  NavTitle,
  NavToolbar
} from '@navify/kdu';

export default defineComponent({
  components: { NavContent, NavHeader, NavPage, NavTitle, NavToolbar }
});
</script>
```

**Speakers.kdu**
```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Speakers</nav-title>
      </nav-toolbar>
    </nav-header>
    
    <nav-content class="nav-padding">Speakers Tab</nav-content>
  </nav-page>
</template>

<script>
import { defineComponent } from 'kdu';
import {
  NavContent,
  NavHeader,
  NavPage,
  NavTitle,
  NavToolbar
} from '@navify/kdu';

export default defineComponent({
  components: { NavContent, NavHeader, NavPage, NavTitle, NavToolbar }
});
</script>
```

</TabItem>

</Tabs>

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
