import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import kdu from './kdu.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

<Playground
  code={{
    javascript,
    kdu,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
  }}
  src="usage/modal/styling/theming/demo.html"
  devicePreview
  includeNavContent={false}
/>
