import sdk from '@stackblitz/sdk';

// The default title to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_TITLE = 'Navify Docs Example';
// The default description to use for Stackblitz examples (when not overwritten)
const DEFAULT_EDITOR_DESCRIPTION = '';
// Default package version to use for all @navify/* packages.
const DEFAULT_NAVIFY_VERSION = '^6.4.0';


export interface EditorOptions {
  /**
   * The title of the Stackblitz example.
   */
  title?: string;
  /**
   * The description of the Stackblitz example.
   */
  description?: string;

  files?: {
    [key: string]: string;
  }

  /**
   * `true` if `nav-app` and `nav-content` should automatically be injected into the
   * Stackblitz example.
   */
  includeNavContent: boolean;

  /**
   * The mode of the Stackblitz example.
   */
  mode?: string;
}

const loadSourceFiles = async (files: string[]) => {
  const sourceFiles = await Promise.all(files.map(f => fetch(`/docs/code/stackblitz/${f}`)));
  return (await Promise.all(sourceFiles.map(res => res.text())));
}

const openHtmlEditor = async (code: string, options?: EditorOptions) => {
  const [index_ts, index_html, variables_css] = await loadSourceFiles([
    'html/index.ts',
    options?.includeNavContent ? 'html/index.withContent.html' : 'html/index.html',
    'html/variables.css'
  ]);

  sdk.openProject({
    template: 'typescript',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'index.html': index_html.replace(/{{ TEMPLATE }}/g, code).replace(/{{ MODE }}/g, options?.mode),
      'index.ts': index_ts,
      'theme/variables.css': variables_css,
      ...options?.files
    },
    dependencies: {
      '@navify/core': DEFAULT_NAVIFY_VERSION,
    },
  })
}

const openReactEditor = async (code: string, options?: EditorOptions) => {
  let [index_tsx, app_tsx, variables_css, ts_config_json, package_json, package_lock_json, index_html] = await loadSourceFiles([
    'react/index.tsx',
    options?.includeNavContent ? 'react/app.withContent.tsx' : 'react/app.tsx',
    'react/variables.css',
    'react/tsconfig.json',
    'react/package.json',
    'react/package-lock.json',
    'react/index.html'
  ]);

  app_tsx = app_tsx.replace('{{ MODE }}', options?.mode);

  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'public/index.html': index_html,
      'src/index.tsx': index_tsx,
      'src/App.tsx': app_tsx,
      'src/main.tsx': code,
      'src/theme/variables.css': variables_css,
      'tsconfig.json': ts_config_json,
      'package.json': package_json,
      'package-lock.json': package_lock_json,
      ...options?.files,
      '.stackblitzrc': `{
        "startCommand": "yarn run start"
      }`
    }
  })
}

const openKduEditor = async (code: string, options?: EditorOptions) => {
  let [package_json, package_lock_json, index_html, variables_css, wite_config_ts, main_ts, app_kdu, tsconfig_json, tsconfig_node_json, env_d_ts] = await loadSourceFiles([
    'kdu/package.json',
    'kdu/package-lock.json',
    'kdu/index.html',
    'kdu/variables.css',
    'kdu/wite.config.ts',
    'kdu/main.ts',
    options?.includeNavContent ? 'kdu/App.withContent.kdu' : 'kdu/App.kdu',
    'kdu/tsconfig.json',
    'kdu/tsconfig.node.json',
    'kdu/env.d.ts'
  ]);

  main_ts = main_ts.replace('{{ MODE }}', options?.mode);

  /**
   * We have to use Stackblitz web containers here (node template), due
   * to multiple issues with Wite, Kdu/Kdu Router and Kdu 3's script setup.
   *
   * https://github.com/stackblitz/core/issues/1308
   */
  sdk.openProject({
    template: 'node',
    title: options?.title ?? DEFAULT_EDITOR_TITLE,
    description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
    files: {
      'src/App.kdu': app_kdu,
      'src/components/Example.kdu': code,
      'src/main.ts': main_ts,
      'src/env.d.ts': env_d_ts,
      'src/theme/variables.css': variables_css,
      'index.html': index_html,
      'wite.config.ts': wite_config_ts,
      'package.json': package_json,
      'package-lock.json': package_lock_json,
      'tsconfig.json': tsconfig_json,
      'tsconfig.node.json': tsconfig_node_json,
      ...options?.files,
      '.stackblitzrc': `{
        "startCommand": "yarn run dev"
      }`
    }
  });
}

export { openHtmlEditor, openReactEditor, openKduEditor };
