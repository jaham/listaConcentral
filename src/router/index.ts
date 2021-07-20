import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
// import MantContactos from '../views/MantContactos'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
/*   {
    path: '/',
    name: 'Edit',
    component: MantContactos
  }, */
  {
    path: '/nuevo/:codigo?',
    name: 'nuevo',
    component: () => import('../views/MantenimuentoContatosV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
