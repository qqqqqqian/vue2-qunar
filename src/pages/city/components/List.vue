<template>
  <div class="list" ref="wrapper">
    <div>
      <h2 class="h2-title">您的位置</h2>
      <ul class="loc">
        <li class="city border-right">
          <a href="">北京</a>
        </li>
      </ul>
      <h2 class="h2-title">热门城市</h2>
      <ul class="hot-loc">
        <div class="middle-border border-rightleft"></div>
        <li class="city border-bottom" v-for="item in hotCities" :key="item.id">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
      <div v-for="(value,key) in cities" :key="key">
        <h2 class="h2-title" :ref="key">{{key}}</h2>
        <ul class="hot-loc tr4">
          <div class="left-border border-rightleft"></div>
          <div class="right-border border-right"></div>
          <li class="city border-bottom" v-for="item in value" :key="item.id">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'List',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter (text) {
      this.scroll.scrollToElement(this.$refs[text][0])
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl";
  .border-bottom, .border-right
    &:before
      border-color: #ddd

  .border-rightleft
    &:after
      border-color: #ddd

    &:before
      border-color: #ddd

  .list
    position: absolute
    top: .79rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden

    .hot-loc.tr4
      .city
        width: 25%

    .hot-loc
      .middle-border
        position: absolute
        content: ' '
        top: 0
        left: 33.3%
        width: 33.3%
        height: 100%

      .left-border
        position: absolute
        content: ' '
        top: 0
        left: 25%
        width: 25%
        height: 100%

      .right-border
        position: absolute
        content: ' '
        top: 0
        left: 50%
        width: 25%
        height: 100%

    .loc, .hot-loc
      width: 100%
      overflow: hidden
      background-color: #fff
      position: relative

      .city
        width: 33.3%
        float: left
        height: .45rem
        text-align center
        line-height: .45rem
        color: #212121
        margin-bottom: -1px
        ellipsis()

</style>
