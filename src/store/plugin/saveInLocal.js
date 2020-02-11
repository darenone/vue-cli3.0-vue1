const saveInLocal =  store => {
  // 此函数在store初始化的时候调用，也就是实例初始化的时候调用
  // 当你刷新浏览器时第一次做的操作就定义在这里
  // 刷新浏览器执行
  console.log('store初始化了')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // store.subscribe方法，在你每次提交mutation之后，都会执行此方法里的回调函数
  store.subscribe((mutation, state) => {
    // commit mutation时执行
    console.log('提交了mutation')
    localStorage.state = JSON.stringify(state)
  })
}
export default saveInLocal