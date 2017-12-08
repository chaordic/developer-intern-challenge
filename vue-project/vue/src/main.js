import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import { api } from './plugins/api'
import { store } from './store/store'
import App from './App'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

// Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(api)

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
