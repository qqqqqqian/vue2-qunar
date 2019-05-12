<template>
  <ul class="ticket">
    <li v-for="(item,index) of list" :key="index">
      <span class="ticket-icon"></span>
      {{item.title}}
      <div v-if="item.children">
        <ticket :list="item.children" ></ticket>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .ticket
    li
      line-height: .44rem
      padding: 0 .2rem
      position: relative
      font-size: .16rem
      text-indent: .1rem

      .ticket-icon
        display: inline-block
        position: absolute
        width: .18rem
        height: .18rem
        top: .13rem
        left: .1rem
        background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.225rem no-repeat;
        margin-right: .05rem
        background-size: .2rem 1.5rem
</style>
