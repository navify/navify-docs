```html
<nav-header>
  <nav-toolbar>
    <nav-title>Pull to Refresh</nav-title>
  </nav-toolbar>
</nav-header>

<nav-content class="nav-padding">
  <nav-refresher id="refresher" slot="fixed">
    <nav-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing...">
    </nav-refresher-content>
  </nav-refresher>

  <p>Pull this content down to trigger the refresh.</p>
</nav-content>

<script>
  const refresher = document.getElementById('refresher');

  refresher.addEventListener('navRefresh', () => {
    setTimeout(() => {
      // Any calls to load data go here
      refresher.complete();
    }, 2000);
  });
</script>
```
