import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const miste = r => require.ensure([], () => r(require('../page/miste/miste')), 'miste')

export default [{
  path: '/',
  component: App, // 顶层路由
  children: [
    // 路由为空跳转home页
    {
      path: '',
      redirect: '/home'
    },
    // 首页城市列表页
    {
      path: '/home',
      component: home
    },
    // 登录页
    {
      path: '/login',
      component: login
    },
    {
      path: '/city/:cityId',
      component: city
    },
    // 所有商铺列表页
    {
      path: '/miste',
      component: miste,
      meta: { keepAlive: true }
    }
  ]
}]
