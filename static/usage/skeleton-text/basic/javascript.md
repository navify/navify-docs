```html
<nav-list></nav-list><br />
<nav-button onclick="toggle()">Toggle</nav-button>

<script>
  const list = document.querySelector('nav-list');
  let loaded = false;
  function toggle() {
    if (loaded) {
      setSkeletonText();
    } else {
      setContent();
    }

    loaded = !loaded;
  }

  function setSkeletonText() {
    list.innerHTML = `
      <nav-list-header>
        <nav-skeleton-text animated="true" style="width: 80px"></nav-skeleton-text>
      </nav-list-header>
      <nav-item>
        <nav-thumbnail slot="start">
          <nav-skeleton-text animated="true"></nav-skeleton-text>
        </nav-thumbnail>
        <nav-label>
          <h3>
            <nav-skeleton-text animated="true" style="width: 80%;"></nav-skeleton-text>
          </h3>
          <p>
            <nav-skeleton-text animated="true" style="width: 60%;"></nav-skeleton-text>
          </p>
          <p>
            <nav-skeleton-text animated="true" style="width: 30%;"></nav-skeleton-text>
          </p>
        </nav-label>
      </nav-item>
    `;
  }

  function setContent() {
    list.innerHTML = `
      <nav-list-header>Albums</nav-list-header>
      <nav-item>
        <nav-thumbnail slot="start">
          <nav-icon style="width: 100%; height: 100%" name="musical-notes"></nav-icon>
        </nav-thumbnail>
        <nav-label>
          <h3>Abbey Road</h3>
          <p>The Beatles</p>
          <p>1969</p>
        </nav-label>
      </nav-item>
    `;
  }

  setSkeletonText();

</script>
```
