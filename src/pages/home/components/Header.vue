<template>
  <div class="header">
    <div class="headerLeft"><i class="iconfont">&#xe624;</i></div>
    <div class="headerInput"><i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题</div>
    <router-link to="/city">
    <div class="headerRight">{{this.city}}<i class="iconfont">&#xe62d;</i></div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .header
    display:flex
    justify-content: center
    align-items: center
    height:.44rem
    width: 100%
    background-color: $headerColor
    font-size:.14rem
    color:#fff
    .headerLeft
      width:.4rem
      float:left
      line-height:.44rem
      text-align:center
    .headerRight
      min-width:.78rem
      float:right
      line-height:.44rem
      text-align:center
      color: #FFF
    .headerInput
      padding-left:.05rem
      flex:1
      line-height:.3rem
      height:.3rem
      background-color: #fff
      border-radius:.05rem
      color:#e4e7ea
</style>
