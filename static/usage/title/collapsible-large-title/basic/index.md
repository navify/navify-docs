import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import kdu from './kdu.md';

<Playground
  mode="ios"
  code={{ javascript, react, kdu }}
  src="usage/title/collapsible-large-title/basic/demo.html"
  devicePreview={true}
  includeNavContent={false}
/>
