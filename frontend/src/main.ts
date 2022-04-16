import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';

// import stylesheets
import '../src/assets/scss/main.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');