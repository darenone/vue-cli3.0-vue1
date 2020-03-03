import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import area from './module/area'
import saveInLocal from './plugin/saveInLocal'
import saveInSession from './plugin/saveInSession'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    area
  },
  plugins: [ saveInSession ]
})
