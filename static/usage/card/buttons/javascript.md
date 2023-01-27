```html
<nav-card>
  <nav-card-header>
    <nav-card-title>Card Title</nav-card-title>
    <nav-card-subtitle>Card Subtitle</nav-card-subtitle>
  </nav-card-header>

  <nav-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </nav-card-content>

  <nav-button fill="clear">Action 1</nav-button>
  <nav-button fill="clear">Action 2</nav-button>
</nav-card>

<style>
  /* iOS places the subtitle above the title */
  nav-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
