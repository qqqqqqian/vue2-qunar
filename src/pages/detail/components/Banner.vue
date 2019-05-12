<template>
  <div>
    <div class="img-banner" @click="handleShowGallery">
      <div class="img-wrapper">
        <img :src="bannerImg" alt="">
      </div>
      <div class="img-title">{{sightName}}</div>
      <div class="img-swipe">
        <i class="iconfont">&#xe635;</i>
        <span class="img-swipe-num">{{gallaryImgs.length}}</span>
      </div>
    </div>
    <fade>
      <gallery :imgs="gallaryImgs" v-show="isShowGallery" @closeGallery="handleShowGallery"></gallery>
    </fade>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
import fade from 'common/animation/fade/fade'

export default {
  name: 'Banner',
  props: {
    gallaryImgs: Array,
    sightName: String,
    bannerImg: String
  },
  components: {
    Gallery,
    fade
  },
  data () {
    return {
      isShowGallery: false,
      scrollTop: 0
    }
  },
  methods: {
    handleShowGallery () {
      this.isShowGallery = !this.isShowGallery
      if (this.isShowGallery) {
        this.scrollTop = document.scrollingElement.scrollTop
        document.body.classList.add('modal-open')
        document.body.style.top = -this.scrollTop + 'px'
      } else {
        document.body.classList.remove('modal-open')
        document.scrollingElement.scrollTop = this.scrollTop
      }
    }
  }
}
</script>
<style lang="stylus">
  body.modal-open
    position: fixed
    width: 100%
</style>
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
