import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request interceptor
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status !== 1) {
      // status === 0 错误
      let message = res.errMsg
      if (res.errCode === 401) {
        message = res.errMsg
      } else {
        console.log(message)
      }
      // 删除token，退出用户账号到登录界面
      if (res.errCode === 401) {
        console.log(res.errCode)
      }

      return Promise.reject(res)
    }
    return response.data.data
  },
  (error) => {
    console.log('服务器连接超时！')
    return Promise.reject(error)
  }
)

export default service
