import Vue from 'vue'
import VueRouter from 'vue-router'
import Raisecom from '../views/Raisecom.vue'

Vue.use(VueRouter)

  const routes = [
	{
		path: '/',
		redirect: '/raisecom'
	},
  {
    path: '/raisecom',
    name: 'Raisecom',
    component: Raisecom
  },
  {
    path: '/greenway',
    name: 'Greenway',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Greenway.vue')
  },
  {
    path: '/tailong',
    name: 'Tailong',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tailong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
