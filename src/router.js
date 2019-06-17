import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/gallery/:id',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
   
    }
  ]
})
