---
title: Dark Mode
initialTab: 'preview'
inlineHtmlPreviews: true
---

import Codepen from '@components/global/Codepen';

<head>
  <title>Dark Mode to Change Color Schemes and CSS Properties</title>
  <meta
    name="description"
    content="Developers are adding dark mode CSS on native applications to support their user preferences. Read to learn more about dark color schemes for Navify apps."
  />
</head>

Navify makes it easy to change the themes of your app, including supporting dark color schemes. With growing support for dark mode in native apps, developers are now looking to add it to their apps to support user preferences.

## Using Media Queries

The first way to enable dark mode is by using the [CSS media query for the user's preferred color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). This media query will hook into the system setting of the user's device and apply the theme if a dark mode is enabled.

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* dark mode variables go here */
  }
}
```

Currently, the `prefers-color-scheme` media query has [limited browser support](https://caniuse.com/#feat=prefers-color-scheme), so users will not be able to benefit from having the dark mode applied using this media query in certain browsers. However, the dark mode can still be applied by using a [CSS class fallback](#css-class-fallback).

## CSS Class Fallback

As a fallback method for devices that don't support the media query, the dark mode can be applied by styling a CSS selector and applying the class to the document body.

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables go here */
  }
}

/* Fallback for older browsers or manual mode */
body.dark {
  /* Dark mode variables go here */
}
```

With the variables targeting the `body.dark` selector, all that is needed now is to add the class to the `<body>` in the app. This can be done in a variety of ways depending on the framework your app is built with.

Notice that the variables should be in both places in this example. We can [use JavaScript](#combining-with-javascript) in order to avoid setting the variables in two places.

## Combining with JavaScript

In order to keep the CSS variables written once and avoid having to update them in multiple places, the fallback and class can be combined by using JavaScript to check the value of the `prefers-color-scheme` media query and adding the `dark` class if the preference is `dark`. Here's what the CSS would look like:

```css
body.dark {
  /* Dark mode variables go here */
}
```

Notice that the variables above are only in the `body.dark` selector now, and the `prefers-color-scheme` media query has been removed.

### Automatically Enable Dark Mode

In the JavaScript, the `dark` class can be added to the `<body>` by checking if the document matches the media query using [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). This will enable dark mode to still work based on the user preference.

```javascript
// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}
```

:::note
Tip: make sure to view the Codepen below in a [supported browser](https://caniuse.com/#feat=prefers-color-scheme) and then try changing the system preferences on your device between light & dark mode. Here's [how to enable dark mode on Windows 10](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/) and [how to enable it on a Mac](https://support.apple.com/en-us/HT208976).
:::

<!-- Codepen https://codepen.io/khanhduy1407/pen/MWBrVEd -->

<Codepen preview="false" user="khanhduy1407" slug="MWBrVEd" height="550px" default-tab="js,result" />

### Manually Toggle Dark Mode

In addition to calling `toggleDarkTheme()` when the app loads and when the media query changes, the `toggleDarkTheme()` function could be called by the app, such as when a user changes a toggle, to switch between the light and dark themes:

```javascript
// Query for the toggle that is used to change between themes
const toggle = document.querySelector('#themeToggle');

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
toggle.addEventListener('navChange', (ev) => {
  document.body.classList.toggle('dark', ev.detail.checked);
});

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((e) => checkToggle(e.matches));

// Called when the app loads
function loadApp() {
  checkToggle(prefersDark.matches);
}

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}
```

<!-- Codepen https://codepen.io/khanhduy1407/pen/ZExPdwM -->

<Codepen preview="false" user="khanhduy1407" slug="ZExPdwM" height="600px" default-tab="js,result" />

## Adjusting System UI Components

When developing a dark theme, you may notice that certain system UI components are not adjusting to dark mode properly. To fix this you will need to specify the `color-scheme`. See the <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">browser compatibility for color-scheme</a> for details on cross browser support.

While you may be mainly using Navify components instead of only native components, `color-scheme` can also affect aspects of your application such as the scrollbar. In order to use `color-scheme` you will need to add the following HTML to the `head` of your application:

```html
<meta name="color-scheme" content="light dark" />
```

This allows the page to indicate which color scheme it is comfortable being rendered with. Alternatively, you can add the following CSS to do this on a per-element basis:

```css
color-scheme: light dark;
```

| Default scrollbar                                                        | Scrollbar with `color-scheme`                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Application without color-scheme](/img/theming/color-scheme-light.png) | ![Application with color-scheme](/img/theming/color-scheme-dark.png) |

For more information regarding `color-scheme` please see https://web.dev/color-scheme/.

:::note
`color-scheme` does not apply to the keyboard. For details on how dark mode works with the keyboard, see [Keyboard Documentation](../developing/keyboard.md#dark-mode).
:::

:::note
For developers looking to customize the theme color under the status bar in Safari on iOS 15 or the toolbar in Safari on macOS, see [`theme-color` Meta](./advanced.md#theme-color-meta).
:::

## Navify Dark Theme

Navify has a recommended theme for variables to use in order to get a dark mode based on the device running the app. It can be broken down into the following parts:

1. Changing the default [Navify colors](colors.md) for all [modes](platform-styles.md#navify-modes) to complement the dark background in the `body.dark` selector.
1. Setting variables for the dark theme on `ios` devices.
1. Setting variables for the dark theme on `md` devices.

The following code can be copied and pasted into an app to get Navify's dark theme. We add the `dark` class to the document body using JavaScript as mentioned in the [combining with JavaScript](#combining-with-javascript) section. The dark mode will not be enabled until the `dark` class is added to the document body.

:::note
For more information on the variables that are being changed, including other variables that can be added to further customize, see [Themes](themes.md).
:::

```css
/*
 * Dark Colors
 * -------------------------------------------
 */

body.dark {
  --nav-color-primary: #428cff;
  --nav-color-primary-rgb: 66, 140, 255;
  --nav-color-primary-contrast: #ffffff;
  --nav-color-primary-contrast-rgb: 255, 255, 255;
  --nav-color-primary-shade: #3a7be0;
  --nav-color-primary-tint: #5598ff;

  --nav-color-secondary: #50c8ff;
  --nav-color-secondary-rgb: 80, 200, 255;
  --nav-color-secondary-contrast: #ffffff;
  --nav-color-secondary-contrast-rgb: 255, 255, 255;
  --nav-color-secondary-shade: #46b0e0;
  --nav-color-secondary-tint: #62ceff;

  --nav-color-tertiary: #6a64ff;
  --nav-color-tertiary-rgb: 106, 100, 255;
  --nav-color-tertiary-contrast: #ffffff;
  --nav-color-tertiary-contrast-rgb: 255, 255, 255;
  --nav-color-tertiary-shade: #5d58e0;
  --nav-color-tertiary-tint: #7974ff;

  --nav-color-success: #2fdf75;
  --nav-color-success-rgb: 47, 223, 117;
  --nav-color-success-contrast: #000000;
  --nav-color-success-contrast-rgb: 0, 0, 0;
  --nav-color-success-shade: #29c467;
  --nav-color-success-tint: #44e283;

  --nav-color-warning: #ffd534;
  --nav-color-warning-rgb: 255, 213, 52;
  --nav-color-warning-contrast: #000000;
  --nav-color-warning-contrast-rgb: 0, 0, 0;
  --nav-color-warning-shade: #e0bb2e;
  --nav-color-warning-tint: #ffd948;

  --nav-color-danger: #ff4961;
  --nav-color-danger-rgb: 255, 73, 97;
  --nav-color-danger-contrast: #ffffff;
  --nav-color-danger-contrast-rgb: 255, 255, 255;
  --nav-color-danger-shade: #e04055;
  --nav-color-danger-tint: #ff5b71;

  --nav-color-dark: #f4f5f8;
  --nav-color-dark-rgb: 244, 245, 248;
  --nav-color-dark-contrast: #000000;
  --nav-color-dark-contrast-rgb: 0, 0, 0;
  --nav-color-dark-shade: #d7d8da;
  --nav-color-dark-tint: #f5f6f9;

  --nav-color-medium: #989aa2;
  --nav-color-medium-rgb: 152, 154, 162;
  --nav-color-medium-contrast: #000000;
  --nav-color-medium-contrast-rgb: 0, 0, 0;
  --nav-color-medium-shade: #86888f;
  --nav-color-medium-tint: #a2a4ab;

  --nav-color-light: #222428;
  --nav-color-light-rgb: 34, 36, 40;
  --nav-color-light-contrast: #ffffff;
  --nav-color-light-contrast-rgb: 255, 255, 255;
  --nav-color-light-shade: #1e2023;
  --nav-color-light-tint: #383a3e;
}

/*
 * iOS Dark Theme
 * -------------------------------------------
 */

.ios body.dark {
  --nav-background-color: #000000;
  --nav-background-color-rgb: 0, 0, 0;

  --nav-text-color: #ffffff;
  --nav-text-color-rgb: 255, 255, 255;

  --nav-color-step-50: #0d0d0d;
  --nav-color-step-100: #1a1a1a;
  --nav-color-step-150: #262626;
  --nav-color-step-200: #333333;
  --nav-color-step-250: #404040;
  --nav-color-step-300: #4d4d4d;
  --nav-color-step-350: #595959;
  --nav-color-step-400: #666666;
  --nav-color-step-450: #737373;
  --nav-color-step-500: #808080;
  --nav-color-step-550: #8c8c8c;
  --nav-color-step-600: #999999;
  --nav-color-step-650: #a6a6a6;
  --nav-color-step-700: #b3b3b3;
  --nav-color-step-750: #bfbfbf;
  --nav-color-step-800: #cccccc;
  --nav-color-step-850: #d9d9d9;
  --nav-color-step-900: #e6e6e6;
  --nav-color-step-950: #f2f2f2;

  --nav-item-background: #000000;

  --nav-card-background: #1c1c1d;
}

.ios body.dark nav-modal {
  --nav-background-color: var(--nav-color-step-100);
  --nav-toolbar-background: var(--nav-color-step-150);
  --nav-toolbar-border-color: var(--nav-color-step-250);
  --nav-item-background: var(--nav-color-step-150);
}

/*
 * Material Design Dark Theme
 * -------------------------------------------
 */

.md body.dark {
  --nav-background-color: #121212;
  --nav-background-color-rgb: 18, 18, 18;

  --nav-text-color: #ffffff;
  --nav-text-color-rgb: 255, 255, 255;

  --nav-border-color: #222222;

  --nav-color-step-50: #1e1e1e;
  --nav-color-step-100: #2a2a2a;
  --nav-color-step-150: #363636;
  --nav-color-step-200: #414141;
  --nav-color-step-250: #4d4d4d;
  --nav-color-step-300: #595959;
  --nav-color-step-350: #656565;
  --nav-color-step-400: #717171;
  --nav-color-step-450: #7d7d7d;
  --nav-color-step-500: #898989;
  --nav-color-step-550: #949494;
  --nav-color-step-600: #a0a0a0;
  --nav-color-step-650: #acacac;
  --nav-color-step-700: #b8b8b8;
  --nav-color-step-750: #c4c4c4;
  --nav-color-step-800: #d0d0d0;
  --nav-color-step-850: #dbdbdb;
  --nav-color-step-900: #e7e7e7;
  --nav-color-step-950: #f3f3f3;

  --nav-item-background: #1e1e1e;

  --nav-toolbar-background: #1f1f1f;

  --nav-tab-bar-background: #1f1f1f;

  --nav-card-background: #1e1e1e;
}
```
