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
  props: {
    whereItems: Array
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
        display: block

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
            padding-right: .7rem
</style>
