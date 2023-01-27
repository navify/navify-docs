```html
<nav-toolbar>
  <nav-buttons slot="secondary">
    <nav-button size="large">
      Favorite
    </nav-button>
  </nav-buttons>
  <nav-title>Default Buttons</nav-title>
  <nav-buttons slot="primary">
    <nav-button>
      Delete
    </nav-button>
  </nav-buttons>
</nav-toolbar>

<nav-toolbar>
  <nav-buttons slot="secondary">
    <nav-button>
      <nav-icon slot="icon-only" name="person-circle"></nav-icon>
    </nav-button>
    <nav-button>
      <nav-icon slot="icon-only" name="search"></nav-icon>
    </nav-button>
  </nav-buttons>
  <nav-buttons slot="primary">
    <nav-button>
      <nav-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></nav-icon>
    </nav-button>
  </nav-buttons>
  <nav-title>Icon Buttons</nav-title>
</nav-toolbar>

<nav-toolbar>
  <nav-buttons slot="secondary">
    <nav-button fill="solid">
      <nav-icon slot="start" name="person-circle"></nav-icon>
      Contact
    </nav-button>
  </nav-buttons>
  <nav-buttons slot="primary">
    <nav-button fill="solid">
      Help
      <nav-icon slot="end" name="help-circle"></nav-icon>
    </nav-button>
  </nav-buttons>
  <nav-title>Solid Buttons</nav-title>
</nav-toolbar>

<nav-toolbar>
  <nav-buttons slot="secondary">
    <nav-button fill="outline">
      <nav-icon slot="start" name="star"></nav-icon>
      Star
    </nav-button>
  </nav-buttons>
  <nav-buttons slot="primary">
    <nav-button fill="outline">
      Edit
      <nav-icon slot="end" name="create"></nav-icon>
    </nav-button>
  </nav-buttons>
  <nav-title>Outline Buttons</nav-title>
</nav-toolbar>

<nav-toolbar>
  <nav-buttons slot="start">
    <nav-back-button default-href="#"></nav-back-button>
  </nav-buttons>
  <nav-title>Back Button</nav-title>
</nav-toolbar>

<nav-toolbar>
  <nav-buttons slot="start">
    <nav-menu-button auto-hide="false"></nav-menu-button>
  </nav-buttons>
  <nav-title>Menu Button</nav-title>
</nav-toolbar>
```
