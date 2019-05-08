<template>
  <div class="where">
    <h2 class="where-title">周末去哪儿</h2>
    <ul class="where-list">
      <li v-for="(item,index) in whereItems" :key="index">
        <a href="javascript:;" class="where-list-one">
          <div class="list-img">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="list-info">
            <p class="list-info-name">{{item.name}}</p>
            <p class="list-info-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWhere',
  data () {
    return {
      whereItems: [
        {
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/e3/e9761259adfc1d.jpg_r_640x214_21b96532.jpg',
          name: '哈尔滨必游',
          desc: '冰雪之冠，富有异国情调的美丽都市'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/source/1603/6c/37b9116a55d226.jpg_r_640x214_b6296033.jpg',
          name: '冰城踏青',
          desc: '春光明媚，踏青赏花去处多'
        },
        {
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/91/04b59ae6faf17a.jpg_r_640x214_ce69a65a.jpg',
          name: '东方小巴黎的魅力',
          desc: '中央大街随处可见的西式文化你想探个究竟吗？来这里感受文艺复兴风格的建筑'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .where
    .where-title
      line-height: .4rem
      padding-left: .13rem

    .where-list
      width: 100%

      .where-list-one
        width: 100%
        margin-bottom .05rem
        display :block
        .list-img
          width: 100%
          height: 0
          padding-bottom: 37%

          img
            width: 100%

        .list-info
          background-color: #fff
          padding .1rem

          .list-info-name
            line-height: .24rem
            color: #212121

          .list-info-desc
            line-height: .24rem
            color: #616161
            font-size: .12rem

          .list-info-desc, .list-info-name
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            padding-right:.7rem
</style>
