// define entry point for application

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import libraries
import Vue from 'vue'
import VueMaterial from 'vue-material'

import App from './App'
import router from './router'

// import Vue Material styles
import 'vue-material/dist/vue-material.css'

// inject Vue Material
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
