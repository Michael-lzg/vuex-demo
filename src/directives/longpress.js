const vLongpress = { // 名字爱取啥取啥
  /*
    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
    el: 作用的 dom 对象
    value: 传给指令的值，也就是我们要 copy 的值
  */
  bind: function (el, binding, vNode) {
    // 确保提供的表达式是函数
    if (typeof binding.value !== 'function') {
      // 获取组件名称
      const compName = vNode.context.name
      // 将警告传递给控制台
      let warn = `[longpress:] provided expression '${binding.expression}' is not afunction, but has to be `
      if (compName) { warn += `Found in component '${compName}' ` }
      console.warn(warn)
    }
    // 定义变量
    let pressTimer = null
    // 定义函数处理程序
    // 创建计时器（ 1秒后执行函数 ）
    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler()
        }, 2000)
      }
    }
    // 取消计时器
    let cancel = (e) => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法
      binding.value(e)
    }
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  }
  // // 当传进来的值更新的时候触发
  // componentUpdated (el, { value }) {
  //   el.$value = value
  // },
  // // 指令与元素解绑的时候，移除事件绑定
  // unbind (el) {
  //   el.removeEventListener('click', el.handler)
  // }
}

export default vLongpress
