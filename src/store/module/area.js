const state = {
    selectedName: null,
    drillLink: ['中国']
}
const getters = {
    areaType: (state) => {
        let reg = /\((.+?)\)/g // 匹配小括号
        return reg.exec(name)[1]
    },
    areaCode: (state) => {
        let reg = /\[(.+?)\]/g // 匹配中括号
        return reg.exec(name)[1]
    },
    areaName: (state) => {
        let reg = /\{(.+?)\}/g // 匹配大括号
        return reg.exec(name)[1]
    }
}
const mutations = {
    SET_SELECTED_NAME (state, params) {
      state.selectedName = params
    },
    SET_DRILL_LINK (state, name) {
        state.drillLink.push(name)
    }
}
const actions = {
    updateSelectedName ({ commit, state, rootState, dispatch }) {
        // 在当前actions里调用另外一个action
        // dispatch('updateUserName1')
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