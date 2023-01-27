```html
<nav-header>
  <nav-toolbar>
    <nav-title>Pull to Refresh</nav-title>
  </nav-toolbar>
</nav-header>

<nav-content scroll-y="false">
  <nav-refresher id="refresher" slot="fixed">
    <nav-refresher-content></nav-refresher-content>
  </nav-refresher>

  <div class="nav-content-scroll-host nav-padding">
    <p>Pull this content down to trigger the refresh.</p>
  </div>
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

<style>
  .nav-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```
