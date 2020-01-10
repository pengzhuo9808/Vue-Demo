import Home from './components/home'
import Admin from './components/admin'
import About from './components/about/about'
import Register from './components/register'
import Menu from './components/menu'
import Login from './components/login'
//二级路由
import Contact from './components/about/contact'
import Delivery from './components/about/delivery'
import History from './components/about/history'
import OrderinGuide from './components/about/orderinGuide'


export const routes=[
  {path:'/',component:Home},
  {path:'/admin',component:Admin
  //组件内守卫
  // beforeEnter:(to,from,next)=>{
  //   alert("非登录状态，不能访问该页面")
  // }
},
  {path:'/about',component:About,children:[
    {path:'/about/contact',name:'contactlink',component:Contact},
    {path:'/delivery',name:'deliverylink',component:Delivery},
    {path:'/history',name:'historylink',component:History},
    {path:'/orderinGuide',name:'orderinGuidelink',component:OrderinGuide},
  ]},
  {path:'/register',component:Register},
  {path:'/menu',component:Menu},
  {path:'/login',component:Login},
  {path:'/*',redirect:'/'}
]