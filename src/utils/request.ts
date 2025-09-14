import axios from 'axios'
import { useGlobalFeedback } from '@/stores/globalFeedback.ts'
import router from '@/router'
import { AUTHORIZATION_HEADER } from '@/utils/constants.ts'
import { useGlobalUser } from '@/stores/globalUser.ts'
const { message } = useGlobalFeedback()
const { globalUser } = useGlobalUser()

const service = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // todo if null, do not send request
    config.headers[AUTHORIZATION_HEADER] = globalUser.token
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status === 200 && res.code === '200') {
      return Promise.resolve(res)
    }
    message.error(res.message || '请求错误')
    return Promise.reject(res)
  },
  (error) => {
    const { status } = error.response
    if (status === 403 || status === 401) {
      if (router.currentRoute.value.path !== '/login') {
        router.replace('/login')
      }
      return
    }
    message.error(status || '网络错误')
    return Promise.reject(error)
  },
)

export default service
