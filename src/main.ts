import './styles/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' 

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as echarts from 'echarts';

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(pinia)
app.use(ElementPlus)

app.config.globalProperties.$echarts = echarts