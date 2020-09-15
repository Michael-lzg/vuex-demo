import Vue from 'vue'
// import VueRouter from 'vue-router'
import MyRouter from './myRouter'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import noFound from '../views/404.vue'
import list from '../views/list.vue'

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
  },
  {
    path: '/list',
    component: list
  }
]

const router = new MyRouter({
  routes
})

export default router
