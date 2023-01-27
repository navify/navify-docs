---
title: "nav-back-button"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/back-button/index.html"
demoSourceUrl: "https://github.com/navify/navify-docs/tree/main/static/demos/api/back-button/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/back-button/props.md';
import Events from '@site/static/auto-generated/back-button/events.md';
import Methods from '@site/static/auto-generated/back-button/methods.md';
import Parts from '@site/static/auto-generated/back-button/parts.md';
import CustomProps from '@site/static/auto-generated/back-button/custom-props.md';
import Slots from '@site/static/auto-generated/back-button/slots.md';

<head>
  <title>Back Button | nav-back-button: Custom Menu Icon for Applications</title>
  <meta name="description" content="The nav-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Navify Framework components to easily build applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The back button navigates back in the app's history upon click. It is smart enough to know what to render based on the mode and when to show based on the navigation stack.

To change what is displayed in the back button, use the `text` and `icon` properties.




## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'rindo', label: 'Rindo' }, { value: 'kdu', label: 'Kdu' }]}>

<TabItem value="javascript">

```html
<!-- Default back button -->
<nav-header>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-back-button></nav-back-button>
    </nav-buttons>
  </nav-toolbar>
</nav-header>

<!-- Back button with a default href -->
<nav-header>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-back-button default-href="home"></nav-back-button>
    </nav-buttons>
  </nav-toolbar>
</nav-header>

<!-- Back button with custom text and icon -->
<nav-header>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-back-button text="Volver" icon="close"></nav-back-button>
    </nav-buttons>
  </nav-toolbar>
</nav-header>

<!-- Back button with no text and custom icon -->
<nav-header>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-back-button text="" icon="add"></nav-back-button>
    </nav-buttons>
  </nav-toolbar>
</nav-header>

<!-- Danger back button next to a menu button -->
<nav-header>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-menu-button></nav-menu-button>
      <nav-back-button color="danger"></nav-back-button>
    </nav-buttons>
  </nav-toolbar>
</nav-header>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { NavBackButton, NavHeader, NavToolbar, NavButtons, NavMenuButton, NavContent } from '@navify/react';

export const BackButtonExample: React.FC = () => (
  <NavContent>
    {/*-- Default back button --*/}
    <NavHeader>
      <NavToolbar>
        <NavButtons slot="start">
          <NavBackButton />
        </NavButtons>
      </NavToolbar>
    </NavHeader>

    {/*-- Back button with a default href --*/}
    <NavHeader>
      <NavToolbar>
        <NavButtons slot="start">
          <NavBackButton defaultHref="home" />
        </NavButtons>
      </NavToolbar>
    </NavHeader>

    {/*-- Back button with custom text and icon --*/}
    <NavHeader>
      <NavToolbar>
        <NavButtons slot="start">
          <NavBackButton text="buttonText" icon="buttonIcon" />
        </NavButtons>
      </NavToolbar>
    </NavHeader>

    {/*-- Back button with no text and custom icon --*/}
    <NavHeader>
      <NavToolbar>
        <NavButtons slot="start">
          <NavBackButton text="" icon="add" />
        </NavButtons>
      </NavToolbar>
    </NavHeader>

    {/*-- Danger back button next to a menu button --*/}
    <NavHeader>
      <NavToolbar>
        <NavButtons slot="start">
          <NavMenuButton />
          <NavBackButton color="danger" />
        </NavButtons>
      </NavToolbar>
    </NavHeader>
  </NavContent>
);
```

</TabItem>


<TabItem value="rindo">

```tsx
import { Component, h } from '@rindo/core';

@Component({
  tag: 'back-button-example',
  styleUrl: 'back-button-example.css'
})
export class BackButtonExample {
  render() {
    const buttonText = "Custom";
    const buttonIcon = "add";

    return [
      // Default back button
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-back-button></nav-back-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>,

      // Back button with a default href
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-back-button defaultHref="home"></nav-back-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>,

      // Back button with custom text and icon
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-back-button
              text={buttonText}
              icon={buttonIcon}>
            </nav-back-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>,

      // Back button with no text and custom icon
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-back-button text="" icon="add"></nav-back-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>,

      // Danger back button next to a menu button
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-menu-button></nav-menu-button>
            <nav-back-button color="danger"></nav-back-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
    ];
  }
}
```

</TabItem>


<TabItem value="kdu">

```html
<template>
  <!-- Default back button -->
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button></nav-back-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>

  <!-- Back button with a default href -->
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button default-href="home"></nav-back-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>

  <!-- Back button with custom text and icon -->
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button
            :text="buttonText"
            :icon="buttonIcon">
        </nav-back-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>

  <!-- Back button with no text and custom icon -->
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button text="" icon="add"></nav-back-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>

  <!-- Danger back button next to a menu button -->
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-menu-button></nav-menu-button>
        <nav-back-button color="danger"></nav-back-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>
</template>

<script>
import { NavButtons, NavHeader, NavMenuButton, NavToolbar } from '@navify/kdu';
import { defineComponent } from 'kdu';

export default defineComponent({
  components: { NavButtons, NavHeader, NavMenuButton, NavToolbar }
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