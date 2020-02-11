<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png"><br/>
    <img :src="url">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>{{ food }}</p>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到child</button>
    <button @click="handleClick('replace')">替换到child</button>
    <button @click="getUserInfo">请求接口getUserInfo</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  data() {
    return {
      url: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    /* 在这里，当前组件还没有渲染完成，这里是获取不到当前组件的this实例的 */
    console.log(to.name)
    next(vm => {
      // console.log(vm)
    })
  },
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('你确定要离开吗？您的编辑将不被保存')
  //   if (leave) next()
  //   else next(false)
  // },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back();
      else if (type === 'push') {
        // this.$router.push('/parent/child');
        this.$router.push({
          name: 'child',
          params: {
            name: 'Tom'
          }
        })
      }
      else if (type === 'replace') {
        this.$router.replace({
          name: 'child'
        })
      }
    },
    getUserInfo () {
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res', res.data)
        this.url = res.data.img
      })
    }
  }
}
</script>
