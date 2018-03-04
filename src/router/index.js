import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
