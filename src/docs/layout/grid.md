---
title: Responsive Grid
outline: deep
---

# Responsive Grid

The grid is a powerful mobile-first flexbox system for building custom layouts. It is composed of three units — a `grid`, `row(s)` and `column(s)`. Columns will expand to fill their row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

## How it works

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div>1 of 3</div>
    </nav-col>
    <nav-col>
      <div>2 of 3</div>
    </nav-col>
    <nav-col>
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

- Grids act as a container for all rows and columns. Grids take up the full width of their container,
  but adding the `fixed` attribute will specify the width per screen size, see [grid size](#grid-size) below.
- Rows are horizontal groups of columns that line the columns up properly.
- Content should be placed within columns, and only columns may be immediate children of rows.
- The `size-{breakpoint}` attributes indicate the number of columns to use out of the default 12 per row.
  So, `size="4"` can be added to a column in order to take up 1/3 of the grid, or 4 of the 12 columns.
- Columns without a value for size will automatically have equal widths. For example, four instances of `size-sm` will each automatically be 25% wide for the small breakpoint and up.
- Column widths are set as a percentage, so they’re always fluid and sized relative to their parent element.
- Columns have padding between individual columns, however, the padding can be removed from the grid and
  columns by adding the `nav-no-padding` class to the grid. See the [CSS Utilities](css-utilities.md) for more styles that can be applied to the grid.
- There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than them
  (e.g., `size-sm="4"` applies to small, medium, large, and extra large devices).
- Grids can easily be customized via CSS variables. See [customizing the grid](#customizing-the-grid).

## Grid size

By default, the grid will take up 100% width. To set a specific width based on the screen size, add the `fixed` attribute. The width of the grid for each breakpoint is defined in the `--nav-grid-width-{breakpoint}` CSS variables. For more information, see [customizing the grid](#customizing-the-grid).

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Don't set the grid width for xs screens           |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

## Grid attributes

The grid takes up the entire width of the screen by default. This can be modified using the attribute below.

| Property | Description                                       |
| -------- | ------------------------------------------------- |
| fixed    | Set a max width based on the current screen size. |

## Default breakpoints

The default breakpoints are defined in the table below. Breakpoints can not be customized at this time. For more information on why they can't be customized, see `Variables in Media Queries`.

| Name | Value  | Width Prefix | Offset Prefix | Push Prefix | Pull Prefix | Description                          |
| ---- | ------ | ------------ | ------------- | ----------- | ----------- | ------------------------------------ |
| xs   | 0      | `size-`      | `offset-`     | `push-`     | `pull-`     | Set columns when (min-width: 0)      |
| sm   | 576px  | `size-sm-`   | `offset-sm-`  | `push-sm-`  | `pull-sm-`  | Set columns when (min-width: 576px)  |
| md   | 768px  | `size-md-`   | `offset-md-`  | `push-md-`  | `pull-md-`  | Set columns when (min-width: 768px)  |
| lg   | 992px  | `size-lg-`   | `offset-lg-`  | `push-lg-`  | `pull-lg-`  | Set columns when (min-width: 992px)  |
| xl   | 1200px | `size-xl-`   | `offset-xl-`  | `push-xl-`  | `pull-xl-`  | Set columns when (min-width: 1200px) |

## Auto-layout columns

### Equal-width

By default, columns will take up equal width inside of a row for all devices and screen sizes.

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div>1 of 2</div>
    </nav-col>
    <nav-col>
      <div>2 of 2</div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col>
      <div>1 of 3</div>
    </nav-col>
    <nav-col>
      <div>2 of 3</div>
    </nav-col>
    <nav-col>
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

### Setting one column width

Set the width of one column and the others will automatically resize around it. This can be done using our predefined grid attributes. In the example below, the other columns will resize no matter the width of the center column.

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div>1 of 3</div>
    </nav-col>
    <nav-col size="8">
      <div>2 of 3 (wider)</div>
    </nav-col>
    <nav-col>
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col>
      <div>1 of 3</div>
    </nav-col>
    <nav-col size="6">
      <div>2 of 3 (wider)</div>
    </nav-col>
    <nav-col>
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

### Variable-width

By setting the `size-{breakpoint}` properties to `"auto"` the column can size itself based on the natural width of its content. This is extremely useful for setting a column width using pixels. The columns next to the variable-width column will resize to fill the row.

```html
<nav-grid>
  <nav-row>
    <nav-col>
      <div>1 of 3</div>
    </nav-col>
    <nav-col size="auto">
      <div>Variable width content</div>
    </nav-col>
    <nav-col>
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
  <nav-row>
    <nav-col>
      <div>1 of 4</div>
    </nav-col>
    <nav-col>
      <div>2 of 4</div>
    </nav-col>
    <nav-col size="auto">
      <div>
        <nav-input placeholder="Variable width input"></nav-input>
      </div>
    </nav-col>
    <nav-col>
      <div>4 of 4</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

## Responsive attributes

### All breakpoints

To customize a column's width for all devices and screens, set the `size` property. The value of this property determines how many columns this column should take up out of the total available columns.

```html
<nav-grid>
  <nav-row>
    <nav-col size="4">
      <div>1 of 4</div>
    </nav-col>
    <nav-col size="2">
      <div>2 of 4</div>
    </nav-col>
    <nav-col size="2">
      <div>3 of 4</div>
    </nav-col>
    <nav-col size="4">
      <div>4 of 4</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

### Stacked to horizontal

Use a combination of width and breakpoint attributes to create a grid that starts out stacked on extra small screens before becoming horizontal on small screens.

```html
<nav-grid>
  <nav-row>
    <nav-col size="12" size-sm>
      <div>1 of 4</div>
    </nav-col>
    <nav-col size="12" size-sm>
      <div>2 of 4</div>
    </nav-col>
    <nav-col size="12" size-sm>
      <div>3 of 4</div>
    </nav-col>
    <nav-col size="12" size-sm>
      <div>4 of 4</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

## Reordering

### Offsetting columns

Move columns to the right by adding the `offset` property. This property increases the margin left of the column by the number of specified columns. For example, in the following grid the last column will be offset by 3 columns and take up 3 columns:

```html
<nav-grid>
  <nav-row>
    <nav-col size="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3" offset="3">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

Offsets can also be added based on screen breakpoints. Here's an example of a grid where the last column will be offset by 3 columns for `md` screens and up:

```html
<nav-grid>
  <nav-row>
    <nav-col size-md="3">
      <div>1 of 3</div>
    </nav-col>
    <nav-col size-md="3">
      <div>2 of 3</div>
    </nav-col>
    <nav-col size-md="3" offset-md="3">
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

### Push and pull

Reorder the columns by adding the `push` and `pull` properties. These properties adjust the `left` and `right` of the columns by the specified number of columns making it easy to reorder columns. For example, in the following grid the column with the `1 of 2` description will actually be the last column and the `2 of 2` will be the first column.

```html
<nav-grid>
  <nav-row>
    <nav-col size="9" push="3">
      <div>1 of 2</div>
    </nav-col>
    <nav-col size="3" pull="9">
      <div>2 of 2</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

Push and pull can also be added based on screen breakpoints. In the following example, the column with the `3 of 3` column description will actually be the first column for `md` screens and up:

```html
<nav-grid>
  <nav-row>
    <nav-col size-md="6" push-md="3">
      <div>1 of 3</div>
    </nav-col>
    <nav-col size-md="3" push-md="3">
      <div>2 of 3</div>
    </nav-col>
    <nav-col size-md="3" pull-md="9">
      <div>3 of 3</div>
    </nav-col>
  </nav-row>
</nav-grid>
```

## Alignment

### Vertical alignment

All columns can be vertically aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](css-utilities.md#flex-container-properties).

```html
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
</nav-grid>
```

Columns can also align themselves differently than other columns by adding the alignment class directly to the column. For a list of available classes, see [css utilities](css-utilities.md#flex-item-properties).

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

### Horizontal alignment

All columns can be horizontally aligned inside of a row by adding different classes to the row. For a list of available classes, see [css utilities](css-utilities.md#flex-container-properties).

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
</nav-grid>
```

## Customizing the grid

Using our built-in CSS variables, it’s possible to customize the predefined grid attributes. Change the values of the padding, the number of columns, and more.

### Number of columns

The number of grid columns can be modified with the `--nav-grid-columns` CSS variable. By default there are 12 grid columns, but this can be changed to any positive integer and be used to calculate the width of each individual column.

```css
--nav-grid-columns: 12;
```

### Grid Padding

The padding on the grid container can be set for all breakpoints with the `--nav-grid-padding` CSS variable. To override individual breakpoints, use the `--nav-grid-padding-{breakpoint}` CSS variables.

```css
--nav-grid-padding: 5px;

--nav-grid-padding-xs: 5px;
--nav-grid-padding-sm: 5px;
--nav-grid-padding-md: 5px;
--nav-grid-padding-lg: 5px;
--nav-grid-padding-xl: 5px;
```

### Grid width

To customize the width values of the fixed grid based on the screen size, override the values of `--nav-grid-width-{breakpoint}` for each breakpoint.

```css
--nav-grid-width-xs: 100%;
--nav-grid-width-sm: 540px;
--nav-grid-width-md: 720px;
--nav-grid-width-lg: 960px;
--nav-grid-width-xl: 1140px;
```

### Column Padding

The padding on the columns can be set for all breakpoints with the `--nav-grid-column-padding` CSS variable. To override individual breakpoints, use the `--nav-grid-column-padding-{breakpoint}` CSS variables.

```css
--nav-grid-column-padding: 5px;

--nav-grid-column-padding-xs: 5px;
--nav-grid-column-padding-sm: 5px;
--nav-grid-column-padding-md: 5px;
--nav-grid-column-padding-lg: 5px;
--nav-grid-column-padding-xl: 5px;
```
