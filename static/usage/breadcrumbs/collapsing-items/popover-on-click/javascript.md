```html
<nav-breadcrumbs max-items="4">
  <nav-breadcrumb href="#home">Home</nav-breadcrumb>
  <nav-breadcrumb href="#electronics">Electronics</nav-breadcrumb>
  <nav-breadcrumb href="#photography">Photography</nav-breadcrumb>
  <nav-breadcrumb href="#cameras">Cameras</nav-breadcrumb>
  <nav-breadcrumb href="#film">Film</nav-breadcrumb>
  <nav-breadcrumb href="#35mm">35 mm</nav-breadcrumb>
</nav-breadcrumbs>
<nav-popover>
  <nav-content>
    <nav-list></nav-list>
  </nav-content>
</nav-popover>

<script>
  const breadcrumbs = document.querySelector('nav-breadcrumbs');
  const popover = document.querySelector('nav-popover');
  const popoverList = document.querySelector('nav-popover nav-list');

  breadcrumbs.addEventListener('navCollapsedClick', e => {
    let listHTML = ``;
    e.detail.collapsedBreadcrumbs.forEach((breadcrumb, i) => {
      listHTML += `
        <nav-item
          ${i === e.detail.collapsedBreadcrumbs.length - 1 ? `lines="none"` : ""}
          href="${breadcrumb.href}"
        >
          <nav-label>${breadcrumb.textContent}</nav-label>
        </nav-item>
      `;
    });

    popoverList.innerHTML = listHTML;
    popover.event = e;
    popover.isOpen = true;
  });

  popover.addEventListener('didDismiss', () => popover.isOpen = false);
</script>
```
