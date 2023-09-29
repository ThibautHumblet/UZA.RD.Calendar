import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'

import './assets/styles.scss'

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(pinia)

app.use(router)

app.mount('#app')