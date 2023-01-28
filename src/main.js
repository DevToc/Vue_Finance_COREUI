import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import './app.css'


createApp(App).use(router).mount('#app')
