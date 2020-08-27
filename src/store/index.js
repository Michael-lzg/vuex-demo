import Vue from 'vue'
import Vuex from './store'

Vue.use(Vuex)

const state = {
  count: 0
}
const getters = {
  tagList (state) {
    return state.count
  },
}
const mutations = {
  add (state, payload) {
    state.count += payload
  }
}
const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
