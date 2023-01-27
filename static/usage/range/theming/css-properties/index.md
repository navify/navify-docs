import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import kdu from './kdu.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.css': react_main_css,
        'src/main.tsx': react_main_tsx,
      },
    },
    kdu,
  }}
  src="usage/range/theming/css-properties/demo.html"
/>
