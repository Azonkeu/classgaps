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

// const firebaseConfig = {
//   apiKey: 'AIzaSyDiGgPh_U6Hm7GNnsFz_3PWwCEdHoD42vQ',
//   authDomain: 'storex-5c6a0.firebaseapp.com',
//   projectId: 'storex-5c6a0',
//   storageBucket: 'storex-5c6a0.appspot.com',
//   messagingSenderId: '1054795013051',
//   appId: '1:1054795013051:web:f01a7bbcda42eb5f58c29e',
//   measurementId: 'G-YLRVR1SM6G',
// };

// firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app');
