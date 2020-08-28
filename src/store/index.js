import Vue from 'vue'
import Vuex from './store'

Vue.use(Vuex)

const state = {
  count: 0,
  list: []
}
const getters = {
  getCount (state) {
    return state.count
  },
  getList (state) {
    return state.list.filter(item => {
      return item.age > 18
    })
  }
}
const mutations = {
  add (state, payload) {
    state.count += payload
  },
  setList (state, payload) {
    state.list = payload
  }
}
const actions = {
  asyncAdd (context, payload) {
    context.commit('add', payload)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
