<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'fade'
}
</script>

<style lang="stylus" scoped>
  .fade-enter-active, .fade-leave-active
    transition:all .5s
  .fade-enter, .fade-leave-to
    opacity 0
</style>
