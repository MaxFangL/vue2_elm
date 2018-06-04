import axios from 'axios'

axios.defaults.baseURL = 'http://cangdu.org:8001'

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
