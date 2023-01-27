---
title: Navify CLI
sidebar_label: Overview
---

<head>
  <title>Navify CLI Framework: Command-Line Interface to Develop Apps</title>
  <meta
    name="description"
    content="The Navify command-line interface (CLI) is the go-to tool for developing Navify apps. Install our framework globally with npm."
  />
</head>

The Navify command-line interface ([CLI](/docs/reference/glossary#cli)) is the go-to tool for developing Navify apps.

## Installation

The Navify CLI can be installed globally with npm:

```shell
npm install -g @navify/cli
```

## Help

The Navify CLI ships with command documentation that is accessible with the `--help` flag.

```shell
$ navify --help
$ navify <command> --help
$ navify <command> <subcommand> --help
```

:::note
Be sure to run `navify <command> --help` in your project directory.

For some commands, such as `navify serve`, the help documentation is contextual to the type of your project, e.g. React vs Kdu.
:::

<!-- TODO: image? -->

## Architecture

The Navify CLI is built with [TypeScript](/docs/reference/glossary#typescript) and [Node.js](/docs/reference/glossary#node). It supports Node 10.3+, but the latest Node LTS is always recommended.

## Troubleshooting

To troubleshoot issues with the Navify CLI, the following may be useful:

- Make sure the latest version of the Navify CLI is installed. Get the installed version by running `navify --version`.
- Make sure the latest Node LTS is installed. See [Node & npm](/docs/intro/environment#node-npm) environment setup.
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/using-a-proxy) to configure request proxying.
- The global Navify CLI configuration directory is `~/.navify` on all platforms. It can safely be deleted and the Navify CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with [CLI environment variables](/docs/cli/configuration#environment-variables).
