---
title: "nav-tab-button"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/tab-button/props.md';
import Events from '@site/static/auto-generated/tab-button/events.md';
import Methods from '@site/static/auto-generated/tab-button/methods.md';
import Parts from '@site/static/auto-generated/tab-button/parts.md';
import CustomProps from '@site/static/auto-generated/tab-button/custom-props.md';
import Slots from '@site/static/auto-generated/tab-button/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



A tab button is a UI component that is placed inside of a [tab bar](tab-bar.md). The tab button can specify the layout of the icon and label and connect to a [tab view](tab.md).

See the [tabs documentation](tabs.md) for more details on configuring tabs.




## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'rindo', label: 'Rindo' }, { value: 'kdu', label: 'Kdu' }]}>

<TabItem value="javascript">

```html
<nav-tabs>
  <!-- Tab views -->
  <nav-tab tab="schedule">
    <nav-router-outlet name="schedule"></nav-router-outlet>
  </nav-tab>

  <nav-tab tab="speakers">
    <nav-router-outlet name="speakers"></nav-router-outlet>
  </nav-tab>

  <nav-tab tab="map">
    <nav-router-outlet name="map"></nav-router-outlet>
  </nav-tab>

  <nav-tab tab="about">
    <nav-router-outlet name="about"></nav-router-outlet>
  </nav-tab>

  <!-- Tab bar -->
  <nav-tab-bar slot="bottom">
    <nav-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
      <nav-icon name="calendar" aria-hidden="true"></nav-icon>
      <nav-label>Schedule</nav-label>
    </nav-tab-button>

    <nav-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
      <nav-icon name="person-circle" aria-hidden="true"></nav-icon>
      <nav-label>Speakers</nav-label>
    </nav-tab-button>

    <nav-tab-button tab="map" href="/app/tabs/(map:map)">
      <nav-icon name="map" aria-hidden="true"></nav-icon>
      <nav-label>Map</nav-label>
    </nav-tab-button>

    <nav-tab-button tab="about" href="/app/tabs/(about:about)">
      <nav-icon name="information-circle" aria-hidden="true"></nav-icon>
      <nav-label>About</nav-label>
    </nav-tab-button>
  </nav-tab-bar>
</nav-tabs>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { NavTabs, NavTabBar, NavTabButton, NavIcon, NavLabel, NavContent } from '@navify/react';
import { calendar, personCircle, map, informationCircle } from 'navicons/icons';

export const TabButtonExample: React.FC = () => (
  <NavContent>
    <NavTabs>
      {/*-- Tab bar --*/}
      <NavTabBar slot="bottom">
        <NavTabButton tab="schedule">
          <NavIcon icon={calendar} aria-hidden="true" />
          <NavLabel>Schedule</NavLabel>
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
  </NavContent>
);
```


</TabItem>


<TabItem value="rindo">

```tsx
import { Component, h } from '@rindo/core';

@Component({
  tag: 'tab-button-example',
  styleUrl: 'tab-button-example.css'
})
export class TabButtonExample {
  render() {
    return [
      <nav-tabs>
        {/* Tab views */}
        <nav-tab tab="schedule">
          <nav-router-outlet name="schedule"></nav-router-outlet>
        </nav-tab>

        <nav-tab tab="speakers">
          <nav-router-outlet name="speakers"></nav-router-outlet>
        </nav-tab>

        <nav-tab tab="map">
          <nav-router-outlet name="map"></nav-router-outlet>
        </nav-tab>

        <nav-tab tab="about">
          <nav-router-outlet name="about"></nav-router-outlet>
        </nav-tab>

        {/* Tab bar */}
        <nav-tab-bar slot="bottom">
          <nav-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
            <nav-icon name="calendar" aria-hidden="true"></nav-icon>
            <nav-label>Schedule</nav-label>
          </nav-tab-button>

          <nav-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
            <nav-icon name="person-circle" aria-hidden="true"></nav-icon>
            <nav-label>Speakers</nav-label>
          </nav-tab-button>

          <nav-tab-button tab="map" href="/app/tabs/(map:map)">
            <nav-icon name="map" aria-hidden="true"></nav-icon>
            <nav-label>Map</nav-label>
          </nav-tab-button>

          <nav-tab-button tab="about" href="/app/tabs/(about:about)">
            <nav-icon name="information-circle" aria-hidden="true"></nav-icon>
            <nav-label>About</nav-label>
          </nav-tab-button>
        </nav-tab-bar>
      </nav-tabs>
    ];
  }
}
```


</TabItem>


<TabItem value="kdu">

```html
<template>
  <nav-tabs>
    <!-- Tab bar -->
    <nav-tab-bar slot="bottom">
      <nav-tab-button tab="schedule" href="/tabs/schedule">
        <nav-icon :icon="calendar" aria-hidden="true"></nav-icon>
        <nav-label>Schedule</nav-label>
      </nav-tab-button>

      <nav-tab-button tab="speakers" href="/tabs/speakers">
        <nav-icon :icon="person-circle" aria-hidden="true"></nav-icon>
        <nav-label>Speakers</nav-label>
      </nav-tab-button>

      <nav-tab-button tab="map" href="/tabs/map">
        <nav-icon :icon="map" aria-hidden="true"></nav-icon>
        <nav-label>Map</nav-label>
      </nav-tab-button>

      <nav-tab-button tab="about" href="/tabs/about">
        <nav-icon :icon="informationCircle" aria-hidden="true"></nav-icon>
        <nav-label>About</nav-label>
      </nav-tab-button>
    </nav-tab-bar>
  </nav-tabs>
</template>

<script>
import { 
  NavIcon, 
  NavLabel, 
  NavTabBar, 
  NavTabButton, 
  NavTabs
} from '@navify/kdu';
import { calendar, informationCircle, map, personCircle } from 'navicons/icons';
import { defineComponent } from 'kdu';

export default defineComponent({
  components: {
    NavIcon, 
    NavLabel, 
    NavTabBar, 
    NavTabButton, 
    NavTabs
  },
  setup() {
    return { calendar, informationCircle, map, personCircle }
  }
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
