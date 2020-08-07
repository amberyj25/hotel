// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index.js'
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
