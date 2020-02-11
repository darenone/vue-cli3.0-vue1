<template>
  <div>
    <h2>vuex状态管理</h2>
    <a-input :value="inputValue" @input="handleInput"></a-input>
    <p>{{ inputValue }}</p>
    <a-input v-model="stateValue"/>
    <!-- <a-input :value="inputValue" @input="handleInput"/> -->
    <p>{{ stateValue }}</p>
    <a-show :content="inputValue"/>
    <p>appName: {{ appName }}</p>
    <p>appVersion: {{ appVersion }}</p>
    <p>userName: {{ userName }}</p>
    <p>userNameFirstLetter: {{ userNameFirstLetter }}</p>
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <div><button @click="handleChangeAppName">修改appName</button></div>
    <div><button @click="handleChangeUserName">修改userName</button></div>
    <div><button @click="AsyncChangeUserName">异步修改appName</button></div>
    <div><button @click="registerModule">动态注册模块</button></div>
    <div><button @click="moduleRegisterModule">给模块添加模块</button></div>
    <ul>
      <li v-for="(item, index) in moduleTodoList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import vuex from 'vuex'
// const mapState = vuex.mapState
export default {
  name: 'store',
  components: {
    AInput: AInput,
    AShow
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState('user', {
      userName: state => state.userName
    }),
    ...mapState({
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? state.todo.todoList : [],
      moduleTodoList: state => state.user.todo ? state.user.todo.moduleTodoList : [],
      stateValue: state => state.stateValue
    }),
    appName() {
      return this.$store.state.appName
    },
    // userName() {
    //   return this.$store.state.user.userName
    // },
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // },
    ...mapGetters([
      'appNameWithVersion'
    ]),
    ...mapGetters('user', [
      'userNameFirstLetter'
    ]),
    stateValue: {
      get() {
        return this.$store.state.stateValue
      },
      set(val) {
        this.SET_STATE_VALUE(val)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION',
      'SET_STATE_VALUE',
    ]),
    ...mapMutations('user', [
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput(val) {
      this.inputValue = val
    },
    handleStateValue(val) {
      this.SET_STATE_VALUE(val)
    },
    handleChangeAppName() {
      this.SET_APP_NAME('newAdmin')
      this.SET_APP_VERSION()
      // this.$store.commit('SET_APP_NAME', 'newAdmin')
      // this.$store.commit('SET_APP_VERSION')
    },
    handleChangeUserName() {
      this.SET_USER_NAME('I am Jack')
    },
    AsyncChangeUserName() {
      // 借助vuex的工具函数
      this.updateAppName()
      // 不借助vuex的工具函数
      // this.$store.dispatch('updateAppName')
    },
    registerModule() {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutation',
            '学习action'
          ]
        }
      })
    },
    moduleRegisterModule() {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          moduleTodoList: [
            '学习mutation',
            '学习action'
          ]
        }
      })
    }
  }
}
</script>