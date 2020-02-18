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
    meta: {
      level: 1,
      icon: 'fa fa-home',
      title: '首页'
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
      level: 1,
      icon: 'fa fa-info-circle',
      title: '关于'
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      level: 1,
      icon: 'fa fa-sign-in',
      title: '登录页'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    meta: {
      level: 1,
      icon: 'fa fa-get-pocket',
      title: '动态路由'
    },
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    meta: {
      level: 1,
      icon: 'fa fa-level-down',
      title: '一级路由'
    },
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          level: 2,
          icon: 'fa fa-level-down',
          title: '二级路由'
        },
        component: () => import('@/views/child.vue'),
        children: [
          {
            path: 'grandson',
            name: 'grandson',
            meta: {
              level: 3,
              icon: 'fa fa-level-down',
              title: '三级路由'
            },
            component: () => import('@/views/grandson.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/named_view',
    meta: {
      level: 1,
      icon: 'fa fa-street-view',
      title: '命名视图'
    },
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/main',
    meta: {
      level: 1,
      icon: 'fa fa-arrow-right',
      title: '重定向'
    },
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/store',
    name: 'store',
    meta: {
      level: 1,
      icon: 'fa fa-comments',
      title: 'vuex使用'
    },
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    meta: {
      level: 1,
      icon: 'fa fa-calculator',
      title: 'countTo组件'
    },
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    meta: {
      level: 1,
      icon: 'fa fa-window-maximize',
      title: 'splitPane组件'
    },
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    meta: {
      level: 1,
      icon: 'fa fa-pagelines',
      title: 'render渲染函数'
    },
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    meta: {
      level: 1,
      icon: 'fa fa-list-ul',
      title: 'menu组件'
    },
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/baidu-map',
    name: 'baidu_map',
    meta: {
      level: 1,
      icon: 'fa fa-map',
      title: '百度地图'
    },
    component: () => import('@/views/baidu-map.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]