```html
<style>
  nav-segment-button {
    --indicator-color: #08a391;
  }

  /* Material Design styles */
  nav-segment-button.md {
    --color: #000;
    --color-checked: #08a391;
    --indicator-height: 4px;
  }

  /* iOS styles */
  nav-segment-button.ios {
    --color: #08a391;
    --color-checked: #fff;
    --border-radius: 20px;
  }
</style>

<nav-segment value="custom">
  <nav-segment-button value="custom">
    <nav-label>Custom</nav-label>
  </nav-segment-button>
  <nav-segment-button value="segment">
    <nav-label>Segment</nav-label>
  </nav-segment-button>
  <nav-segment-button value="buttons">
    <nav-label>Buttons</nav-label>
  </nav-segment-button>
</nav-segment>
```
