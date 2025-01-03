import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast'; // Import the Toast component

import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';



const app = createApp(App)

app.use(router)
app.use(store)

app.use(PrimeVue)
app.use(ToastService)

app.component('Toast', Toast); // Register Toast globally

app.mount('#app')
