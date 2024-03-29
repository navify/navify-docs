import { createApp } from 'kdu';
import { NavifyKdu } from '@navify/kdu';

import App from './App.kdu';

/* Core CSS required for Navify components to work properly */
import '@navify/kdu/css/core.css';

/* Basic CSS for apps built with Navify */
import '@navify/kdu/css/normalize.css';
import '@navify/kdu/css/structure.css';
import '@navify/kdu/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@navify/kdu/css/padding.css';
import '@navify/kdu/css/float-elements.css';
import '@navify/kdu/css/text-alignment.css';
import '@navify/kdu/css/text-transformation.css';
import '@navify/kdu/css/flex-utils.css';
import '@navify/kdu/css/display.css';

/* Theme variables */
import './theme/variables.css';

createApp(App).use(NavifyKdu, {
  mode: '{{ MODE }}'
}).mount('#app');
