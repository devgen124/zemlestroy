import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import initMobileMenu from './modules/init-mobile-menu';
import {initAccToggle} from './modules/accordeon';
import initWorksSlider from './modules/works-slider';
import initCelebritiesSlider from './modules/celebrities-slider';
import initgallerySlider from './modules/gallery-slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initMobileMenu();
initAccToggle();
initWorksSlider();
initCelebritiesSlider();
initgallerySlider();
