```html
<nav-button onclick="showLoading()">Show Loading</nav-button>

<script>
var showLoading = async () => {
  const loading = await loadingController.create({
    message: 'Dismissing after 3 seconds...',
    duration: 3000
  });
  
  loading.present();
}
</script>
```
