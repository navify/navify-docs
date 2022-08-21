---
title: Previewing
---

# Previewing

There are many different options to test native functionality depending on your target platforms and needs.

- Run locally in a web browser (using `Platform Detection` for native functionality)
- [Deploy to iOS](ios.md)
- [Deploy to Android](android.md)

## Run Locally in a Web Browser

One of the most powerful features of Navify is that the majority of your app development can happen right in a browser on your desktop. With full access to traditional web development tools (Chrome/Safari/Firefox dev tools), you can write code then test/debug it quickly without having to recompile or deploy to a simulator or device.

To do so, run `navify serve` from the command line in the project's directory:

```sh
$ navify serve
> kdu-cli-service.cmd serve

[INFO] Development server running!

       Local: http://localhost:8100

       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8100!
```

With `navify serve` running, continue developing your app. As you save changes, the app reloads with those changes applied.

When implementing native functionality, use `Platform Detection`.
When you're ready to test on a real device, see here for [iOS](ios.md) and [Android](android.md).
