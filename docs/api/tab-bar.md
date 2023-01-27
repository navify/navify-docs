---
title: "nav-tab-bar"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/tab-bar/props.md';
import Events from '@site/static/auto-generated/tab-bar/events.md';
import Methods from '@site/static/auto-generated/tab-bar/methods.md';
import Parts from '@site/static/auto-generated/tab-bar/parts.md';
import CustomProps from '@site/static/auto-generated/tab-bar/custom-props.md';
import Slots from '@site/static/auto-generated/tab-bar/slots.md';

<head>
  <title>nav-tab-bar with CSS Custom Properties for Tab Bar Components</title>
  <meta name="description" content="The tab bar component contains a set of tab buttons and a tab bar must be provided inside of tabs to communicate. Read more about use and CSS custom properties." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The tab bar is a UI component that contains a set of [tab buttons](tab-button.md). A tab bar must be provided inside of [tabs](tabs.md) to communicate with each [tab](tab.md).




## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'rindo', label: 'Rindo' }, { value: 'kdu', label: 'Kdu' }]}>

<TabItem value="javascript">

```html
<nav-tabs>
  <!-- Tab views -->
  <nav-tab tab="account"></nav-tab>
  <nav-tab tab="contact"></nav-tab>
  <nav-tab tab="settings"></nav-tab>

  <!-- Tab bar -->
  <nav-tab-bar slot="bottom">
    <nav-tab-button tab="account">
      <nav-icon name="person"></nav-icon>
    </nav-tab-button>
    <nav-tab-button tab="contact">
      <nav-icon name="call"></nav-icon>
    </nav-tab-button>
    <nav-tab-button tab="settings">
      <nav-icon name="settings"></nav-icon>
    </nav-tab-button>
  </nav-tab-bar>
</nav-tabs>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { NavTabs, NavTabBar, NavTabButton, NavIcon, NavContent } from '@navify/react';
import { call, person, settings } from 'navicons/icons';

export const TabBarExample: React.FC = () => (
  <NavContent>
    <NavTabs>
      {/*-- Tab bar --*/}
      <NavTabBar slot="bottom">
        <NavTabButton tab="account">
          <NavIcon icon={person} />
        </NavTabButton>
        <NavTabButton tab="contact">
          <NavIcon icon={call} />
        </NavTabButton>
        <NavTabButton tab="settings">
          <NavIcon icon={settings} />
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
  tag: 'tab-bar-example',
  styleUrl: 'tab-bar-example.css'
})
export class TabBarExample {
  render() {
    return [
      <nav-tabs>
        {/* Tab views */}
        <nav-tab tab="account" component="page-account"></nav-tab>
        <nav-tab tab="contact" component="page-contact"></nav-tab>
        <nav-tab tab="settings" component="page-settings"></nav-tab>

        {/* Tab bar */}
        <nav-tab-bar slot="bottom">
          <nav-tab-button tab="account">
            <nav-icon name="person"></nav-icon>
          </nav-tab-button>
          <nav-tab-button tab="contact">
            <nav-icon name="call"></nav-icon>
          </nav-tab-button>
          <nav-tab-button tab="settings">
            <nav-icon name="settings"></nav-icon>
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
      <nav-tab-button tab="account">
        <nav-icon :icon="person"></nav-icon>
      </nav-tab-button>
      <nav-tab-button tab="contact">
        <nav-icon :icon="call"></nav-icon>
      </nav-tab-button>
      <nav-tab-button tab="settings">
        <nav-icon :icon="settings"></nav-icon>
      </nav-tab-button>
    </nav-tab-bar>
  </nav-tabs>
</template>

<script>
import { NavIcon, NavTabBar, NavTabButton, NavTabs } from '@navify/kdu';
import { call, person, settings } from 'navicons/icons';
import { defineComponent } from 'kdu';

export default defineComponent({
  components: { NavIcon, NavTabBar, NavTabButton, NavTabs },
  setup() {
    return { call, person, settings }
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