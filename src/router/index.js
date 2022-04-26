import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '@/components/HomeVue'
import AdVue from '@/components/Ads/AdVue'
import AddList from '@/components/Ads/AddList'
import NewAd from '@/components/Ads/NewAd'
import LoginVue from '@/components/Auth/LoginVue'
import RegistrationVue from '@/components/Auth/RegistrationVue'
import OrdersVue from '@/components/User/OrdersVue'


Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/ad',
      name: 'ad',
      component: AdVue
    },
    {
      path: '/list',
      name: 'list',
      component: AddList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/registrator',
      name: 'reg',
      component: RegistrationVue
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersVue
    },
  ],
  mode: 'history'
})