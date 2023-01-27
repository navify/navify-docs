---
title: CSS Utilities
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>CSS Utilities: Classes for Text/Element Alignment or Modification</title>
  <meta
    name="description"
    content="Navify CSS utility classes can be used on any element for text modification/alignment, element placement, or to adjust padding and margin. Read to learn more."
  />
</head>

Navify Framework provides a set of CSS utility classes that can be used on any element in order to modify the text, element placement or adjust the padding and margin.

:::note
If your app was not started using an available Navify Framework starter, the stylesheets listed in the [optional section of the global stylesheets](global-stylesheets.md#optional) will need to be included in order for these styles to work.
:::

## Text Modification

### Text Alignment

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div class="nav-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col>
      <div class="nav-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class               | Style Rule            | Description                                                                                                                                                         |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.nav-text-left`    | `text-align: left`    | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| `.nav-text-right`   | `text-align: right`   | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| `.nav-text-start`   | `text-align: start`   | The same as `text-left` if direction is left-to-right and `text-right` if direction is right-to-left.                                                               |
| `.nav-text-end`     | `text-align: end`     | The same as `text-right` if direction is left-to-right and `text-left` if direction is right-to-left.                                                               |
| `.nav-text-center`  | `text-align: center`  | The inline contents are centered within the line box.                                                                                                               |
| `.nav-text-justify` | `text-align: justify` | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| `.nav-text-wrap`    | `white-space: normal` | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| `.nav-text-nowrap`  | `white-space: nowrap` | Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.                                                                       |

### Text Transformation

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div class="nav-text-uppercase">
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-lowercase">
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col>
      <div class="nav-text-capitalize">
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class                  | Style Rule                   | Description                                                        |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `.nav-text-uppercase`  | `text-transform: uppercase`  | Forces all characters to be converted to uppercase.                |
| `.nav-text-lowercase`  | `text-transform: lowercase`  | Forces all characters to be converted to lowercase.                |
| `.nav-text-capitalize` | `text-transform: capitalize` | Forces the first letter of each word to be converted to uppercase. |

### Responsive Text Classes

All of the text classes listed above have additional classes to modify the text based on the screen size. Instead of `text-` in each class, use `text-{breakpoint}-` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Navify Breakpoints](#navify-breakpoints).

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, or `capitalize`, as they are described above.

| Class                     | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `.nav-text-{modifier}`    | Applies the modifier to the element on all screen sizes.      |
| `.nav-text-sm-{modifier}` | Applies the modifier to the element when `min-width: 576px`.  |
| `.nav-text-md-{modifier}` | Applies the modifier to the element when `min-width: 768px`.  |
| `.nav-text-lg-{modifier}` | Applies the modifier to the element when `min-width: 992px`.  |
| `.nav-text-xl-{modifier}` | Applies the modifier to the element when `min-width: 1200px`. |

## Element Placement

### Float Elements

The float CSS property specifies that an element should be placed along the left or right side of its container, where text and inline elements will wrap around it. This way, the element is taken from the normal flow of the web page, though still remaining a part of the flow, contrary to absolute positioning.

```html
<nav-grid>
  <nav-row>
    <nav-col class="nav-float-left">
      <div>
        <h3>float-left</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
    <nav-col class="nav-float-right">
      <div>
        <h3>float-right</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class              | Style Rule                     | Description                                                                                             |
| ------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `.nav-float-left`  | `float: left`                  | The element will float on the left side of its containing block.                                        |
| `.nav-float-right` | `float: right`                 | The element will float on the right side of its containing block.                                       |
| `.nav-float-start` | `float: left` / `float: right` | The same as `float-left` if direction is left-to-right and `float-right` if direction is right-to-left. |
| `.nav-float-end`   | `float: left` / `float: right` | The same as `float-right` if direction is left-to-right and `float-left` if direction is right-to-left. |

### Responsive Float Classes

All of the float classes listed above have additional classes to modify the float based on the screen size. Instead of `float-` in each class, use `float-{breakpoint}-` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Navify Breakpoints](#navify-breakpoints).

The table below shows the default behavior, where `{modifier}` is any of the following: `left`, `right`, `start`, or `end`, as they are described above.

| Class                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| `.nav-float-{modifier}`    | Applies the modifier to the element on all screen sizes.      |
| `.nav-float-sm-{modifier}` | Applies the modifier to the element when `min-width: 576px`.  |
| `.nav-float-md-{modifier}` | Applies the modifier to the element when `min-width: 768px`.  |
| `.nav-float-lg-{modifier}` | Applies the modifier to the element when `min-width: 992px`.  |
| `.nav-float-xl-{modifier}` | Applies the modifier to the element when `min-width: 1200px`. |

## Element Display

The display CSS property determines if an element should be visible or not. The element will still be in the DOM, but not rendered, if it is hidden.

```html
<nav-grid>
  <nav-row>
    <nav-col class="nav-hide">
      <div>
        <h3>hidden</h3>
        You can't see me.
      </div>
    </nav-col>
    <nav-col>
      <div>
        <h3>not-hidden</h3>
        You can see me!
      </div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class       | Style Rule      | Description                 |
| ----------- | --------------- | --------------------------- |
| `.nav-hide` | `display: none` | The element will be hidden. |

### Responsive Display Attributes

There are also additional classes to modify the visibility based on the screen size. Instead of just `.nav-hide` for all screen sizes, use `.nav-hide-{breakpoint}-{dir}` to only use the class on specific screen sizes, where `{breakpoint}` is one of the breakpoint names listed in [Navify Breakpoints](#navify-breakpoints), and `{dir}` is whether the element should be hidden on all screen sizes above (`up`) or below (`down`) the specified breakpoint.

| Class                | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `.nav-hide-sm-{dir}` | Applies the modifier to the element when `min-width: 576px` (`up`) or `max-width: 576px` (`down`).   |
| `.nav-hide-md-{dir}` | Applies the modifier to the element when `min-width: 768px` (`up`) or `max-width: 768px` (`down`).   |
| `.nav-hide-lg-{dir}` | Applies the modifier to the element when `min-width: 992px` (`up`) or `max-width: 992px` (`down`).   |
| `.nav-hide-xl-{dir}` | Applies the modifier to the element when `min-width: 1200px` (`up`) or `max-width: 1200px` (`down`). |

## Content Space

### Element Padding

The padding class sets the padding area of an element. The padding area is the space between the content of the element and its border.

The default amount of `padding` to be applied is `16px` and is set by the `--nav-padding` variable. See the [CSS Variables](../theming/css-variables.md) section for more information on how to change these values.

```html
<nav-grid>
  <nav-row>
    <nav-col class="nav-padding">
      <div>padding</div>
    </nav-col>
    <nav-col class="nav-padding-top">
      <div>padding-top</div>
    </nav-col>
    <nav-col class="nav-padding-start">
      <div>padding-start</div>
    </nav-col>
    <nav-col class="nav-padding-end">
      <div>padding-end</div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col class="nav-padding-bottom">
      <div>padding-bottom</div>
    </nav-col>
    <nav-col class="nav-padding-vertical">
      <div>padding-vertical</div>
    </nav-col>
    <nav-col class="nav-padding-horizontal">
      <div>padding-horizontal</div>
    </nav-col>
    <nav-col class="nav-no-padding">
      <div>no-padding</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class                     | Style Rule             | Description                            |
| ------------------------- | ---------------------- | -------------------------------------- |
| `.nav-padding`            | `padding: 16px`        | Applies padding to all sides.          |
| `.nav-padding-top`        | `padding-top: 16px`    | Applies padding to the top.            |
| `.nav-padding-start`      | `padding-start: 16px`  | Applies padding to the start.          |
| `.nav-padding-end`        | `padding-end: 16px`    | Applies padding to the end.            |
| `.nav-padding-bottom`     | `padding-bottom: 16px` | Applies padding to the bottom.         |
| `.nav-padding-vertical`   | `padding: 16px 0`      | Applies padding to the top and bottom. |
| `.nav-padding-horizontal` | `padding: 0 16px`      | Applies padding to the left and right. |
| `.nav-no-padding`         | `padding: 0`           | Applies no padding to all sides.       |

### Element Margin

The margin area extends the border area with an empty area used to separate the element from its neighbors.

The default amount of `margin` to be applied is `16px` and is set by the `--nav-margin` variable. See the [CSS Variables](../theming/css-variables.md) section for more information on how to change these values.

```html
<nav-grid>
  <nav-row>
    <nav-col class="nav-margin">
      <div>margin</div>
    </nav-col>
    <nav-col class="nav-margin-top">
      <div>margin-top</div>
    </nav-col>
    <nav-col class="nav-margin-start">
      <div>margin-start</div>
    </nav-col>
    <nav-col class="nav-margin-end">
      <div>margin-end</div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col class="nav-margin-bottom">
      <div>margin-bottom</div>
    </nav-col>
    <nav-col class="nav-margin-vertical">
      <div>margin-vertical</div>
    </nav-col>
    <nav-col class="nav-margin-horizontal">
      <div>margin-horizontal</div>
    </nav-col>
    <nav-col class="nav-no-margin">
      <div>no-margin</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class                    | Style Rule            | Description                           |
| ------------------------ | --------------------- | ------------------------------------- |
| `.nav-margin`            | `margin: 16px`        | Applies margin to all sides.          |
| `.nav-margin-top`        | `margin-top: 16px`    | Applies margin to the top.            |
| `.nav-margin-start`      | `margin-start: 16px`  | Applies margin to the left.           |
| `.nav-margin-end`        | `margin-end: 16px`    | Applies margin to the right.          |
| `.nav-margin-bottom`     | `margin-bottom: 16px` | Applies margin to the bottom.         |
| `.nav-margin-vertical`   | `margin: 16px 0`      | Applies margin to the top and bottom. |
| `.nav-margin-horizontal` | `margin: 0 16px`      | Applies margin to the left and right. |
| `.nav-no-margin`         | `margin: 0`           | Applies no margin to all sides.       |

## Flex Properties

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

### Flex Container Properties

```html
<nav-grid>
  <nav-row class="nav-justify-content-start">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-justify-content-center">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-justify-content-end">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-justify-content-around">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-justify-content-between">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-justify-content-evenly">
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>
</nav-grid>

<nav-grid>
  <nav-row class="nav-align-items-start">
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col>
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-align-items-end">
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col>
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-align-items-center">
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col>
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-align-items-baseline">
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col>
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>

  <nav-row class="nav-align-items-stretch">
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col>
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class                          | Style Rule                       | Description                                                                 |
| ------------------------------ | -------------------------------- | --------------------------------------------------------------------------- |
| `.nav-justify-content-start`   | `justify-content: flex-start`    | Items are packed toward the start on the main axis.                         |
| `.nav-justify-content-end`     | `justify-content: flex-end`      | Items are packed toward the end on the main axis.                           |
| `.nav-justify-content-center`  | `justify-content: center`        | Items are centered along the main axis.                                     |
| `.nav-justify-content-around`  | `justify-content: space-around`  | Items are evenly distributed on the main axis with equal space around them. |
| `.nav-justify-content-between` | `justify-content: space-between` | Items are evenly distributed on the main axis.                              |
| `.nav-justify-content-evenly`  | `justify-content: space-evenly`  | Items are distributed so that the spacing between any two items is equal.   |
| `.nav-align-items-start`       | `align-items: flex-start`        | Items are packed toward the start on the cross axis.                        |
| `.nav-align-items-end`         | `align-items: flex-end`          | Items are packed toward the end on the cross axis.                          |
| `.nav-align-items-center`      | `align-items: center`            | Items are centered along the cross axis.                                    |
| `.nav-align-items-baseline`    | `align-items: baseline`          | Items are aligned so that their baselines align.                            |
| `.nav-align-items-stretch`     | `align-items: stretch`           | Items are stretched to fill the container.                                  |
| `.nav-nowrap`                  | `flex-wrap: nowrap`              | Items will all be on one line.                                              |
| `.nav-wrap`                    | `flex-wrap: wrap`                | Items will wrap onto multiple lines, from top to bottom.                    |
| `.nav-wrap-reverse`            | `flex-wrap: wrap-reverse`        | Items will wrap onto multiple lines, from bottom to top.                    |

### Flex Item Properties

```html
<nav-grid>
  <nav-row>
    <nav-col class="nav-align-self-start">
      <div>1 of 4</div>
    </nav-col>
    <nav-col class="nav-align-self-center">
      <div>2 of 4</div>
    </nav-col>
    <nav-col class="nav-align-self-end">
      <div>3 of 4</div>
    </nav-col>
    <nav-col>
      <div>4 of 4 # # #</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

| Class                      | Style Rule               | Description                                                            |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------- |
| `.nav-align-self-start`    | `align-self: flex-start` | Item is packed toward the start on the cross axis.                     |
| `.nav-align-self-end`      | `align-self: flex-end`   | Item is packed toward the end on the cross axis.                       |
| `.nav-align-self-center`   | `align-self: center`     | Item is centered along the cross axis.                                 |
| `.nav-align-self-baseline` | `align-self: baseline`   | Item is aligned so that its baseline aligns with other item baselines. |
| `.nav-align-self-stretch`  | `align-self: stretch`    | Item is stretched to fill the container.                               |
| `.nav-align-self-auto`     | `align-self: auto`       | Item is positioned according to the parent's `align-items` value.      |

## Border Display

The border display CSS property determines if the border should be visible or not. The property can be applied to the nav-header and the nav-footer.

```html
<nav-header class="nav-no-border">
  <nav-toolbar>
    <nav-title>Header - No Border</nav-title>
  </nav-toolbar>
</nav-header>

<nav-footer class="nav-no-border">
  <nav-toolbar>
    <nav-title>Footer - No Border</nav-title>
  </nav-toolbar>
</nav-footer>
```

| Class            | Description                      |
| ---------------- | -------------------------------- |
| `.nav-no-border` | The element will have no border. |

## Navify Breakpoints

Navify uses breakpoints in media queries in order to style an application differently based on the screen size. The following breakpoint names are used in the utility classes listed above, where the class will apply when the width is met.

| Breakpoint Name | Width    |
| --------------- | -------- |
| `xs`            | `0`      |
| `sm`            | `576px`  |
| `md`            | `768px`  |
| `lg`            | `992px`  |
| `xl`            | `1200px` |
