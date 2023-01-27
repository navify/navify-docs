```html
<nav-progress-bar></nav-progress-bar>

<script>
  let buffer = 0.06;
  let progress = 0;

  let progressBar = document.querySelector('nav-progress-bar');
  progressBar.buffer = buffer;

  setInterval(() => {
    progressBar.buffer = buffer += 0.06;
    progressBar.value = progress += 0.06;

    // Reset the progress bar when it reaches 100%
    // to continuously show the demo
    if (progress > 1) {
      setTimeout(() => {
        progressBar.buffer = buffer = 0.06;
        progressBar.value = progress = 0;
      }, 1000);
    }
  }, 1000);
</script>
```
