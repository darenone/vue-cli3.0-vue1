import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    // name: 'home',
    component: Layout,
    props: route => {
      return {
        food: route.query.food
      }
    },
    meta: {
      level: 1,
      icon: 'home',
      name: 'home',
      title: '首页',
      path: '/'
    },
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') console.log('这是从登录页来的')
      else console.log('这不是从登录页来的')
      next()
    },
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue')
      },
    ]
  },
  {
    path: '/about',
    // name: 'about-page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    props: {
      food: 'orange'
    },
    meta: {
      level: 1,
      icon: 'info-circle',
      name: 'about',
      title: '关于',
      path: '/about'
    },
    // redirect: '/about/index',
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
    ]
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
    path: '/argu',
    // name: 'argu',
    meta: {
      level: 1,
      icon: 'info-circle',
      name: 'argu',
      title: '动态路由',
      path: '/argu'
    },
    component: Layout,
    props: true,
    // redirect: '/argu/index',
    children: [
      {
        path: '',
        component: () => import('@/views/argu.vue')
      },
    ]
  },
  {
    path: '/parent',
    // name: 'parent',
    meta: {
      name: 'parent',
      title: '嵌套路由',
      path: '/parent'
    },
    component: Layout,
    children: [
      {
        path: '',
        name: 'parent',
        meta: {
          name: 'parent',
          title: '一级路由',
          path: '/parent'
        },
        component: () => import('@/views/parent.vue'),
        children: [
          {
            path: 'child',
            name: 'child',
            meta: {
              name: 'child',
              title: '二级路由',
              path: '/parent/child'
            },
            component: () => import('@/views/child.vue'),
            children: [
              {
                path: 'grandson',
                name: 'grandson',
                meta: {
                  name: 'child',
                  title: '三级路由',
                  path: '/parent/child/grandson'
                },
                component: () => import('@/views/grandson.vue')
              }
            ]
          }
        ]
      }
    ]
  },
  // {
  //   path: '/parent',
  //   name: 'parent',
  //   meta: {
  //     level: 1,
  //     icon: 'level-down-alt',
  //     title: '一级路由',
  //     path: '/parent'
  //   },
  //   component: () => import('@/views/parent.vue'),
  //   children: [
  //     {
  //       path: 'child',
  //       name: 'child',
  //       meta: {
  //         level: 2,
  //         icon: 'level-down-alt',
  //         title: '二级路由',
  //         path: '/parent/child'
  //       },
  //       component: () => import('@/views/child.vue'),
  //       children: [
  //         {
  //           path: 'grandson',
  //           name: 'grandson',
  //           meta: {
  //             level: 3,
  //             icon: 'level-down-alt',
  //             title: '三级路由',
  //             path: '/parent/child/grandson'
  //           },
  //           component: () => import('@/views/grandson.vue')
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/named_view',
    // name: 'named_view',
    meta: {
      level: 1,
      icon: 'street-view',
      name: 'named_view',
      title: '命名视图',
      path: '/named_view'
    },
    component: Layout,
    children: [
      {
        path: '',
        components: {
          default: () => import('@/views/parent.vue'),
          email: () => import('@/views/email.vue'),
          tel: () => import('@/views/tel.vue'),
        }
      }
    ]
  },
  {
    path: '/main',
    // name: 'redirect',
    meta: {
      level: 1,
      icon: 'arrow-right',
      name: 'redirect',
      title: '重定向',
      path: '/main'
    },
    component: Layout,
    children: [
      {
        path: '',
        redirect: to => {
          return {
            name: ''
          }
        }
      }
    ]
  },
  {
    path: '/store',
    // name: 'store',
    meta: {
      level: 1,
      icon: 'comments',
      name: 'store',
      title: 'vuex使用',
      path: '/store'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/store.vue')
      }
    ]
  },
  {
    path: '/count-to',
    // name: 'count_to',
    meta: {
      level: 1,
      icon: '',
      name: 'count_to',
      title: 'countTo组件',
      path: '/count-to'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/count-to.vue')
      }
    ]
  },
  {
    path: '/split-pane',
    // name: 'split_pane',
    meta: {
      level: 1,
      icon: '',
      name: 'split_pane',
      title: 'splitPane组件',
      path: '/split-pane'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/split-pane.vue')
      }
    ]
  },
  {
    path: '/render-page',
    // name: 'render_page',
    meta: {
      level: 1,
      icon: '',
      name: 'render_page',
      title: 'render渲染函数',
      path: '/render-page'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/render-page.vue')
      }
    ]
  },
  {
    path: '/menu-page',
    // name: 'menu_page',
    meta: {
      level: 1,
      icon: '',
      name: 'menu_page',
      title: 'menu组件',
      path: '/menu-page'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/menu-page.vue')
      }
    ]
  },
  {
    path: '/baidu-map',
    // name: 'baidu_map',
    meta: {
      level: 1,
      icon: '',
      name: 'baidu_map',
      title: '百度地图',
      path: '/baidu-map'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/baidu-map.vue')
      }
    ]
  },
  {
    path: '/iview-menu',
    // name: 'iview_menu',
    meta: {
      level: 1,
      icon: '',
      name: 'iview_menu',
      title: 'iview Menu',
      path: '/iview-menu'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/iview-menu.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]