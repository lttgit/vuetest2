import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import './config/rem'
require('./style/reset.scss')
Vue.config.productionTip = false
import axios from "./plugins/axios"


//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active
import store from './plugins/store'

new Vue({
 
  render: h => h(App),
  router,store
 
}).$mount('#app')
