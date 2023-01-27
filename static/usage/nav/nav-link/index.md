import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_tsx from './react/main_tsx.md';
import react_page_one_tsx from './react/page_one_tsx.md';
import react_page_two_tsx from './react/page_two_tsx.md';
import react_page_three_tsx from './react/page_three_tsx.md';

import kdu_example from './kdu/example_kdu.md';
import kdu_page_one from './kdu/page_one_kdu.md';
import kdu_page_two from './kdu/page_two_kdu.md';
import kdu_page_three from './kdu/page_three_kdu.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/page-one.tsx': react_page_one_tsx,
        'src/page-two.tsx': react_page_two_tsx,
        'src/page-three.tsx': react_page_three_tsx,
      },
    },
    kdu: {
      files: {
        'src/components/Example.kdu': kdu_example,
        'src/components/PageOne.kdu': kdu_page_one,
        'src/components/PageTwo.kdu': kdu_page_two,
        'src/components/PageThree.kdu': kdu_page_three,
      },
    },
  }}
  src="usage/nav/nav-link/demo.html"
  devicePreview
/>
