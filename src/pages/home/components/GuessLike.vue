<template>
  <div class="like-group">
    <div class="like-group-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </div>
    <ul class="like-group-list">
      <li class="like-group-list-one border-bottom" v-for="(item,index) in GuessItems" :key="index">
        <div class="list-img-con">
          <div v-if="item.tag" class="list-tag-img"
               :style="{backgroundImage:item.tag==='可订明日' ? `url(${tagBgImgs[1]})`: `url(${tagBgImgs[0]})`}">{{item.tag}}
          </div>
          <img :src="item.imgSrc" alt=""
               class="list-img">
        </div>
        <div class="list-info">
          <div class="list-sight-name">{{item.sightName}}</div>
          <div class="list-sight-comment">
            <div class="list-star">
              <strong class="list-star-level iconfont"
                      :style="{width:item.score/5*100 + '%'}">&#xe60a;&#xe60a;&#xe60a;&#xe60a;&#xe60a;</strong>
              <div class="list-star-bg iconfont">&#xe60a;&#xe60a;&#xe60a;&#xe60a;&#xe60a;</div>
            </div>
            <div class="list-comment-num">{{item.commentNum}}条评论</div>
          </div>
          <div class="list-price">
            <span>¥<em>{{item.price}}</em></span>起
            <div class="list-price-address">{{item.address}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeGuessLike',
  props: {
    GuessItems: Array,
    tagBgImgs: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .like-group
    margin-top: .1rem
    width: 100%
    background-color: #fff

    .like-group-title
      padding: .12rem 0 .13rem
      position: relative

      img
        width: 0.15rem
        vertical-align: text-top
        margin-left: .1rem

      .hot-group-more
        position: absolute
        right: .16rem

    .like-group-list
      margin-left: .12rem

      .like-group-list-one
        width: 100%
        padding: .1rem 0
        overflow: hidden
        position: relative

        .list-info
          overflow: hidden
          padding-left: .11rem

          .list-price
            margin-top: .11rem
            line-height: .2rem
            position: relative
            color: #616161
            font-size: .12rem

            .list-price-address
              position: absolute
              right: .1rem
              bottom: 0

            span
              color: #ff8300

              em
                font-size: .2rem

          .list-sight-name
            font-size: .16rem
            line-height: .22rem
            height: .22rem
            color: #212121
            margin-top: .13rem
            ellipsis()

          .list-sight-comment
            height: .17rem
            margin-top: .07rem

            .list-comment-num
              color: #616161
              font-size: .12rem
              display: inline-block
              vertical-align text-top

            .list-star
              position: relative
              width: 0.7rem
              line-height: .17rem
              display: inline-block
              height: .17rem

              .list-star-level
                color: #ffb436
                position: absolute
                z-index: 1
                overflow: hidden
                font-size: .14rem

              .list-star-bg
                position: absolute
                font-size: .14rem
                color: #e0e0e0

        .list-img-con
          width: 1rem
          height: 1rem
          float: left

          .list-img
            width: 100%

          .list-tag-img
            width: 0.51rem
            height: 0.19rem
            background-size: 100%
            font-size: .1rem
            line-height: 0.19rem
            color: #fff
            position: absolute
            left: 0
            top: .1rem
            text-indent: .02rem

  /*.list-price*/
  /*text-align: center*/
  /*font-size: .12rem*/
  /*color: #616161*/
  /*line-height: .16rem*/
  /*span*/
  /*color: #ff8300*/
  /*em*/
  /*font-size: .14rem*/

  /*.list-img*/
  /*width: 100%*/
</style>
