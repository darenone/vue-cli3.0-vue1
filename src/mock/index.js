import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// 接口拦截
Mock.mock('/getUserInfo', 'post', getUserInfo)

export default Mock