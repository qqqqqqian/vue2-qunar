<template>
  <ul class="alphabet-wrapper">
    <li v-for="item of alphabetAry" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    alphabetAry: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .alphabet-wrapper
    color: $headerColor
    top: 0.79rem
    bottom: 0
    position: absolute
    right: 0
    width: .2rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    li
      line-height: .2rem
      width: 100%
      text-align: center
</style>
