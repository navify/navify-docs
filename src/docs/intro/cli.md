---
title: Installing with CLI
---

# CLI Installing

Navify apps are created and developed primarily through the Navify [command-line](../reference/glossary.md#cli) utility. The Navify CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way.

## Install the Navify CLI

Before proceeding, make sure your computer has [Node.js](../reference/glossary.md#node) installed. See [these instructions](environment.md) to set up an environment for Navify.

Install the Navify CLI with npm:

```sh
npm install -g @navify/cli
```

If there was a previous installation of the Navify CLI, it will need to be uninstalled due to a change in package name.

```sh
$ npm uninstall -g navify
$ npm install -g @navify/cli
```

:::warning Note
The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.
Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors) for more information.
:::

## Start an App

Create an Navify app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the `blank` starter, `tabs` starter, and `sidemenu` starter. Get started with the `navify start` command:

```sh
navify start
```

![start app thumbnails](/img/installation/start-app-thumbnails.png)

To learn more about starting Navify apps, see the [Starting Guide](../developing/starting.md).

## Run the App

The majority of Navify app development can be spent right in the browser using the `navify serve` command:

```sh
$ cd myApp
$ navify serve
```

There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the [Running an App Guide](../developing/previewing.md).
