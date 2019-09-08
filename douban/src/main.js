// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入axios

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(ElementUI);

//引入mock模拟数据

require("./mock")

//引入jQuery

import $ from 'jquery'

Vue.config.productionTip = false

// 自定义全局指令,需写在new vue之前
// Vue.directive("focus", {inserted(el){
//   el.focus()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

