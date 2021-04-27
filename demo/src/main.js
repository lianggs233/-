// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import request from '@/untils/request'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from '@/store/store'
import '@/assets/css/global.css'

/* import echarts from 'echarts' */

Vue.use(ElementUI)

/* Vue.prototype.$echarts = echarts */
Vue.prototype.$axios = request
Vue.prototype.qs = qs
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
