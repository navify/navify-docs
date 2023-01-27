import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import kdu_example from './kdu/example_kdu.md';
import kdu_modal from './kdu/modal_kdu.md';

<Playground
  code={{
    javascript,
    react,
    kdu: {
      files: {
        'src/components/Example.kdu': kdu_example,
        'src/components/Modal.kdu': kdu_modal,
      },
    },
  }}
  src="usage/modal/controller/demo.html"
  devicePreview
  includeNavContent={false}
/>
