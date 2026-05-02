import { createApp } from 'vue';
import { router } from './app-routes/router';
import App from './App.vue';

import './assets/base.scss';

createApp(App).use(router).mount('#app');
