# Config

Navify Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Global Config

To override the initial Navify config for the app, provide your config object as an additional parameter when installing the `NavifyKdu` plugin:

```tsx
createApp(App).use(NavifyKdu, {
  rippleEffect: false,
  mode: 'md',
});
```

In the above example, we are disabling the Material Design ripple effect across the app, as well as forcing the mode to be Material Design.

## Per-Platform Config

Navify Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this.

In the following example, we are disabling all animations in our Navify app only if the app is running in a mobile web browser.
The `isPlatform()` call returns `true` or `false` based upon the platform that is passed in. See the [Platform Documentation](platform.md#platforms) for a list of possible values.

```tsx
import { NavifyKdu, isPlatform } from '@navify/kdu';

createApp(App).use(NavifyKdu, {
  animated: !isPlatform('mobileweb'),
});
```

The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:

```tsx
import { NavifyKdu, isPlatform } from '@navify/kdu';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide',
    };
  }

  return {
    menuIcon: 'ellipsis-vertical',
  };
};

createApp(App).use(NavifyKdu, getConfig());
```

Finally, this example allows you to accumulate a config object based upon different platform requirements:

```tsx
import { NavifyKdu, isPlatform } from '@navify/kdu';

const getConfig = () => {
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};

createApp(App).use(NavifyKdu, getConfig());
```

## Interfaces

### NavifyConfig

Below are the config options that Navify uses.

| Config                   | Type                                                                          | Description                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-action-sheet`, overriding the default "animation".        |
| `actionSheetLeave`       | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-action-sheet`, overriding the default "animation".        |
| `alertEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-alert`, overriding the default "animation".               |
| `alertLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-alert`, overriding the default "animation".               |
| `animated`               | `boolean`                                                                     | If `true`, Navify will enable all animations and transitions across the app.                              |
| `backButtonDefaultHref`  | `string`                                                                      | Overrides the default value for the `defaultHref` property in all `<nav-back-button>` components.        |
| `backButtonIcon`         | `string`                                                                      | Overrides the default icon in all `<nav-back-button>` components.                                        |
| `backButtonText`         | `string`                                                                      | Overrides the default text in all `<nav-back-button>` components.                                        |
| `hardwareBackButton`     | `boolean`                                                                     | If `true`, Navify will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`                                                                | Overrides the default spinner type in all `<nav-infinite-scroll-content>` components.                    |
| `loadingEnter`           | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`                                                                | Overrides the default spinner for all `nav-loading` overlays.                                            |
| `menuIcon`               | `string`                                                                      | Overrides the default icon in all `<nav-menu-button>` components.                                        |
| `menuType`               | `string`                                                                      | Overrides the default menu type for all `<nav-menu>` components.                                         |
| `modalEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`                                                                        | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder`                                                            | Overrides the default "animation" of all `nav-nav` and `nav-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-picker`, overriding the default "animation".              |
| `platform`               | [`PlatformConfig`](/docs/kdu/platform#customizing-platform-detection-methods) | Overrides the default platform detection methods.                                                        |
| `popoverEnter`           | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`                                                                      | Overrides the default icon in all `<nav-refresh-content>` components.                                    |
| `refreshingSpinner`      | `SpinnerTypes`                                                                | Overrides the default spinner type in all `<nav-refresh-content>` components.                            |
| `sanitizerEnabled`       | `boolean`                                                                     | If `true`, Navify will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`                                                                | Overrides the default spinner in all `<nav-spinner>` components.                                         |
| `statusTap`              | `boolean`                                                                     | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`                                                                     | If `true`, Navify will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`                                                             | Overrides the default "layout" of all `nav-bar-button` across the whole application.                     |
| `toastDuration`          | `number`                                                                      | Overrides the default `duration` for all `nav-toast` components.                                         |
| `toastEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `nav-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `nav-toast`, overriding the default "animation".               |
| `toggleOnOffLabels`      | `boolean`                                                                     | Overrides the default `enableOnOffLabels` in all `nav-toggle` components.                                |
