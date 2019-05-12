<template>
  <div class="gallery-bg" @click="handleCloseGallery">
    <div class="gallery-swiper-wrapper">
      <swiper :options="swiperOption" ref="mySwiper" style="height:100%">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <div class="swiper-img"
               :style="'background-image:url('+item+')'"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.gallery-bg .swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleCloseGallery () {
      this.$emit('closeGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery-bg
    position: fixed
    z-index: 2
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    background-color: black

    .gallery-swiper-wrapper
      height: 100%
      width: 100%

      .swiper-img
        height: 100%
        background-size: contain
        background-position: center
        background-repeat: no-repeat

      .swiper-pagination
        bottom: .2rem
        color: #fff
        line-height: .4rem
</style>
