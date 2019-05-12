<template>
  <div>
    <router-link tag="div" to="/" class="header-back" v-show="taggleHeader">
      <i class="iconfont">&#xe624;</i>
    </router-link>
    <div class="header-fix" v-show="!taggleHeader" :style="headerStyle">
      <router-link to="/">
        <i class="iconfont return">&#xe624;</i>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      taggleHeader: true,
      headerStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 40) {
        this.headerStyle.opacity = scrollTop / 140 > 1 ? 1 : scrollTop / 140
        this.taggleHeader = false
      } else {
        this.taggleHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .header-fix
    line-height: .44rem
    text-align: center
    font-size: .16rem
    background-color: $headerColor
    color: #fff
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index 2

    .return
      position: absolute
      left: 0
      top: 0
      line-height: 0.44rem
      width: 0.4rem
      color: #fff

  .header-back
    position: absolute
    top: .05rem
    left: .05rem
    height: .36rem
    width: .36rem
    background-color: rgba(0, 0, 0, 0.5)
    border-radius: 50%
    line-height .36rem

    i
      color: #ffffff
      width: 100%
      height: 100%
      display: inline-block
      text-align center
      vertical-algin: middle
</style>
