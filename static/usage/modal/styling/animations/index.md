import Playground from '@site/src/components/global/Playground';

import kdu from './kdu.md';
import react from './react.md';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

<Playground
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
    },
    react,
    kdu,
  }}
  src="usage/modal/styling/animations/demo.html"
  devicePreview
  includeNavContent={false}
/>
