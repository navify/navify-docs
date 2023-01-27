```html
<nav-app>
  <nav-menu content-id="main-content">
    <nav-header>
      <nav-toolbar color="tertiary">
        <nav-title>Menu Content</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">This is the menu content.</nav-content>
  </nav-menu>
  <div class="nav-page" id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-menu-button></nav-menu-button>
        </nav-buttons>
        <nav-title>Menu</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      Tap the button in the toolbar to open the menu.
    </nav-content>
  </div>
</nav-app>

<style>
  nav-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  nav-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>
```
