// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/global.css'
/* import echarts from 'echarts' */

Vue.use(ElementUI)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 配置数据格式
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
/* Vue.prototype.$echarts = echarts */
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
