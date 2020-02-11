import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus/index'
import Mock from './mock/index'
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
