import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'

import { createHead } from '@vueuse/head'  // Importer createHead

const app = createApp(App)

app.use(createPinia())
app.use(router)

const head = createHead()  // Créer l'instance de head
app.use(head)  // Ajouter head à l'app

app.mount('#app')
