---
title: Colors
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Navify CSS Color Component: Style or Change Default App Colors</title>
  <meta
    name="description"
    content="Navify has nine default colors that can be used to change the color of many components. Learn how to utilize Navify CSS color properties to style your apps."
  />
</head>

Navify has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Navify.

A color can be applied to an Navify component in order to change the default colors using the `color` attribute. Notice in the buttons below that the text and background changes based on the `color` set. When there is no `color` set on the button it uses the `primary` color by default.

```html
<nav-button>Default</nav-button>
<nav-button color="primary">Primary</nav-button>
<nav-button color="secondary">Secondary</nav-button>
<nav-button color="tertiary">Tertiary</nav-button>
<nav-button color="success">Success</nav-button>
<nav-button color="warning">Warning</nav-button>
<nav-button color="danger">Danger</nav-button>
<nav-button color="light">Light</nav-button>
<nav-button color="medium">Medium</nav-button>
<nav-button color="dark">Dark</nav-button>
```

## Layered Colors

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. See [The Alpha Problem](advanced.md#the-alpha-problem) for an explanation of why the `rgb` property is also needed. Select from the dropdown below to see all of the default colors Navify provides and their variations.

<LayeredColorsSelect />

## Modifying Colors

To change the default values of a color, all of the listed variations for that color should be set. For example, to change the secondary color to <CodeColor color="#006600">#006600</CodeColor>, set the following CSS properties:

```css
:root {
  --nav-color-secondary: #006600;
  --nav-color-secondary-rgb: 0, 102, 0;
  --nav-color-secondary-contrast: #ffffff;
  --nav-color-secondary-contrast-rgb: 255, 255, 255;
  --nav-color-secondary-shade: #005a00;
  --nav-color-secondary-tint: #1a751a;
}
```

When `secondary` is applied to a button, not only is the base color <CodeColor color="#006600">#006600</CodeColor> used, but the contrast color <CodeColor color="#ffffff">#ffffff</CodeColor> is used for the text, along with shade <CodeColor color="#005a00">#005a00</CodeColor> and tint <CodeColor color="#1a751a">#1a751a</CodeColor> colors for the different states of the button.

:::note
Not sure how to get the variation colors from the base color? Try out our [Color Generator](color-generator.md) that calculates all of the variations and provides code to copy/paste into an app!
:::

See the [CSS Variables documentation](css-variables.md) for more information on CSS variables.

## Adding Colors

Colors can be added for use throughout an application by setting the `color` property on an Navify component, or by styling with CSS. Read on to see how to manually add a new color, or use the [New Color Creator](#new-color-creator) below for a quick way to generate the code of a new color to be copy and pasted into an application.

To add a new color, first define the CSS variables for all of the variations of the color at the root. For example, to add a new color called `favorite`, we can define the following variables:

```css
:root {
  --nav-color-favorite: #69bb7b;
  --nav-color-favorite-rgb: 105, 187, 123;
  --nav-color-favorite-contrast: #ffffff;
  --nav-color-favorite-contrast-rgb: 255, 255, 255;
  --nav-color-favorite-shade: #5ca56c;
  --nav-color-favorite-tint: #78c288;
}
```

Then, create a new class that uses these CSS variables. The class **must** be written in the format `.nav-color-{COLOR}` where `{COLOR}` is the name of the color to add:

```css
.nav-color-favorite {
  --nav-color-base: var(--nav-color-favorite);
  --nav-color-base-rgb: var(--nav-color-favorite-rgb);
  --nav-color-contrast: var(--nav-color-favorite-contrast);
  --nav-color-contrast-rgb: var(--nav-color-favorite-contrast-rgb);
  --nav-color-shade: var(--nav-color-favorite-shade);
  --nav-color-tint: var(--nav-color-favorite-tint);
}
```

After the class is added, the color can be used on any Navify component that supports the `color` property. An example of using the `favorite` color on an Navify button is below.

```html
<nav-button color="favorite">Favorite</nav-button>
```

The CSS variables defined at the root can also be used to style any element using CSS:

```css
div {
  background: var(--nav-color-favorite);
  color: var(--nav-color-favorite-contrast);
}
```

See the [CSS Variables documentation](css-variables.md) for more information on setting and using CSS variables.

## New Color Creator

Create a new color below by changing the name and value, then copy and paste the code below into your project.

<NewColorGenerator />
