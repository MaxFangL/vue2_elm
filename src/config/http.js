import axios from 'axios'
import QS from 'qs'

axios.defaults.timeout = 10000
axios.defaults.baseURL = ''

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // do something
    return config
  }, error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => Promise.resolve(error.response)
)

export default {
  checkStatus = response => {
    // 这里可以做 loading hide 处理
    if (response.status === 200 || response.status === 304) {
      return response.data
    }
    // 服务器错误处理 (可以引入第三方 Message 组件)
    console.log('服务器错误，错误状态码为' + response.status)
    return {
      code: response.status,
      message: response.statusText,
      data: response.statusText
    }
  },
  checkCode = res => {
    if (res.code !== 'success') {
      console.log('后端错误，错误状态码为：' + res.code)
    }
    return res
  },
  post = (url, data) => {
    !(data instanceof FormData) && (data = QS.stringify(data))
    return axios({
      method: 'post',
      url,
      data: QS.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  
  get = (url, params) => {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}