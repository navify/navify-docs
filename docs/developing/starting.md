---
title: Starting an App
sidebar_label: Starting
---

<head>
  <title>Starting an App: How to Guide | Navify Documentation</title>
  <meta
    name="description"
    content="Starting a new Navify app is incredibly simple. Learn how to run the navify start command from the command line and let the CLI handle the rest."
  />
</head>

Starting a new Navify app is incredibly simple. From the command line, run the `navify start` command and the CLI will handle the rest.

```shell-session
$ navify start

Every great app needs a name! 😍

Please enter the full name of your app. You can change this at any time.
To bypass this prompt next time, supply name,
the first argument to navify start.

? Project name: █
```

The Navify CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:

```shell-session
$ navify start myApp tabs
```

Here, `myApp` is the name of the project, `tabs` is the starter template, and the project type is `kdu`.

`tabs` is not the only project template available. Between all project types, there are three templates available:

- `tabs`: A tabs based layout
- `sidemenu`: A sidemenu based layout
- `blank`: An empty project with a single page

See all available templates with the following command:

```shell-session
$ navify start --list
```

These templates provide a great starting point for any app and include all the best practices for making a code base scale.
