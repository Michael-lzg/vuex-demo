let Vue

class Store {
  constructor(options) {
    // 同样对vue强依赖 使用vue实现响应数据的更新
    this.state = new Vue({
      data: options.state,
    })
    // this.state = options.state
    this.mutations = options.mutations
    this.actions = options.actions

    options.getters && this.handleGetters(options.getters)
  }

  //为什么没有定义到构造器内部？因为每个实例可以公用这些方法
  // 为mutations actions getters为每个实例化单独享有的

  // 声明为箭头函数，why？为了直接可以使用this.mutations,this.state
  commit = (type, arg) => {
    this.mutations[type](this.state, arg)
  }

  dispatch (type, arg) {
    this.actions[type](
      {
        commit: this.commit,
        state: this.state,
      },
      arg
    )
  }
  // getters为参数 而this.getters是实例化的
  handleGetters (getters) {
    this.getters = {}
    // 遍历getters所有key
    Object.keys(getters).forEach((key) => {
      // 为this.getters定义若干属性，这些属性是只读的
      // $store.getters.score
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        },
      })
    })
  }
}

function install (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default { Store, install }
