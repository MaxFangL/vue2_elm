import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')

export default [{
  path: '/',
  component: App, // 顶层路由
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/city/:cityId',
      component: city
    }
  ]
}]
