---
title: Structure
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Structure Layout | Structures for Content Layout on Navify Apps</title>
  <meta
    name="description"
    content="Navify provides several different layouts that can be used to structure an app and its content—from single page layouts, to split pane views and modals."
  />
</head>

Navify Framework provides several different layouts that can be used to structure an app. From single page layouts, to split pane views and modals.

## Header and Footer Layout

### Header

<aside>
  <DocsCard href="../api/header" header="Learn More" icon="/icons/component-header-icon.png">
    <code>nav-header</code> API docs
  </DocsCard>
</aside>

The most simple layout available consists of a [header](../api/header.md) and [content](../api/content.md). Most pages in an app generally have both of these, but a header is not required in order to use content.

```html
<nav-app>
  <nav-header>
    <nav-toolbar>
      <nav-title>Header</nav-title>
    </nav-toolbar>
  </nav-header>

  <nav-content class="nav-padding">
    <h1>Main Content</h1>
  </nav-content>
</nav-app>
```

### Footer

<aside>
  <DocsCard href="../api/footer" header="Learn More" icon="/icons/component-footer-icon.png">
    <code>nav-footer</code> API docs
  </DocsCard>
</aside>

As you can see, a toolbar in a header appears above the content. Sometimes an app needs to have a toolbar below the content, which is when a footer is used.

```html
<nav-app>
  <nav-content class="nav-padding">
    <h1>Main Content</h1>
  </nav-content>

  <nav-footer>
    <nav-toolbar>
      <nav-title>Footer</nav-title>
    </nav-toolbar>
  </nav-footer>
</nav-app>
```

### Header and Footer

These can also be combined on one page to have a toolbar above _and_ below the content.

```html
<nav-app>
  <nav-header>
    <nav-toolbar>
      <nav-title>Header</nav-title>
    </nav-toolbar>
  </nav-header>

  <nav-content class="nav-padding">
    <h1>Main Content</h1>
  </nav-content>

  <nav-footer>
    <nav-toolbar>
      <nav-title>Footer</nav-title>
    </nav-toolbar>
  </nav-footer>
</nav-app>
```

## Tabs Layout

A layout consisting of horizontal [tabs](../api/tabs.md) can be used to let the user quickly change between content views. Each tab can contain static content or a navigation stack by using an `nav-router-outlet` or `nav-nav`.

```html
<nav-app>
  <nav-tabs>
    <nav-tab tab="home">
      <h1>Home Content</h1>
    </nav-tab>
    <nav-tab tab="settings">
      <h1>Settings Content</h1>
    </nav-tab>

    <nav-tab-bar slot="bottom">
      <nav-tab-button tab="home">
        <nav-label>Home</nav-label>
        <nav-icon name="home"></nav-icon>
      </nav-tab-button>
      <nav-tab-button tab="settings">
        <nav-label>Settings</nav-label>
        <nav-icon name="settings"></nav-icon>
      </nav-tab-button>
    </nav-tab-bar>
  </nav-tabs>
</nav-app>
```

## Menu Layout

A standard layout among mobile apps includes the ability to toggle a side [menu](../api/menu.md) by clicking a button or swiping it open from the side. Side menus are generally used for navigation, but they can contain any content.

```html
<nav-app>
  <nav-menu content-id="main-content">
    <nav-header>
      <nav-toolbar color="primary">
        <nav-title>Menu</nav-title>
      </nav-toolbar>
    </nav-header>

    <nav-content>
      <nav-list>
        <nav-list-header> Navigate </nav-list-header>
        <nav-menu-toggle auto-hide="false">
          <nav-item button>
            <nav-icon slot="start" name="home"></nav-icon>
            <nav-label> Home </nav-label>
          </nav-item>
        </nav-menu-toggle>
      </nav-list>
    </nav-content>
  </nav-menu>

  <nav-page class="nav-page" id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-menu-toggle>
            <nav-button>
              <nav-icon slot="icon-only" name="menu"></n-icon>
            </nav-button>
          </nav-menu-toggle>
        </nav-buttons>
        <nav-title>Header</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </nav-content>
  </nav-page>
</nav-app>

<nav-menu-controller></nav-menu-controller>
```

## Split Pane Layout

A [split pane](../api/split-pane.md) layout has a more complex structure because it can combine the previous layouts. It allows for multiple views to be displayed when the viewport is above a specified breakpoint. If the device's screen size is below a certain size, the split pane view will be hidden.

By default, the split pane view will show when the screen is larger than `768px`, or the `md` breakpoint, but this can be customized to use different breakpoints by setting the `when` property. Below is an example where the split pane contains a menu that is visible for `sm` screens and up, or when the viewport is larger than `576px`. By resizing the browser horizontally so that the app is smaller than this, the split pane view will disappear.

```html
<nav-app>
  <nav-split-pane when="sm" content-id="main-content">
    <nav-menu content-id="main-content">
      <nav-header>
        <nav-toolbar color="primary">
          <nav-title>Menu</nav-title>
        </nav-toolbar>
      </nav-header>

      <nav-content>
        <nav-list>
          <nav-list-header> Navigate </nav-list-header>
          <nav-menu-toggle auto-hide="false">
            <nav-item button>
              <nav-icon slot="start" name="home"></nav-icon>
              <nav-label> Home </nav-label>
            </nav-item>
          </nav-menu-toggle>
        </nav-list>
      </nav-content>
    </nav-menu>

    <div class="nav-page" id="main-content">
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-menu-toggle>
              <nav-button>
                <nav-icon slot="icon-only" name="menu"></nav-icon>
              </nav-button>
            </nav-menu-toggle>
          </nav-buttons>
          <nav-title>Header</nav-title>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <h1>Main Content</h1>
      </nav-content>
    </div>
  </nav-split-pane>
</nav-app>
```

It's important to note that the element with the `id` matching the `content-id` specified by the split pane will be the main content that is always visible. This can be any element, including an [nav-nav](../api/nav.md), [nav-router-outlet](../api/router-outlet.md), or an [nav-tabs](../api/tabs.md).
