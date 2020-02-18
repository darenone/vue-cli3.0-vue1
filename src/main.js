import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus/index'
import Mock from './mock/index'
import CountTo from '_c/count-to'
import 'font-awesome/css/font-awesome.css'
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.prototype.$bus = Bus

const handleClick = (event) => {
  console.log(event)
  event.stopPropagation()
}
let list = [
  { name: 'Jack' },
  { name: 'Tom' },
  { name: 'Alex' }
]
const getLiEleArr = (h) => {
  return list.map((item, index) => {
    return h('li', {
      on: {
        'click': handleClick
      },
      key: `list_item${index}`
    }, item.name)
  })
}

new Vue({
  router,
  store,
  render: h => h(App),
  // render: (h) => {
  //   return h('div', {}, [
  //     h('ul', {
  //       on: {
  //         'click': handleClick
  //       }
  //     }, getLiEleArr(h))
  //   ])
  // }
}).$mount('#app')
