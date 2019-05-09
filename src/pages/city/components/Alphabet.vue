<template>
  <ul class="alphabet-wrapper">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
  .alphabet-wrapper
    height: 100%
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
