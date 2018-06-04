import App from '../App'
import home from '../page/home/home'
import login from '../page/login/login'

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
    }
  ]
}]
