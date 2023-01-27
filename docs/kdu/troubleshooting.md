---
title: Troubleshooting
---

<head>
  <title>Navify Troubleshooting Guide: Common Kdu App Development Issues</title>
  <meta
    name="description"
    content="This troubleshooting guide covers some of the more common issues you may run into when developing apps with Navify Kdu. Read to learn more about troubleshooting."
  />
</head>

This guide covers some of the more common issues you may run into when developing with Navify Kdu.

Have an issue that you think should be covered here? <a href="https://github.com/navify/navify-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">Let us know!</a>

## Failed to resolve component

```shell
[Kdu warn]: Failed to resolve component: nav-button
```

If you see this warning, then it is likely you did not import your component from `@navify/kdu`. By default, all Navify Kdu components are locally registered, meaning you need to import them each time you want to use them.

Without importing the component, you will only get the underlying Web Component, and Kdu-specific features such as `k-model` will not work.

To resolve this issue, you need to import the component from `@navify/kdu` and provide it to your Kdu component:

```html
<template>
  <nav-button>Hello World</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```

Prefer to register your components globally once? We have you covered. Our [Optimizing Your Build Guide](quickstart.md#optimizing-your-build) shows you how to register Navify Kdu components globally as well as the potential downsides to be aware of when using this approach.

## Slot attributes are deprecated

```shell
`slot` attributes are deprecated  kdu/no-deprecated-slot-attribute
```

The slots that are used in Navify Kdu are <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component slots</a>, which are different than the slots used in Kdu 2. Unfortunately, the APIs for both are very similar, and your linter is likely getting the two confused.

All Navify Kdu starters ship with this rule turned off, but you can do it yourself by adding the following to your `.eslintrc.js` file:

```js
module.exports = {
  rules: {
    'kdu/no-deprecated-slot-attribute': 'off',
  },
};
```

## Method on component is not a function

In order to access a method on an Navify Framework component in Kdu, you will need to access the underlying Web Component instance first:

```js
// ✅ This is correct
navContentRef.value.$el.scrollToBottom();

// ❌ This is incorrect and will result in an error.
navContentRef.value.scrollToBottom();
```

In other framework integrations such as Navify React, this is not needed as any `ref` you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Kdu manages refs.

See the [Quickstart Guide](quickstart.md#calling-methods-on-components) for more information.

## Page transitions are not working

In order for page transitions to work correctly, each page must have an `nav-page` component at the root:

```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Home</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">Hello World</nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavContent,
      NavHeader,
      NavPage,
      NavTitle,
      NavToolbar,
    },
  });
</script>
```

See the [NavPage documentation](navigation.md#navpage) for more information.

## Navify events bound in JavaScript are not firing

When creating event listeners in JavaScript (i.e. `addEventListener`), event names should be written as kebab-case:

```javascript
const modal = await modalController.create({
  component: Modal
});

modal.addEventListener('nav-modal-did-present', () => {
  ...
});

await modal.present();
```

This is done to align with how developers bind events in their Kdu templates by using kebab-case: https://kdu-js.web.app/guide/essentials/component-basics.html#case-insensitivity
