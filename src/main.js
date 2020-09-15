import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import directives from './directives/index'

import Vconsole from 'vconsole'
const vConsole = new Vconsole()

Vue.use(vConsole)
Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
