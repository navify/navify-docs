```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@navify/core/css/core.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@navify/core/css/navify.bundle.css" />
  </head>

  <body>
    <nav-app>
      <nav-header>
        <nav-toolbar>
          <nav-title>App</nav-title>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <nav-button id="open-modal" expand="block">Open Modal</nav-button>

        <nav-modal trigger="open-modal">
          <nav-header>
            <nav-toolbar>
              <nav-title>Modal</nav-title>
              <nav-buttons slot="end">
                <nav-button onclick="modal.dismiss()">Close</nav-button>
              </nav-buttons>
            </nav-toolbar>
          </nav-header>
          <nav-content>
            <nav-list>
              <nav-item>
                <nav-avatar slot="start">
                  <nav-img src="https://i.pravatar.cc/300?u=b" />
                </nav-avatar>
                <nav-label>
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </nav-label>
              </nav-item>
              <nav-item>
                <nav-avatar slot="start">
                  <nav-img src="https://i.pravatar.cc/300?u=a" />
                </nav-avatar>
                <nav-label>
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </nav-label>
              </nav-item>
              <nav-item>
                <nav-avatar slot="start">
                  <nav-img src="https://i.pravatar.cc/300?u=d" />
                </nav-avatar>
                <nav-label>
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </nav-label>
              </nav-item>
              <nav-item>
                <nav-avatar slot="start">
                  <nav-img src="https://i.pravatar.cc/300?u=e" />
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
    </nav-app>

    <script>
      var modal = document.querySelector('nav-modal');

      const enterAnimation = (baseEl) => {
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

      const leaveAnimation = (baseEl) => enterAnimation(baseEl).direction('reverse');

      modal.enterAnimation = enterAnimation;
      modal.leaveAnimation = leaveAnimation;

      function dismiss() {
        modal.dismiss();
      }
    </script>
  </body>
</html>
```
