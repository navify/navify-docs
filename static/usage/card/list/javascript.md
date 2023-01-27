```html
<nav-card>
  <nav-card-header>
    <nav-card-title>Card Title</nav-card-title>
    <nav-card-subtitle>Card Subtitle</nav-card-subtitle>
  </nav-card-header>
  <nav-card-content>
    <nav-list>
      <nav-item>
        <nav-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </nav-thumbnail>
        <nav-label>Item</nav-label>
      </nav-item>

      <nav-item>
        <nav-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </nav-thumbnail>
        <nav-label>Item</nav-label>
      </nav-item>

      <nav-item>
        <nav-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </nav-thumbnail>
        <nav-label>Item</nav-label>
      </nav-item>

      <nav-item lines="none">
        <nav-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </nav-thumbnail>
        <nav-label>Item</nav-label>
      </nav-item>
    </nav-list>
  </nav-card-content>
</nav-card>

<style>
  nav-item {
    --padding-start: 0;
  }

  /* iOS places the subtitle above the title */
  nav-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
