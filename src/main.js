import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const app = createApp(App)

app.mount('#app')

app.config.globalProperties.currentMenu = "Dashboard"