import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import store from "./store/store.js";

//mdi
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify, {iconfont: 'mdi'}).use(router).use(store).mount('#app')