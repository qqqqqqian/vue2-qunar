<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="items.length">
      <!-- slides -->
      <swiper-slide v-for="item in items" :key="item.id"><img class="swiper-img" :src="item.img" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    items: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.wrapper .swiper-pagination'
        }
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  .wrapper
    width: 100%
    height: 0
    padding-bottom: 26%
    overflow: hidden

    .swiper-img
      width: 100%

    .swiper-pagination
      margin-bottom: -0.05rem
</style>
