import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// 接口拦截
Mock.mock('/getUserInfo', 'post', getUserInfo)

Mock.setup({
    timeout: 0
})

export default Mock