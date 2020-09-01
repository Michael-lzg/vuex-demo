<template>
  <div>
    <div class="item">首页当前数量是{{count}} <button @click="add">增加</button></div>
    <button @click="asyncAdd">异步操作+10</button>
    <button @click="to404">去404</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    count () {
      return this.$store.getters.getCount
    }
  },
  methods: {
    add () {
      this.$store.commit('add', 1)
    },
    asyncAdd () {
      setTimeout(() => {
        this.$store.dispatch('asyncAdd', 10)
      }, 1000)
    },
    to404 () {
      this.$router.push('/404')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
