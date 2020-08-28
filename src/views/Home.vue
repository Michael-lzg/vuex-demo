<template>
  <div>
    <div class="item">当前数量是{{count}} <button @click="add">增加</button></div>
    <div class="list">
      <div class="item"></div>
    </div>
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
    }
  }
}
</script>

<style lang="less" scoped>
</style>
