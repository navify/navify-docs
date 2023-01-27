```ts
import { defineCustomElements } from '@navify/core/loader';

import { createAnimation } from '@navify/core';

defineCustomElements();

(window as any).createAnimation = createAnimation;
```
