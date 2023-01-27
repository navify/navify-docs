---
title: "nav-route"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/route/props.md';
import Events from '@site/static/auto-generated/route/events.md';
import Methods from '@site/static/auto-generated/route/methods.md';
import Parts from '@site/static/auto-generated/route/parts.md';
import CustomProps from '@site/static/auto-generated/route/custom-props.md';
import Slots from '@site/static/auto-generated/route/slots.md';

<head>
  <title>nav-route: API Route Component for Navify Framework Apps</title>
  <meta name="description" content="The nav-route component takes a component and renders it when the Browser URL matches the URL property. Learn more about the API route component for Navify Apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The route component takes a component and renders it when the Browser URL matches the url property.

:::note
 Note: this component should only be used with vanilla and Rindo JavaScript projects.
:::


## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `nav-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```




## Usage

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'rindo', label: 'Rindo' }, { value: 'kdu', label: 'Kdu' }]}>

<TabItem value="javascript">

```html
<nav-router>
  <nav-route url="/home" component="page-home"></nav-route>
  <nav-route url="/dashboard" component="page-dashboard"></nav-route>
  <nav-route url="/new-message" component="page-new-message"></nav-route>
  <nav-route url="/login" component="page-login"></nav-route>
</nav-router>
```

```javascript
const dashboardPage = document.querySelector('nav-route[url="/dashboard"]');
dashboardPage.beforeEnter = isLoggedInGuard;

const newMessagePage = document.querySelector('nav-route[url="/dashboard"]');
newMessagePage.beforeLeave = hasUnsavedDataGuard;

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = document.createElement('nav-alert');
  alert.header = 'Discard Unsaved Changes?';
  alert.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    }
  ];
  
  document.body.appendChild(alert);
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


</TabItem>


<TabItem value="rindo">

```typescript
import { Component, h } from '@rindo/core';
import { alertController } from '@navify/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css'
})
export class RouterExample {
  render() {
    return (
      <nav-router>
        <nav-route url="/home" component="page-home"></nav-route>
        <nav-route url="/dashboard" component="page-dashboard" beforeEnter={isLoggedInGuard}></nav-route>
        <nav-route url="/new-message" component="page-new-message" beforeLeave={hasUnsavedDataGuard}></nav-route>
        <nav-route url="/login" component="page-login"></nav-route>
      </nav-router>
    )
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = await alertController.create({
    header: 'Discard Unsaved Changes?',
    message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
      },
      {
        text: 'Discard',
        role: 'destructive',
      }
    ]
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


</TabItem>


<TabItem value="kdu">

```html
<template>
  <nav-router>
    <nav-route url="/home" component="page-home"></nav-route>
    <nav-route url="/dashboard" component="page-dashboard" :beforeEnter="isLoggedInGuard"></nav-route>
    <nav-route url="/new-message" component="page-new-message" :beforeLeave="hasUnsavedDataGuard"></nav-route>
    <nav-route url="/login" component="page-login"></nav-route>
  </nav-router>
</template>

<script>
  import { alertController } from '@navify/kdu';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
    
    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
    }
  }
  
  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // Replace this with actual validation
    
    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  }
  
  const confirmDiscardChanges = async () => {
    const alert = await alertController.create({
      header: 'Discard Unsaved Changes?',
      message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Discard',
          role: 'destructive',
        }
      ]
    });
    
    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    
    return (role === 'Cancel') ? false : true;
  }
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