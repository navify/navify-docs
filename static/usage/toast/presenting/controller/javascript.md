```html
<nav-button expand="block" onclick="presentToast('top')">Present Toast At the Top</nav-button>
<nav-button expand="block" onclick="presentToast('middle')">Present Toast At the Middle</nav-button>
<nav-button expand="block" onclick="presentToast('bottom')">Present Toast At the Bottom</nav-button>

<script>
  async function presentToast(position) {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
</script>
```
