```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open Modal</nav-button>

    <nav-modal ref="modal" trigger="open-modal" :enter-animation="enterAnimation" :leave-animation="leaveAnimation">
      <nav-content>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button @click="dismiss()">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
        <nav-list>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=b"></nav-img>
            </nav-avatar>
            <nav-label>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=a"></nav-img>
            </nav-avatar>
            <nav-label>
              <h2>Daniel Smith</h2>
              <p>Product Designer</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=d"></nav-img>
            </nav-avatar>
            <nav-label>
              <h2>Greg Smith</h2>
              <p>Director of Operations</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=e"></nav-img>
            </nav-avatar>
            <nav-label>
              <h2>Zoey Smith</h2>
              <p>CEO</p>
            </nav-label>
          </nav-item>
        </nav-list>
      </nav-content>
    </nav-modal>
  </nav-content>
</template>

<script lang="ts">
  import {
    createAnimation,
    NavButtons,
    NavButton,
    NavModal,
    NavHeader,
    NavContent,
    NavToolbar,
    NavTitle,
    NavItem,
    NavList,
    NavAvatar,
    NavImg,
    NavLabel,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavButtons,
      NavButton,
      NavModal,
      NavHeader,
      NavContent,
      NavToolbar,
      NavTitle,
      NavItem,
      NavList,
      NavAvatar,
      NavImg,
      NavLabel,
    },
    setup() {
      const enterAnimation = (baseEl: HTMLElement) => {
        const root = baseEl.shadowRoot;

        const backdropAnimation = createAnimation()
          .addElement(root.querySelector('nav-backdrop'))
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

        const wrapperAnimation = createAnimation()
          .addElement(root.querySelector('.modal-wrapper'))
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' },
          ]);

        return createAnimation()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
      };

      const leaveAnimation = (baseEl) => {
        return enterAnimation(baseEl).direction('reverse');
      };
      return { enterAnimation, leaveAnimation };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>
```
