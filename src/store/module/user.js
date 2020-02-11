const state = {
  userName: 'Tom'
}
const getters = {
  userNameFirstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // 在当前actions里调用另外一个action
    // dispatch('updateUserName1')
  },
  updateUserName1 ({ commit, state, rootState, dispatch }) {

  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
}