import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import kdu_example from './kdu/example_kdu.md';
import kdu_popover from './kdu/popover_kdu.md';

<Playground
  size="300px"
  code={{
    javascript,
    react,
    kdu: {
      files: {
        'src/components/Example.kdu': kdu_example,
        'src/components/Popover.kdu': kdu_popover,
      },
    },
  }}
  src="usage/popover/presenting/controller/demo.html"
/>
