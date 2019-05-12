<template>
  <div>
    <div class="img-banner" @click="handleShowGallery">
      <div class="img-wrapper">
        <img src="//img1.qunarzz.com/sight/p0/1711/5a/5a6e547cc6cdc062a3.img.jpg_600x330_6af8fbe1.jpg" alt="">
      </div>
      <div class="img-title">林甸北国温泉(AAAA景区)</div>
      <div class="img-swipe">
        <i class="iconfont">&#xe635;</i>
        <span class="img-swipe-num">22</span>
      </div>
    </div>
    <gallery :imgs="imgs" v-show="isShowGallery" @closeGallery="handleShowGallery"></gallery>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  components: {
    Gallery
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1711/5a/5a6e547cc6cdc062a3.img.jpg_r_800x800_d50774ef.jpg',
        'http://img1.qunarzz.com/sight/p0/1711/18/180a5a57a88356d6a3.img.jpg_r_800x800_7387c376.jpg',
        'http://img1.qunarzz.com/sight/p0/1711/85/8542ecd9d13a6479a3.img.jpg_r_800x800_ab8fcc99.jpg'],
      isShowGallery: false
    }
  },
  methods: {
    handleShowGallery () {
      this.isShowGallery = !this.isShowGallery
    }
  }
}
</script>

<style lang="stylus" scoped>
  .img-banner
    &:after
      content: ""
      position: absolute
      left: 0
      right: 0
      bottom: 0
      min-height: .3rem
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
    color: #fff
    position: relative

    .img-wrapper
      height: 0
      width: 100%
      padding-bottom: 55%

      img
        width: 100%

    .img-title
      position: absolute
      left: .1rem
      right: .1rem
      bottom: 0.18rem
      font-size: .18rem
      z-index: 1

    .img-swipe
      position: absolute
      bottom: .43rem
      left: .1rem
      width: .6rem
      height: .2rem
      background-color: rgba(0, 0, 0, 0.5)
      border-radius: .1rem
      text-align: center
      font-size: .12rem
</style>
