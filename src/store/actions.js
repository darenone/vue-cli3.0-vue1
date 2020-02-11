import { getAppName } from '@/api/app'

const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     const { code, info : { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },
  // 等价写法，采用了es6的解构赋值
  // updateAppName (paramsObj) {
  //   const commit = paramsObj.commit
  // },
  async updateAppName ({ commit }) {
    try {
      const { code, info : { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }

}
export default actions