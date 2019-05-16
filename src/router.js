import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      name: 'goods',
      path: '/goods',
      component: resolve => require(['./components/goods/goods'],resolve)
    },
    {
      name: 'ratings',
      path: '/ratings',
      component: resolve => require(['./components/ratings/ratings'],resolve)
    },
    {
      name: 'seller',
      path: '/seller',
      component: resolve => require(['./components/seller/seller'],resolve)
    }
  ]
})
