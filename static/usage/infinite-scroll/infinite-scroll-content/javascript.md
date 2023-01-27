```html
<nav-content>
  <nav-list></nav-list>
  <nav-infinite-scroll>
    <nav-infinite-scroll-content loading-text="Please wait..." loading-spinner="bubbles"></nav-infinite-scroll-content>
  </nav-infinite-scroll>
</nav-content>

<script>
  const list = document.querySelector('nav-list');

  function generateItems() {
    const count = list.childElementCount + 1;
    const total = count + 50;
    for (let i = count; i < total; i++) {
      const el = document.createElement('nav-item');

      const avatar = document.createElement('nav-avatar');
      avatar.slot = 'start';
      const img = document.createElement('img');
      img.src = `https://picsum.photos/80/80?random=${i}`;
      img.alt = 'Avatar';

      avatar.appendChild(img);
      el.appendChild(avatar);

      const text = document.createElement('nav-label');
      text.textContent = `Item ${i}`;

      el.appendChild(text);

      list.appendChild(el);
    }
  }

  generateItems();
</script>
```
