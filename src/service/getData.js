import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'https://elm.cangdu.org'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
/**
 * 获取首页默认地址
*/
export const cityGuess = () => axios('/v1/cities?type=guess')

/**
 * 获取首页热门城市地址
 */
export const hotCity = () => axios('/v1/cities', {
  params: {
    type: 'hot'
  }
})

/**
 * 获取首页所有城市地址
 */
export const groupCity = () => axios('/v1/cities', {
  params: {
    type: 'group'
  }
})

/**
 * 获取短信验证码
 */
export const getCaptchas = () => axios.post('/v1/captchas')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => axios.post('/v2/login', qs.stringify({
  username: username,
  password: password,
  captcha_code: captcha_code
})
).then(res => res.data)
