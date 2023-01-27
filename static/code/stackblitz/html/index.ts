import { defineCustomElements } from '@navify/core/loader';

import { loadingController, modalController, pickerController, toastController } from '@navify/core';

/* Core CSS required for Navify components to work properly */
import '@navify/core/css/core.css';

/* Basic CSS for apps built with Navify */
import '@navify/core/css/normalize.css';
import '@navify/core/css/structure.css';
import '@navify/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@navify/core/css/padding.css';
import '@navify/core/css/float-elements.css';
import '@navify/core/css/text-alignment.css';
import '@navify/core/css/text-transformation.css';
import '@navify/core/css/flex-utils.css';
import '@navify/core/css/display.css';

/* Theme variables */
import './theme/variables.css';

defineCustomElements();

(window as any).loadingController = loadingController;
(window as any).modalController = modalController;
(window as any).pickerController = pickerController;
(window as any).toastController = toastController;
