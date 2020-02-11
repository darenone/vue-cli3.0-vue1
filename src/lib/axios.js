import axios from 'axios'
import { baseURL } from '@/config/index'

// 使用es6的class创建一个类httpRequest
class httpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  // 内部配置，这里放全局的配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  // 拦截器
  interceptors (instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加请求前的控制
      // 比如，添加全局的loading...
      // Spin.show()
      // 获取queue队列里所有的属性名key
      // 如果length = 0，证明没有请求
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config // 必须写这一步，这样才能使请求继续
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // 第一个回调函数用来接收服务端返回的东西
      delete this.queue[url]
      // console.log(res)
      const { data, status } = res
      return { data, status }
      // return res
    }, error => {
      // 第二个回调函数处理请求异常的返回
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options) // 传入的配置会覆盖全局的配置
    this.interceptors(instance, options.url) // 调用拦截器
    return instance(options) // 返回axios实例
  }
}
export default httpRequest