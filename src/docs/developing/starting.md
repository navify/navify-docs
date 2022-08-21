---
title: Starting an App
---

# Starting an App

Starting a new Navify app is incredibly simple. From the command line, run the `navify start` command and the CLI will handle the rest.

```sh
$ navify start

Every great app needs a name! 😍

Please enter the full name of your app. You can change this at any time.
To bypass this prompt next time, supply name,
the first argument to navify start.

? Project name: █
```

The Navify CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:

```sh
$ navify start myApp tabs
```

Here, `myApp` is the name of the project, `tabs` is the starter template, and the project type is `kdu`.

`tabs` is not the only project template available. Between all project types, there are three templates available:

- `tabs`: A tabs based layout
- `sidemenu`: A sidemenu based layout
- `blank`: An empty project with a single page

See all available templates with the following command:

```sh
$ navify start --list
```

These templates provide a great starting point for any app and include all the best practices for making a code base scale.
