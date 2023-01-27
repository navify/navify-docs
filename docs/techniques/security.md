---
title: Security
disableHtmlPreviews: true
---

<head>
  <title>Security for React, and Kdu Apps - Navify Framework</title>
  <meta
    name="description"
    content="View Navify's security info for sanitizing user input, ejecting from the built-in sanitizer, and more. Learn about app security using React, and Kdu."
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sanitizing User Input

For components such as `nav-alert` developers can allow for custom or user-provided content. This content can be plain text or HTML and should be considered untrusted. As with any untrusted input, it is important to sanitize it before doing anything else with it. In particular, using things like `innerHTML` without sanitization provides an attack vector for bad actors to input malicious content and potentially launch a [Cross Site Scripting attack (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting).

Navify comes built in with basic sanitization methods for the components it provides, but for user-created components it is up to the developer to make sure all data is sanitized. Different frameworks have different solutions for sanitizing user input, so developers should familiarize themselves with what their specific framework offers.

For developers who are not using a framework, or for developers whose framework does not provide the sanitization methods they need, we recommend using [sanitize-html](https://www.npmjs.com/package/sanitize-html). This package provides a simple HTML sanitizer that allows the developer to specify the exact tags and attributes that they want to allow in their application.

### React

React DOM escapes values embedded in JSX before rendering them by converting them to strings. For example, the following would be safe as `name` is converted to a string before being rendered:

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

However, this does not stop someone from injecting JavaScript into places such as the `href` attribute of an anchor element. The following is unsafe and can potentially allow an XSS attack to occur:

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

If the developer needs to achieve more comprehensive sanitization, they can use the [sanitize-html](https://www.npmjs.com/package/sanitize-html) package.

To learn more about the built-in protections that React and JSX provide, see the [React JSX Documentation](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks).

### Kdu

Kdu does not provide any type of sanitizing methods built in. It is recommended that developers use a package such as [sanitize-html](https://www.npmjs.com/package/sanitize-html).

To learn more about the security recommendations for binding to directives such as `k-html`, see the [Kdu Syntax Guide](https://kdujs-v2.web.app/v2/guide/syntax.html#Raw-HTML).

## Ejecting from the built-in sanitizer

For developers who wish to add complex HTML to components such as `nav-toast`, they will need to eject from the sanitizer that is built into Navify Framework. Developers can either disable the sanitizer across their entire app or bypass it on a case-by-case basis.

:::note
Bypassing sanitization functionality can make your application vulnerable to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS attacks</a>. Please exercise extreme caution when disabling the sanitizer.
:::

### Disabling the sanitizer via config

Navify Framework provides an application config option called `sanitizerEnabled` that is set to `true` by default. Set this value to `false` to globally disable Navify Framework's built in sanitizer. Please note that this does not disable any sanitizing functionality provided by other frameworks such as React.

### Bypassing the sanitizer on a case-by-case basis

Developers can also choose to eject from the sanitizer in certain scenarios. Navify Framework provides the `NavifySafeString` class that allows developers to do just that.

#### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="javascript">

```javascript
import { NavifySafeString } from '@navify/core';

...

const async presentToast = () => {
  const toast = document.createElement('nav-toast');
  toast.message = new NavifySafeString('<nav-button>Hello!</nav-button>');
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

```
</TabItem>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { Animation, NavButton, NavContent, NavifySafeString, NavToast } from '@navify/react';

export const ToastExample: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <NavContent>
      <NavButton onClick={() => setShowToast(true)} expand="block">Show Toast</NavButton>
      <NavToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={new NavifySafeString('<nav-button>Hello!</nav-button>')}
        duration={2000}
      />
    </NavContent>
  )
};
```
</TabItem>
</Tabs>
````
