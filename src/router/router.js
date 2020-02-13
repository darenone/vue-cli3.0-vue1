import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => {
      return {
        food: route.query.food
      }
    },
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') console.log('这是从登录页来的')
      else console.log('这不是从登录页来的')
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'orange'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child.vue'),
        children: [
          {
            path: 'grandson',
            name: 'grandson',
            component: () => import('@/views/grandson.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/main',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]