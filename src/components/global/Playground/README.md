# Playground

The Playground component renders a demo preview of a component experience with code snippets available for each supported framework.

The Playground can be customized per example, to meet the requirements of the component or experience that you are trying to showcase.

## Show example within a device frame (iPhone/Pixel 5)

By default, Playground examples will render in an empty container and fill the available space. Using the `devicePreview` flag, the Playground will render the demo experience within an iPhone device frame when on iOS mode and within a Pixel device frame when on MD.

```tsx
<Playground devicePreview />
```

## Multiple File Examples

Playground supports single file and multi-file examples to show the required code to create a sample. To include multiple file examples for a single framework target, use the `files` option to specify the file location (in the Stackblitz generated project) and the file contents.

You can mix multi-file and single file examples together in a single example:

```tsx
import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import kdu from './kdu.md';
import javascript from './javascript.md';

<Playground
  files={{
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
    javascript,
    kdu,
  }}
/>;
```

The file location is respective to the Stackblitz demo project. If you are unsure of the exact path, refer to the `stackblitz.utils.ts` method for each respective target. The path specified in `sdk.openProject` will coincide with the value used in the `files` configuration.

## Ejecting from NavApp/NavContent Boilerplate

By default, Playground examples will automatically include the following template wrapper for each component example when opened in Stackblitz.

```html
<nav-app>
  <nav-content class="nav-padding">
    <!-- Demo code injected here -->
  </nav-content>
</nav-app>
```

Note: The above code is just a sample. The code will be slightly different based on each framework target.

To opt-out of this behavior, set `includeNavContent={false}` to disable this wrapper. You will be responsible for manually including `nav-content` in your code snippets.

```tsx
<Playground includeNavContent={false} />
```
