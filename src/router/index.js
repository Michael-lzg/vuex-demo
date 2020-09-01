import Vue from 'vue'
// import VueRouter from 'vue-router'
import MyRouter from './myRouter'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import noFound from '../views/404.vue'

Vue.use(MyRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/404',
    component: noFound
  }
]

const router = new MyRouter({
  routes
})

export default router
