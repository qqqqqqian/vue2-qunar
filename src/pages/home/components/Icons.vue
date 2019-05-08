<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) of itemsList" :key="index">
        <div class="icon-item" v-for="item of items" :key="item.id">
          <img :src="item.imgSrc" alt=""/>
          <div class="icon-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    items: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.icons>.swiper-pagination'
        }
      }
    }
  },
  computed: {
    itemsList () {
      let list = []
      this.items.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!list[page]) {
          list[page] = []
        }
        list[page].push(item)
      })
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
   @import "~styles/common.styl"
  .icons >>> .swiper-pagination
    width:100%
  .icons >>> .swiper-pagination-bullet
    margin:0 4px
  .icons
    width: 100%
    height: 1.8rem
    overflow:hidden
    padding-top:.05rem
    background-color: #fff
    .icon-item
      padding-top:.05rem
      float: left
      width: 25%
      height:0.75rem
      text-align:center
      img
        width: 0.55rem
        height: 0.55rem
      .icon-desc
        font-size: .14rem
        width: 100%
        text-align: center
        margin-top:.05rem
        ellipsis()
</style>
