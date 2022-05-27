import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '@/components/HomeVue'
import AdVue from '@/components/Ads/AdVue'
import AddList from '@/components/Ads/AddList'
import NewAd from '@/components/Ads/NewAd'
import LoginVue from '@/components/Auth/LoginVue'
import RegistrationVue from '@/components/Auth/RegistrationVue'
import OrdersVue from '@/components/User/OrdersVue'
import CatalogVue from '@/components/CatalogVue'
import CartVue from '@/components/CartVue'
import FavoritesVue from '@/components/FVue'
import ProductVue  from "../components/ProductVue"

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/ad/:id',
      props: true,
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
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogVue
    },
    {
      path: '/cart/:id',
      props: true,
      name: 'cart',
      component: CartVue
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesVue
    },
    {
      path: '/product/:id',
      props: true,
      name: 'product',
      component: ProductVue
    },
  ],
  mode: 'history'
})