---
title: Configuration
---

<head>
  <title>Jigra Configuration | Maintain a Global Configuration File</title>
  <meta
    name="description"
    content="Set and print configuration values from project config files and the global CLI config file with Navify CLI. Read to learn more about Jigra configuration."
  />
</head>

## Files

Configuration values are stored in JSON files. The Navify CLI maintains a global configuration file, usually located at `~/.navify/config.json`, and project configuration files, usually at the project's root directory as `navify.config.json`.

The CLI provides commands for setting and printing config values from project config files and the global CLI config file. See `navify config --help` or see the documentation for usage of [`navify config get`](commands/config-get.md) and [`navify config set`](commands/config-set.md).

### Project Configuration File

Each Navify project has a project configuration file, usually at the project's root directory. The following is an annotated `navify.config.json` file.

```json
{
  // The human-readable name of the app.
  "name": "My App",

  // The project type of the app. The CLI uses this value to determine which
  // commands and command options are available, what to output for help
  // documentation, and what to use for web asset builds and the dev server.
  "type": "kdu",

  // Configuration object for integrations such as Cordova and Jigra.
  "integrations": {
    "cordova": {
      ...
    }
  },

  // Hook configuration--see the Hooks section below for details.
  "hooks": {
    ...
  }
}
```

## Environment Variables

The CLI will look for the following environment variables:

- `NAVIFY_CONFIG_DIRECTORY`: The directory of the global CLI config. Defaults to `~/.navify`.
- `NAVIFY_HTTP_PROXY`: Set a URL for proxying all CLI requests through. See [Using a Proxy](using-a-proxy.md).

## Flags

CLI flags are global options that alter the behavior of a CLI command.

- `--help`: Instead of running the command, view its help page.
- `--verbose`: Show all log messages for debugging purposes.
- `--quiet`: Only show `WARN` and `ERROR` log messages.
- `--no-interactive`: Turn off interactive prompts and fancy outputs. If CI or a non-TTY terminal is detected, the CLI is automatically non-interactive.
- `--confirm`: Turn on auto-confirmation of confirmation prompts. Careful: the CLI prompts before doing something potentially harmful. Auto-confirming may have unintended results.

## Hooks

The CLI can run scripts during certain events, such as before and after builds. To hook into the CLI, the following [npm scripts](https://docs.npmjs.com/misc/scripts) can be used in `package.json`:

- `navify:serve:before`: executed before the dev server starts
- `navify:serve:after`: executed after the dev server is terminated
- `navify:build:before`: executed before a web asset build begins
- `navify:build:after`: executed after a web asset build finishes
- `navify:jigra:run:before`: executed during `navify jigra run` before jigra open is executed
- `navify:jigra:build:before`: executed during `navify jigra build` before jigra open is executed
- `navify:jigra:sync:after`: executed during `navify jigra sync` after a sync

When using a shell script for any of the hooks, hook context is defined in environment variables prefixed with `NAVIFY_CLI_HOOK_CTX_`.

The following example shows the environment variables that are set for the `navify:jigra:build` hook.

```shell
NAVIFY_CLI_HOOK_CTX_NAME=jigra:build:before
NAVIFY_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
NAVIFY_CLI_HOOK_CTX_BUILD_ENGINE=browser
NAVIFY_CLI_HOOK_CTX_BUILD_PROJECT=app
NAVIFY_CLI_HOOK_CTX_BUILD_TYPE=kdu
NAVIFY_CLI_HOOK_CTX_BUILD_VERBOSE=false
NAVIFY_CLI_HOOK_CTX_JIGRA_APP_ID=app.web.navify.starter
NAVIFY_CLI_HOOK_CTX_JIGRA_APP_NAME=navify-starter-app
NAVIFY_CLI_HOOK_CTX_JIGRA_VERBOSE=false
```

Hooks can also be defined in `navify.config.json`. Define a `hooks` object within the project, where each key is the name of the hook (without the `navify:` prefix), and the value is a path to a JavaScript file or an array of paths.

In the following example, the file is imported and run during the `navify:build:before` hook.

```json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

JavaScript hook files should export a single function, which is passed a single argument (`ctx`) whenever the hook executes.

The argument is the context given to the hook file, which differs from hook to hook and with different invocations.

`./scripts/build-before.js`:

```javascript
module.exports = function (ctx) {
  console.log(ctx);
};
```

## Multi-app Projects

<small>
  <em>Available in CLI 6.2.0+</em>
</small>

The Navify CLI supports a multi-app configuration setup, which involves multiple Navify apps and shared code within a single repository, or [monorepo](../reference/glossary.md#monorepo).

:::note
These docs give an overview of the multi-app feature of the Navify CLI, but don't really go into details for each framework.
:::

### Setup Steps

1. Create a directory and initialize a monorepo (see [Project Structure](#project-structure) for full details).
1. Initialize the monorepo as an Navify multi-app project. This will create a multi-app `navify.config.json` file. See [Config File](#config-file) for full details.

   ```shell
   $ navify init --multi-app
   ```

1. Use `navify start` to create Navify apps or `navify init` to initialize existing apps (see [Adding an App](#adding-an-app) for full details).

### Project Structure

In a multi-app project, project structure is flexible. The only requirement is a multi-app `navify.config.json` file at the root of the repository.

Below is an example setup, where apps in the `apps/` directory are separated from the shared code in the `lib/` directory. Notice the root `navify.config.json` file and the monorepo's `package.json` file.

```bash
apps/
├── myApp/
└── myOtherApp/
lib/
navify.config.json
package.json
```

### Config File

In a multi-app project, apps share a single `navify.config.json` file at the root of the repository instead of each app having their own. The multi-app config file contains the configuration for each app by nesting configuration objects in a `projects` object. A default app can be specified using `defaultProject`.

Below is an example file, which corresponds to the file structure above.

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": {},
      "type": "kdu",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "kdu",
      "root": "apps/myOtherApp"
    }
  }
}
```

When a multi-app project is detected, the Navify CLI will operate under the context of an app configured in the root `navify.config.json`. Project selection criteria is as follows:

1. If the global CLI option `--project` is specified, the project is looked up by key in the `projects` object. For example, `--project=myApp` will select the `myApp` project.
1. If the CLI detects it is being run within a project path, configured with the `root` key, it will select the matched project. For example, using the CLI within the `apps/myOtherApp/src` directory will select the `myOtherApp` project.
1. If a `defaultProject` is specified in `navify.config.json`, it will select the specified project when the above criteria is not met.

### Adding an App

Apps can be registered in a multi-app project either by using `navify start` to create new apps or `navify init` to initialize existing apps.

#### Using `navify start`

If a multi-app project is detected during `navify start`, the CLI will add the app configuration to the root `navify.config.json` file instead of creating a project-specific one.

Dependency installation can be skipped using `--no-deps` if dependencies are hoisted to the root of the monorepo.

```shell
$ cd apps/
$ navify start "My New App" --no-deps
```

#### Using `navify init`

If an app was created in a way other than `navify start`, for example by using a prebuilt template, use `navify init` to register the existing app with the multi-app project.

:::note
Make sure the app doesn't have an existing `navify.config.json`.
:::

```shell
$ cd apps/existing-app/
$ navify init
```

## Advanced Configuration

### Overriding the Build

Normally, the CLI runs a hard-coded set of commands based on the project type. The web asset build can be overridden and `navify build` can continue to be used by utilizing the `navify:build` [npm script](https://docs.npmjs.com/misc/scripts). Similarly, the dev server can be overridden by using the `navify:serve` npm script.

Pay close attention to the flags supplied to the script by the Navify CLI. Irregularities may occur if options are not respected, especially for livereload on devices.

### Command Options

Command options can be expressed with environment variables. They are normally set with `--opt=value` syntax. The naming of these environment variables follows a pattern: start with `NAVIFY_CMDOPTS_`, add the command name (replacing any spaces with underscores), add the option name (replacing any hyphens with underscores), and then uppercase everything. Boolean flags (command-line options that don't take a value) can be set to `1` or `0`. Strip the `--no-` prefix in boolean flags, if it exists (`--no-open` in navify serve can be expressed with `NAVIFY_CMDOPTS_SERVE_OPEN=0`, for example).

For example, the command options in `navify cordova run ios -lc --livereload-port=1234 --host=0.0.0.0` can also be expressed with this series of environment variables:

```shell
$ export NAVIFY_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export NAVIFY_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export NAVIFY_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export NAVIFY_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

If these variables are set in the environment, `navify cordova build ios` will use new defaults for its options.

### Telemetry

The CLI sends usage data to Navify to create a better experience. To disable this functionality, run `navify config set -g telemetry false`.
