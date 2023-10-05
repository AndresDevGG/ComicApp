import './style.scss'

import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App)
.use(pinia)
.use(VueAxios, axios)
.mount('#app')

