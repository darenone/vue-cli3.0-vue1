import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    // else next({ name: 'login' })
    else next('/login')
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve((to, from, next) => {

// })

router.afterEach((to, from) => {
  // loading = false
})

export default router
