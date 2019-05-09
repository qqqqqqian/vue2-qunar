<template>
  <div class="header">
    <router-link to="/">
      <i class="iconfont return">&#xe624;</i>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .header
    line-height: .44rem
    text-align: center
    font-size: .16rem
    background-color: $headerColor
    color: #fff
    position: relative
    .return
      position: absolute
      left: 0
      top: 0
      line-height: 0.44rem
      width: 0.4rem
      color: #fff
</style>
