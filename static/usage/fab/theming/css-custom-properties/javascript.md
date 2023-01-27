```html
<style>
  nav-fab-button {
    --background: #b7f399;
    --background-activated: #87d361;
    --background-hover: #a3e681;
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    --color: black;
  }
</style>

<nav-fab>
  <nav-fab-button>
    <nav-icon name="add"></nav-icon>
  </nav-fab-button>
  <nav-fab-list side="end">
    <nav-fab-button>
      <nav-icon name="document"></nav-icon>
    </nav-fab-button>
    <nav-fab-button>
      <nav-icon name="color-palette"></nav-icon>
    </nav-fab-button>
    <nav-fab-button>
      <nav-icon name="globe"></nav-icon>
    </nav-fab-button>
  </nav-fab-list>
</nav-fab>
```
