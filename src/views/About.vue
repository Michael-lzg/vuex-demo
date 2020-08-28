<template>
  <div>
    <div class="item">当前数量是{{getCount}} <button @click="add">增加</button></div>
    <button @click="asyncAdd1">异步操作+10</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from '../store/store'
console.log(mapGetters(['getCount']))
console.log(mapActions)
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapActions(['asyncAdd']),
    add () {
      this.$store.commit('add', 1)
    },
    asyncAdd1 () {
      setTimeout(() => {
        this.asyncAdd(10)
      }, 1000)
    }
  }
}
</script>
