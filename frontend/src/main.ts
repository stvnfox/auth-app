import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store/pinia'
import 'bootstrap'

// import stylesheets
import '../src/assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
