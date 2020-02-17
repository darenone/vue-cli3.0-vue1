<template>
  <div id="app">
    <div class="content">
      <div class="content-left">
         <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link v-bind:to="{ name: 'about' }">About</router-link>
          <router-link v-bind:to="{ name: 'parent' }">parent</router-link>
          <router-link to="/count-to">count-to</router-link>
          <router-link :to="{ name: 'split_pane' }">split-pane</router-link>
          <router-link :to="{ name: 'render_page' }">render-page</router-link>
          <router-link :to="{ name: 'baidu_map' }">baidu-map</router-link>
        </div>
      </div>
      <div class="content-right">
        <transition-group :name="routerTransition">
          <router-view key="default"/>
          <router-view key="email" name="email"/>
          <router-view key="tel" name="tel"/>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTransition: '',
      list: [
        {
          title: '111'
        },{
          title: '222'
        },{
          title: '333',
          children: [
            {
              title: '333-1'
            },{
              title: '333-2'
            },{
              title: '333-3',
              children: [
                {
                  title: '333-3-1'
                },{
                  title: '333-3-2'
                },{
                  title1: '333-3-3'
                }
              ]
            }
          ]
        }
      ],
      routerList: []
    }
  },
  methods: {
    loopFun(list) {
      let arr = []
      list.forEach(e => {
        if (e.title) {
          if (e.children) {
            let children = this.loopFun(e.children)
            arr.push({
              path: '',
              name: e.title,
              children: children
            })
          } else {
            arr.push({
              path: '',
              name: e.title
            })
          }
        }
      })
      return arr;
    },
    handleRouter (list) {
      let arr = []
      list.forEach(element => {
        if (element.title) {
          if (!element.children) {
            arr.push({
              path: '',
              name: element.title
            })
          } else {
            console.log(this.loopFun(element.children))
          }
        }
      })
    }
  },
  mounted () {
    // console.log(this.$router.options.routes)
    let arr10 = []
    console.log(this.loopFun(this.list))
    this.$router.options.rout
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
  transition: opacity 1s ease;
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
      background: #42b983;
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
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
