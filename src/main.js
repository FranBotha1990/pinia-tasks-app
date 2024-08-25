import './assets/main.css'
// Import create pinia function
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

// Invoke pinia in App
createApp(App).use(createPinia()).mount('#app')
