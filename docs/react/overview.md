# Navify React Overview

`@navify/react` combines the core Navify experience with the tooling and APIs that are tailored to React Developers.

:::note
The first official version of Navify React is v4.11.
:::

First, install the Navify CLI:

```shell
npm install -g @navify/cli
```

then run:

```shell
navify start myAppName
```

The CLI will guide you through the setup process by asking a couple of questions, including the framework to use (React, of course!) and the starter code template.

After the app has been created, launch the app:

```shell
navify serve
```

Now, start building out the app using some of the [Navify UI components](../components.md).

## React Version Support

Compatible with React version 16.8 and above.

## React Tooling

Navify React projects are just like React projects, leveraging [react-dom](https://reactjs.org/docs/react-dom.html) and with setup normally found in a [Create React App (CRA)](https://github.com/facebook/create-react-app) app. For [routing and navigation](navigation.md), React Router is used under the hood.

One difference is the usage of [TypeScript](http://www.typescriptlang.org/), which provides a more productive experience. To use plain JavaScript, rename files to use a `.js` extension then remove any of the type annotations with each file.

## Native Tooling

[Jigra](https://jigrajs.web.app) is the official cross-platform app runtime used to make your `Navify React` web app run natively on iOS, Android, Electron, and the web.

While there are no known technical limitations to using `Navify React` with [Cordova](https://cordova.apache.org/) plugins, Jigra is officially recommended. There are no plans to support a Cordova integration for `Navify React` in the [Navify CLI tooling](../cli.md) at this time. For more details, please [see here](https://jigrajs.web.app/docs/cordova).
