```html
<nav-item>
  <nav-button slot="start">
    Start
  </nav-button>
  <nav-label>Default Buttons</nav-label>
  <nav-button slot="end">
    End
  </nav-button>
</nav-item>

<nav-item>
  <nav-button slot="start">
    Start
    <nav-icon name="home" slot="end"></nav-icon>
  </nav-button>
  <nav-label>Buttons with Icons</nav-label>
  <nav-button slot="end">
    <nav-icon name="star" slot="end"></nav-icon>
    End
  </nav-button>
</nav-item>

<nav-item>
  <nav-button slot="start">
    <nav-icon slot="icon-only" name="navigate"></nav-icon>
  </nav-button>
  <nav-label>Icon only Buttons</nav-label>
  <nav-button slot="end">
    <nav-icon slot="icon-only" name="star"></nav-icon>
  </nav-button>
</nav-item>

<nav-item>
  <nav-label>Button Sizes</nav-label>
  <nav-button slot="end" size="small">
    Small
  </nav-button>
  <nav-button slot="end" size="default">
    Default
  </nav-button>
  <nav-button slot="end" size="large">
    Large
  </nav-button>
</nav-item>
```
