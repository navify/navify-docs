```html
<template>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-button>
        Start
      </nav-button>
    </nav-buttons>
    <nav-title>Start / End Buttons</nav-title>
    <nav-buttons slot="end">
      <nav-button>
        End
      </nav-button>
    </nav-buttons>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="secondary">
      <nav-button>
        Secondary
      </nav-button>
    </nav-buttons>
    <nav-buttons slot="primary">
      <nav-button>
        Primary
      </nav-button>
    </nav-buttons>
    <nav-title>Primary / Secondary Buttons</nav-title>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="secondary">
      <nav-button>
        <nav-icon slot="icon-only" :icon="personCircle"></nav-icon>
      </nav-button>
      <nav-button>
        <nav-icon slot="icon-only" :icon="search"></nav-icon>
      </nav-button>
    </nav-buttons>
    <nav-buttons slot="primary">
      <nav-button>
        <nav-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></nav-icon>
      </nav-button>
    </nav-buttons>
    <nav-title>Icon Buttons</nav-title>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="secondary">
      <nav-button fill="solid">
        <nav-icon slot="start" :icon="personCircle"></nav-icon>
        Contact
      </nav-button>
    </nav-buttons>
    <nav-buttons slot="primary">
      <nav-button fill="solid">
        Help
        <nav-icon slot="end" :icon="helpCircle"></nav-icon>
      </nav-button>
    </nav-buttons>
    <nav-title>Solid Buttons</nav-title>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="secondary">
      <nav-button fill="outline">
        <nav-icon slot="start" :icon="star"></nav-icon>
        Star
      </nav-button>
    </nav-buttons>
    <nav-buttons slot="primary">
      <nav-button fill="outline">
        Edit
        <nav-icon slot="end" :icon="create"></nav-icon>
      </nav-button>
    </nav-buttons>
    <nav-title>Outline Buttons</nav-title>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-back-button default-href="#"></nav-back-button>
    </nav-buttons>
    <nav-title>Back Button</nav-title>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-menu-button :auto-hide="false"></nav-menu-button>
    </nav-buttons>
    <nav-title>Menu Button</nav-title>
  </nav-toolbar>
</template>

<script lang="ts">
  import { NavBackButton, NavButton, NavButtons, NavIcon, NavMenuButton, NavTitle, NavToolbar } from '@navify/kdu';
  import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavBackButton, NavButton, NavButtons, NavIcon, NavMenuButton, NavTitle, NavToolbar },
    setup() {
      return { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star };
    },
  });
</script>
```
