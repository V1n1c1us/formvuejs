import Vue from 'vue'
import App from './App'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JQuery from 'jquery'

import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(JQuery)
Vue.use(VueTheMask)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
