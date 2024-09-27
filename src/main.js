import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import axios from "axios";

import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.use(axios)
Vue.use(VueRouter)
Vue.use(router)
Vue.use(ElementUI)

new Vue({
    // 这里的顺序很重要
    router,
    render: h => h(App)
}).$mount('#app')
