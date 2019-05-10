<template>
  <ul class="alphabet-wrapper">
    <li
      v-for="item of alphabetAry"
      :key="item"
      :ref="item"
      @click="letterClick"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >{{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    alphabetAry: Array
  },
  updated () {
    this.aTop = this.$refs['A'][0].getBoundingClientRect().top
    this.aHeight = this.$refs['A'][0].getBoundingClientRect().height
  },
  methods: {
    letterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchstart (e) {
      this.touchStatus = true
    },
    touchmove (e) {
      if (this.moveTimer) {
        clearTimeout(this.moveTimer)
      }
      this.moveTimer = setTimeout(() => {
        if (this.touchStatus) {
          const index = Math.floor((e.changedTouches[0].clientY - this.aTop) / this.aHeight)
          if (index >= 0 && index < this.alphabetAry.length) {
            this.$emit('change', this.alphabetAry[index])
          }
        }
      }, 18)
    },
    touchend (e) {
      this.touchStatus = false
    }
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
