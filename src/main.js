import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import directives from './directives/index'

Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
