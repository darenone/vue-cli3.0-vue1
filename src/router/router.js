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
      icon: 'home',
      title: '首页',
      path: '/'
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
      icon: 'info-circle',
      title: '关于',
      path: '/about'
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      level: 1,
      icon: 'sign-in-alt',
      title: '登录页',
      path: '/login'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    meta: {
      level: 1,
      icon: 'info-circle',
      title: '动态路由',
      path: '/argu/:name'
    },
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    meta: {
      level: 1,
      icon: 'level-down-alt',
      title: '一级路由',
      path: '/parent'
    },
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          level: 2,
          icon: 'level-down-alt',
          title: '二级路由',
          path: '/parent/child'
        },
        component: () => import('@/views/child.vue'),
        children: [
          {
            path: 'grandson',
            name: 'grandson',
            meta: {
              level: 3,
              icon: 'level-down-alt',
              title: '三级路由',
              path: '/parent/child/grandson'
            },
            component: () => import('@/views/grandson.vue')
          },{
            path: 'grandson',
            name: 'grandson',
            meta: {
              level: 3,
              icon: 'level-down-alt',
              title: '三级路由',
              path: '/parent/child/grandson'
            },
            component: () => import('@/views/grandson.vue')
          }
        ]
      },{
        path: 'child',
        name: 'child',
        meta: {
          level: 2,
          icon: 'level-down-alt',
          title: '二级路由',
          path: '/parent/child'
        },
        component: () => import('@/views/child.vue'),
      }
    ]
  },
  {
    path: '/named_view',
    meta: {
      level: 1,
      icon: 'street-view',
      title: '命名视图',
      path: '/named_view'
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
      icon: 'arrow-right',
      title: '重定向',
      path: '/main'
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
      icon: 'comments',
      title: 'vuex使用',
      path: '/store'
    },
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    meta: {
      level: 1,
      icon: '',
      title: 'countTo组件',
      path: '/count-to'
    },
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    meta: {
      level: 1,
      icon: '',
      title: 'splitPane组件',
      path: '/split-pane'
    },
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    meta: {
      level: 1,
      icon: '',
      title: 'render渲染函数',
      path: '/render-page'
    },
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    meta: {
      level: 1,
      icon: '',
      title: 'menu组件',
      path: '/menu-page'
    },
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/baidu-map',
    name: 'baidu_map',
    meta: {
      level: 1,
      icon: '',
      title: '百度地图',
      path: '/baidu-map'
    },
    component: () => import('@/views/baidu-map.vue')
  },
  {
    path: '/iview-menu',
    name: 'iview_menu',
    meta: {
      level: 1,
      icon: '',
      title: 'iview Menu',
      path: '/iview-menu'
    },
    component: () => import('@/views/iview-menu.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]