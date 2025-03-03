import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import BaseIcon from './components/ui/BaseIcon.vue'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)

app.use(createPinia())

app.mount('#app')
