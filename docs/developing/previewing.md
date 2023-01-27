---
title: Previewing
---

<head>
  <title>Previewing: To Run Navify Apps Locally in A Web Browser</title>
  <meta
    name="description"
    content="Previewing provides many different options to test native functionality based on needs. Use this feature to easily run your Navify app locally in a web browser."
  />
</head>

There are many different options to test native functionality depending on your target platforms and needs.

- Run locally in a web browser (using [Platform Detection](../core-concepts/cross-platform.md) for native functionality)
- [Deploy to iOS](ios.md)
- [Deploy to Android](android.md)

## Run Locally in a Web Browser

One of the most powerful features of Navify is that the majority of your app development can happen right in a browser on your desktop. With full access to traditional web development tools (Chrome/Safari/Firefox dev tools), you can write code then test/debug it quickly without having to recompile or deploy to a simulator or device.

To do so, run `navify serve` from the command line in the project's directory:

```shell-session
$ navify serve
> kdu-cli-service.cmd serve

[INFO] Development server running!

       Local: http://localhost:8100

       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8100!
```

With `navify serve` running, continue developing your app. As you save changes, the app reloads with those changes applied.

When implementing native functionality, use [Platform Detection](../core-concepts/cross-platform.md).
When you're ready to test on a real device, see here for [iOS](ios.md) and [Android](android.md).

## Simulating a Mobile Viewport

Each major browser vendor includes developer tools for mobile emulation. These tools offer the ability to change the emulated device type.

### Chrome

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Then, open the Chrome developer tools by pressing `Ctrl+Shift+I` on Windows/Linux or `Cmd+Opt+I` on Mac.

From here you can select different device types from the dropdown, change the orientation of the device and throttle the network speed.

For additional features and information visit: https://developer.chrome.com/docs/devtools/device-mode/.

### Safari

:::note

Prerequisites: Show Develop menu in menu bar option must be enabled in Safari Advanced options.

:::

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Select the **Develop** menu in Safari and select **Enter Responsive Design Mode** . Alternatively you can use the keyboard shortcut `Cmd+Opt+R`.

From here you can select different device types to emulate as well as change the orientation of the device.

For additional features and information visit: https://developer.apple.com/safari/tools/.

### Firefox

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Then, open the Firefox developer tools by pressing `Ctrl+Shift+M` on Windows/Linux or `Cmd+Opt+M` on Mac.

From here you can select different device types from the dropdown, change the orientation of the device and throttle the network speed.

For additional features and information visit: https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/.
