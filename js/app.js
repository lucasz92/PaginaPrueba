import Alpine from '../node_modules/alpinejs/dist/module.esm.js';
import persist from '../node_modules/@alpinejs/persist/dist/module.esm.js';
import intersect from '../node_modules/@alpinejs/intersect/dist/module.esm.js';
import mask from '../node_modules/@alpinejs/mask/dist/module.esm.js';
import collapse from '../node_modules/@alpinejs/collapse/dist/module.esm.js';


// Registrar los plugins
Alpine.plugin(persist);
Alpine.plugin(intersect);
Alpine.plugin(mask);
Alpine.plugin(collapse);

window.Alpine = Alpine;

Alpine.start();
