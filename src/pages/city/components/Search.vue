<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .search
    height: .3rem
    text-align: center
    background-color: $headerColor
    padding: 0 .05rem .05rem

    input
      box-sizing: border-box
      width: 100%
      height: .30rem
      text-align: center
      color: #666
      border-radius: 3px
      padding: 0 .1rem
</style>
