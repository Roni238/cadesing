import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import BaseIcon from './components/ui/BaseIcon.vue'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.use(VueTheMask)
app.component('BaseIcon', BaseIcon)

app.use(createPinia())

app.mount('#app')
