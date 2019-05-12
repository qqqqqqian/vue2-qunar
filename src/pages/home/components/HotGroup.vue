<template>
  <div class="hot-group">
    <div class="hot-group-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span>本周热门榜单</span>
      <a href="javascript:;" class="hot-group-more">全部榜单<span class="iconfont">&#xe62e;</span></a>
    </div>
    <ul class="hot-group-list">
      <router-link tag="li" :to="`/detail/${index}`" class="hot-group-list-one" v-for="(item,index) of hotGroupItems" :key="index">
        <div class="list-tag" v-if="index<3">
          <img :src="hotTagImgs[index]" alt="" class="list-tag-img">
        </div>
        <div class="list-img-con"><img :src="item.imgSrc" alt="" class="list-img"></div>
        <div class="list-sight-name">{{item.sightName}}</div>
        <div class="list-price"><span>¥<em>{{item.price}}</em></span>起</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHotGroup',
  props: {
    hotGroupItems: Array,
    hotTagImgs: Array
  }
}
</script>

<style lang="stylus" scoped>
  .hot-group
    margin-top: .1rem
    width: 100%
    background-color: #fff

    .hot-group-title
      padding: .12rem 0 .13rem
      position: relative

      img
        width: 0.15rem
        vertical-align: text-top
        margin-left: .1rem

      span
        font-size: .16rem
        line-height: .22rem

      .hot-group-more
        position: absolute
        right: .16rem

    .hot-group-list
      padding: 0 .12rem
      white-space: nowrap
      overflow-x: scroll

      .hot-group-list-one
        &:not(:first-child)
          margin-left: .06rem
        width: 1rem
        display: inline-block
        padding: .03rem 0 .1rem
        position: relative

        .list-sight-name
          text-align: center
          margin-top: .06rem
          font-size: .12rem
          line-height: .16rem

        .list-price
          text-align: center
          font-size: .12rem
          color: #616161
          line-height: .16rem

          span
            color: #ff8300

            em
              font-size: .14rem

        .list-tag
          width: .42rem
          height: .2rem
          position: absolute
          z-index: 1
          top: 0

          .list-tag-img
            width: 100%

        .list-img-con
          width: 1rem
          height: 0
          padding-bottom: 100%
          overflow: hidden

          .list-img
            width: 100%
</style>
