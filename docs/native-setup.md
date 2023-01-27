---
title: Jigra Plugins
sidebar_label: Setup
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Jigra Plugins | Jigra Core Plugins for Navify Apps</title>
  <meta
    name="description"
    content="Jigra offers a collection APIs that make adding native functionality to your Navify app as simple as using any JavaScript library."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Getting started with Jigra is fairly straight forward for Navify developers. Adding plugins to your project is no different than adding any dependencies you may need to a project.
<intro-end />

## Install

To install a plugin, find the plugin you want to use and install it using your package manager, like npm:

```shell
# Install the Jigra Plugins
$ npm install @jigra/camera
```

## Usage

Once installed, plugins can be imported into a component and you can call the native functionality directly from your code.

Using the [Camera plugin](native/camera.md) as an example, first install it:

````mdx-code-block
<Tabs
  groupId="runtime"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'kdu', label: 'Kdu' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="javascript">

```javascript
import { Camera, CameraResultType } from '@jigra/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageElement.src = imageUrl;
};
```

</TabItem>
<TabItem value="kdu">

```typescript

<template>
...
</template>

<script setup lang="typescript">
import { ref } from 'kdu';
import { Camera, CameraResultType } from '@jigra/camera';
const imageSrc = ref('');

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageSrc.value = imageUrl;
};

</script>

```

</TabItem>
<TabItem value="react">

```javascript
import { Camera, CameraResultType } from '@jigra/camera';
import { useState } from 'react';

export function CameraComponent() {
  const [imageSrc, setImageSrc] = usetState('');

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    setImageSrc(imageUrl);
  };
  return (...)
}
```

</TabItem>
</Tabs>
````
