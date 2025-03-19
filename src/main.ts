import './assets/main.css'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { pt } from 'vuetify/locale'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
    },
    locale: {
        locale: 'pt',
        messages: { pt },
    },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
