```html
<nav-header>
  <nav-toolbar>
    <nav-title>Fab Buttons</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-fab slot="fixed" vertical="top" horizontal="start">
    <nav-fab-button>
      <nav-icon name="chevron-forward-circle"></nav-icon>
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

  <nav-fab slot="fixed" vertical="top" horizontal="end" edge="true">
    <nav-fab-button>
      <nav-icon name="chevron-down-circle"></nav-icon>
    </nav-fab-button>
    <nav-fab-list side="bottom">
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
      
  <nav-fab slot="fixed" vertical="bottom" horizontal="end">
    <nav-fab-button>
      <nav-icon name="chevron-up-circle"></nav-icon>
    </nav-fab-button>
    <nav-fab-list side="top">
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
</nav-content>
```
