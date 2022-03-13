import { createApp } from 'vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/styles.css';

dom.watch();
library.add(fas);
library.add(fab);
library.add(far);

createApp(App).use(store).use(router).mount('#app');
