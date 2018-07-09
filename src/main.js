// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import './config/rem'
import axios from 'axios'
// import qs from 'qs'

// asios添加到Vue.prototype
Vue.prototype.$http = axios

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
