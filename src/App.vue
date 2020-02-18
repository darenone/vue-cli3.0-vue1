<template>
  <div id="app">
    <div class="content">
      <div class="content-left">
         <div id="nav">
          <!-- <router-link to="/">Home</router-link>
          <router-link v-bind:to="{ name: 'about' }">About</router-link>
          <router-link v-bind:to="{ name: 'parent' }">parent</router-link>
          <router-link to="/count-to">count-to</router-link>
          <router-link :to="{ name: 'split_pane' }">split-pane</router-link>
          <router-link :to="{ name: 'render_page' }">render-page</router-link>
          <router-link :to="{ name: 'baidu_map' }">baidu-map</router-link> -->
          <a-menu>
            <template v-for="(item, index) in menuList">
              <a-menu-item v-if="!item.children" :key="`menu_item_${index}`" :uId="`menu_${item.name}_${index}`" :icon="item.icon" :path="item.path" :style="{'padding-left': `${item.level * 20}px`}">{{ item.name }}</a-menu-item>
              <re-submenu v-else :key="`menu_item_${index}`" :parent="item"></re-submenu>
            </template>
          </a-menu>
        </div>
      </div>
      <div class="content-right">
        <transition name="zongqiang">
          <router-view key="default"/>
          <router-view key="email" name="email"/>
          <router-view key="tel" name="tel"/>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import menuComponents from "_c/menu"
import ReSubmenu from '_c/menu/re-submenu.vue'
const { AMenu, AMenuItem, ASubMenu } = menuComponents
export default {
  components: {
    AMenu,
    AMenuItem,
    ASubMenu,
    ReSubmenu
  },
  data() {
    return {
      routerTransition: '',
      list: [
        {
          title: '111',
          index: 1
        },{
          title: '222',
          index: 1
        },{
          title: '333',
          index: 1,
          children: [
            {
              title: '333-1',
              index: 2
            },{
              title: '333-2',
              index: 2
            },{
              title: '333-3',
              index: 2,
              children: [
                {
                  title: '333-3-1',
                  index: 3
                },{
                  title: '333-3-2',
                  index: 3
                },{
                  title1: '333-3-3',
                  index: 3
                }
              ]
            }
          ]
        }
      ],
      menuList: [],
      menuIndex: 1,
      routerList: []
    }
  },
  methods: {
    loopFun(list, index, path) {
      let arr = []
      index++
      list.forEach(e => {
        if (e.name) {
          if (e.children) {
            console.log(e.path)
            // path += e.path
            let children = this.loopFun(e.children, index, (path + `/${e.path}`))
            arr.push({
              path: path + `/${e.path}`,
              name: e.meta.title,
              children: children,
              icon: e.meta.icon,
              level: index
            })
          } else {
            if (path) {
              arr.push({
                path: path + `/${e.path}`,
                name: e.meta.title,
                icon: e.meta.icon,
                level: index
              })
            } else {
              arr.push({
                path: e.path,
                name: e.meta.title,
                icon: e.meta.icon,
                level: index
              })
            }
          }
        }
      })
      return arr;
    },
  },
  mounted () {
    this.routerList = this.$router.options.routes
    // console.log(this.routerList)
    this.menuList = this.loopFun(this.routerList, 0, '')
    console.log(this.menuList)
  },
  watch: {
    '$route' (to) {
      // console.log(to)
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
.zongqiang-enter {
  opacity: 0;
}
.zongqiang-enter-active {
  transition: opacity 1s ease;
}
.zongqiang-enter-to {
  opacity: 1;
}
.zongqiang-leave {
  opacity: 1;
}
.zongqiang-leave-active {
  transition: opacity 0s ease;
}
.zongqiang-leave-to {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    &-left {
      width: 200px;
      height: 100%;
      // background: #42b983;
      overflow: hidden;
      overflow-y: auto;
    }
    &-right {
      flex: 1;
      background: palegoldenrod;
    }
  }
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
