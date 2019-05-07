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
  data () {
    return {
      items: [
        {
          id: '0001',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '自然风光'
        },
        {
          id: '0003',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '东北虎林园'
        },
        {
          id: '0004',
          imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
          desc: '精品小团'
        },
        {
          id: '0005',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1901/16/caa09d30b24d8302.png',
          desc: '极地馆'
        },
        {
          id: '0006',
          imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/edefc27cfe4d3b9665307d2868f2fdf2.png',
          desc: '波塞冬'
        },
        {
          id: '0007',
          imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5de9127e1b930810fc7c16876b7da113.png',
          desc: '哈尔滨融创'
        },
        {
          id: '0008',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        },
        {
          id: '0009',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '龙沙植物园'
        },
        {
          id: '0010',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐'
        }
      ],
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
