<template>
  <div class="mainPage" v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}">
    <div class="list">
      <div class="listItem">
        复制一段话 <button class="fr" v-copy="copyText">复制</button>
      </div>
      <div class="listItem">
        长按后边按钮 <button class="fr" v-longpress="longpress">长按</button>
      </div>
      <div class="listItem">过滤特殊字符 <input class="emoji fr" type="text" v-emoji /></div>
      <div class="listItem">
        按钮点击防抖{{num}} <button class="fr" v-debounce="debounceClick">防抖</button>
      </div>
      <div class="listItem">
        按钮点击不防抖{{num}} <button class="fr" @click="debounceClick">不防抖</button>
      </div>
      <div class="listItem" v-color:[interval]="color">字体颜色改变</div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyText: 'a copy directives',
      num: 0,
      color: ['black', 'red', 'blue', 'green', 'yellow', 'Pink', 'purple'],
      interval: 1000
    }
  },
  methods: {
    longpress () {
      alert('长按指令生效')
    },
    debounceClick () {
      this.num += 1
    }
  }
}
</script>
<style scoped lang="less">
.mainPage {
  height: 100%;
}
.list {
  width: 100%;
  font-size: 16px;
  .listItem {
    width: 100%;
    padding: 10px 15px;
  }
}
.fr {
  float: right;
}
.emoji{
  width: 160px;
  height: 30px;
}
</style>
