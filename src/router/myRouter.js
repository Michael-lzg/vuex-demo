let Vue
class MyRouter {
  static install (_Vue) {
    Vue = _Vue
    Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.$options = options
    this.routeMap = {}
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  init () {
    this.bindEvents()
    this.createRouteMap()
    this.initComponent()
  }

  bindEvents () {
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)
    window.addEventListener('load', this.onHashChange.bind(this), false)
  }

  getHash () {
    return window.location.hash.slice(1) || '/'
  }

  getFromAndTo (e) {
    let from, to
    if (e.newURL) {
      from = e.oldURL.split('#')[1]
      to = e.newURL.split('#')[1]
    } else {
      from = ''
      to = this.getHash()
    }
    return { from, to }
  }

  onHashChange (e) {
    const hash = this.getHash()
    const router = this.routeMap[hash]
    const { from, to } = this.getFromAndTo(e)
    if (router.beforeEnter) {
      router.beforeEnter(from, to, () => {
        this.app.current = hash
      })
    } else {
      this.app.current = hash
    }
  }

  createRouteMap () {
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })
  }

  initComponent () {
    Vue.component('router-view', {
      render: h => {
        const component = this.routeMap[this.app.current].component
        return h(component)
      }
    })
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', {
          attrs: {
            href: '#' + this.to
          }
        }, [this.$slots.default]
        )
      }
    })
  }

  push (url) {
    // hash模式，直接赋值，如果时history模式，使用pushState
    window.location.hash = url
  }
}
export default MyRouter
