import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/reset.css'



const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router)

app.mount('#app');
