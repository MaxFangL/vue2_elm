import App from '../App'
import home from '../page/home/home'

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
    }
  ]
}]
