<template>
  <div class="hot-group">
    <div class="hot-group-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span>本周热门榜单</span>
      <a href="javascript:;" class="hot-group-more">全部榜单<span class="iconfont">&#xe62e;</span></a>
    </div>
    <ul class="hot-group-list">
      <li class="hot-group-list-one" v-for="(item,index) of hotGroupItems" :key="index">
        <div class="list-tag" v-if="index<3">
          <img :src="hotTagImgs[index]" alt="" class="list-tag-img">
        </div>
        <div class="list-img-con"><img :src="item.imgSrc" alt="" class="list-img"></div>
        <div class="list-sight-name">{{item.sightName}}</div>
        <div class="list-price"><span>¥<em>{{item.price}}</em></span>起</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotGroup',
  data () {
    return {
      hotGroupItems: [
        {
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201301/09/ad6a3f8dffda8b4893835fbb.jpg_250x250_bc55b077.jpg',
          sightName: '鹤鸣湖湿地',
          price: '98'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/p0/1711/5a/5a6e547cc6cdc062a3.img.jpg_250x250_ba575130.jpg',
          sightName: '林甸北国温泉',
          price: '105'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201309/13/5b6fc335fd99f439c8d65eac.jpg_250x250_d046a14a.jpg',
          sightName: '大雁戏楼',
          price: '30'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/p0/1410/21/3d79f644ca4d4a0636ef4659c0a9ff7b.jpg_250x250_589fc9ec.jpg',
          sightName: '大庆艺术邨温泉',
          price: '105'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201403/04/d8baf0feab6e7554c04d3389a35fe570.jpg_250x250_efdd10bb.jpg',
          sightName: '连环湖温泉景区',
          price: '85'
        }
      ],
      hotTagImgs: ['http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png']
    }
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
