---
title: "nav-accordion"
---
import Props from '@site/static/auto-generated/accordion/props.md';
import Events from '@site/static/auto-generated/accordion/events.md';
import Methods from '@site/static/auto-generated/accordion/methods.md';
import Parts from '@site/static/auto-generated/accordion/parts.md';
import CustomProps from '@site/static/auto-generated/accordion/custom-props.md';
import Slots from '@site/static/auto-generated/accordion/slots.md';

<head>
  <title>Nav-Accordion Components: How to Build & Examples | Navify</title>
  <meta name="description" content="Nav-accordion components provide collapsible sections in content to reduce vertical space and organize information. Learn how to build one and see examples." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Accordions provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All `nav-accordion` components should be grouped inside `nav-accordion-group` components.

## Basic Usage

import Basic from '@site/static/usage/accordion/basic/index.md';

<Basic />

## Toggle Accordions

Which accordion is open is controlled by setting the `value` property on `nav-accordion-group`. Setting this property allows developers to programmatically expand or collapse certain accordions.

import Toggle from '@site/static/usage/accordion/toggle/index.md';

<Toggle />

## Listen for Accordion State Changes

Developers can listen for the `navChange` event to be notified when accordions expand or collapse.

import ListenChanges from '@site/static/usage/accordion/listen-changes/index.md';

<ListenChanges />

## Multiple Accordions

Developers can allow multiple accordions to be open at once with the `multiple` property.

import Multiple from '@site/static/usage/accordion/multiple/index.md';

<Multiple />

## Disabling Accordions

### Individual Accordion

Individual accordions can be disabled with the `disabled` property on `nav-accordion`.

import DisableIndividual from '@site/static/usage/accordion/disable/individual/index.md';

<DisableIndividual />

### Accordion Group

The accordion group can be disabled with the `disabled` property on `nav-accordion-group`.

import DisableGroup from '@site/static/usage/accordion/disable/group/index.md';

<DisableGroup />

## Readonly Accordions

### Individual Accordion

Individual accordions can be disabled with the `readonly` property on `nav-accordion`.

import ReadonlyIndividual from '@site/static/usage/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### Accordion Group

The accordion group can be disabled with the `readonly` property on `nav-accordion-group`.

import ReadonlyGroup from '@site/static/usage/accordion/readonly/group/index.md';

<ReadonlyGroup />

## Anatomy

### Header

The `header` slot is used as the toggle that will expand or collapse your accordion. We recommend you use an `nav-item` here to take advantage of the accessibility and theming functionalities.

When using `nav-item` in the `header` slot, the `nav-item`'s `button` prop is set to `true` and the `detail` prop is set to `false`. In addition, we will also automatically add a toggle icon to the `nav-item`. This icon will automatically be rotated when you expand or collapse the accordion. See [Customizing Icons](#icons) for more information.

### Content

The `content` slot is used as the part of the accordion that is revealed or hidden depending on the state of your accordion. You can place anything here except for another `nav-content` instance as only one instance of `nav-content` should be added per page.

## Customization

### Expansion Styles

There are two built in expansion styles: `compact` and `inset`. This expansion style is set via the `expand` property on `nav-accordion-group`.

When `expand="inset"`, the accordion group is given a border radius. On `md` mode, the entire accordion will shift down when it is opened.

import ExpansionStyles from '@site/static/usage/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### Advanced Expansion Styles

You can customize the expansion behavior by styling based on the accordion's state. There are four state classes applied to `nav-accordion`. Styling using these classes can allow you to create advanced state transitions:

| Class Name | Description |
| ---------- | ----------- |
| `.accordion-expanding` | Applied when the accordion is actively expanding |
| `.accordion-expanded` | Applied when the accordion is fully expanded |
| `.accordion-collapsing` | Applied when the accordion is actively collapsing |
| `.accordion-collapsed` | Applied when the accordion is fully collapsed |

If you need to target specific pieces of the accordion, we recommend targeting the element directly. For example, if you want to customize the nav-item in your header slot when the accordion is expanded, you can use the following selector:

```css
nav-accordion.accordion-expanding nav-item[slot="header"],
nav-accordion.accordion-expanded nav-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### Icons

When using an `nav-item` in the `header` slot, we automatically add an `nav-icon`. The type of icon used can be controlled by the `toggleIcon` property, and the slot it is added to can be controlled with the `toggleIconSlot` property.

If you would like to manage the icon yourself or use an icon that is not an `nav-icon`, you can add the `nav-accordion-toggle-icon` class to the icon element.

Regardless of which option you choose, the icon will automatically be rotated when you expand or collapse the accordion.

import Icons from '@site/static/usage/accordion/customization/icons/index.md';

<Icons />

### Theming

Since `nav-accordion` acts as a shell around the header and content elements, you can easily theme the accordion however you would like. You can theme the header by targeting the slotted `nav-item`. Since you are using `nav-item`, you also have access to all of the [nav-item CSS Variables](./item#css-custom-properties) and [nav-item Shadow Parts](./item#css-shadow-parts). Theming the content is also easily achieved by targeting the element that is in the `content` slot.

import Theming from '@site/static/usage/accordion/customization/theming/index.md';

<Theming />

## Accessibility

### Animations

By default, animations are enabled when expanding or collapsing an accordion item. Animations will be automatically disabled when the `prefers-reduced-motion` media query is supported and set to `reduce`. For browsers that do not support this, animations can be disabled by setting the `animated` config in your Navify Framework app.

import AccessibilityAnimations from '@site/static/usage/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### Keyboard Navigation

When used inside an `nav-accordion-group`, `nav-accordion` has full keyboard support for interacting with the component. The following table details what each key does:

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Space` or `Enter` | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component. |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Down Arrow`       | - When focus is on an accordion header, moves focus to the next accordion header.  <br />- When focus is on the last accordion header, moves focus to the first accordion header. |
| `Up Arrow`         | - When focus is on an accordion header, moves focus to the previous accordion header.  <br />- When focus is on the first accordion header, moves focus to the last accordion header. |
| `Home`             | When focus is on an accordion header, moves focus to the first accordion header. |
| `End`              | When focus is on an accordion header, moves focus to the last accordion header. |

## Performance

### Animations

The accordion animation works by knowing the height of the `content` slot when the animation starts. The accordion expects that this height will remain consistent throughout the animation. As a result, developers should avoid performing any operation that may change the height of the content during the animation.

For example, using [nav-img](./img) may cause layout shifts as it lazily loads images. This means that as the animation plays, `nav-img` will load the image data, and the dimensions of  `nav-img` will change to account for the loaded image data. This can result in the height of the `content` slot changing. Developers have a few options for avoiding this:

1. Use an `img` element without any lazy loading. `nav-img` always uses lazy loading, but `img` does not use lazy loading by default. This is the simplest option and works well if you have small images that do not significantly benefit from lazy loading.

2. Set a minimum width and height on `nav-img`. If you need to use lazy loading and know the dimensions of the images ahead of time (such as if you are loading icons of the same size), you can set the `nav-img` to have a minimum width or height using CSS. This gives developers the benefit of lazy loading while avoiding layout shifts. This works when using an `img` element with `loading="lazy"` too!

3. If neither of these options are applicable, developers may want to consider disabling animations altogether by using the `animated` property on [nav-accordion-group](./accordion-group).

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
