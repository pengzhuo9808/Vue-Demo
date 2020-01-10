
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes'
import { isBuffer } from 'util';

Vue.use(VueRouter)
Vue.use(VueAxios,axios)

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedposition){
    // return {x:0,y:100,}
    // return{selector:'.btn'}
    if(savedposition){
      return savedposition
    }else{
      return {x:0,y:0,}
    }
  }
})



// 全局守卫
// router.beforeEach((to, from, next) => {
//   // alert("还没有登录，请先登录");
//   // next();
//   //判断store.gettes.inLogin==false
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login')
//   }
// })

// 后置钩子
// router.afterEach( (to,from) => {
//   alert("after each")
// })


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
