import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus/index'
import Mock from './mock/index'
import CountTo from '_c/count-to'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import { Button, Table } from 'iview'
// Vue.component('Button', Button)
Vue.use(iView)

library.add(fas, far, fab)

if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.prototype.$bus = Bus


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

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
