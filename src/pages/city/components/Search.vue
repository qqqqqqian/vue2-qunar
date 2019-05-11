<template>
  <div>
    <div class="search">
      <input v-model="inputCon" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-result" v-show="inputCon.length">
      <ul>
        <li class="search-result-item" v-for="item of result" :key="item.id" @click="changeCity(item.name)">
          {{item.name}}
        </li>
        <li class="search-result-item" v-show="hasResult && inputStatus">查询不到数据哦~</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      inputCon: '',
      inputTimer: 0,
      result: [],
      inputStatus: false
    }
  },
  mounted () {
    this.resultScroll = new BScroll('.search-result')
  },
  watch: {
    inputCon () {
      this.inputStatus = false
      if (!this.inputTimer) {
        clearTimeout(this.inputTimer)
      }
      if (!this.inputCon) {
        this.result = []
        return
      }
      this.inputTimer = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach((item) => {
            if (item.spell.indexOf(this.inputCon) > -1 || item.name.indexOf(this.inputCon) > -1) {
              result.push(item)
            }
          })
        }
        this.result = result
        this.inputStatus = true
      }, 100)
    }
  },
  methods: {
    changeCity (city) {
      this.changeStateCity(city)
      this.$router.push('/')
    },
    ...mapMutations({
      changeStateCity: 'changeCity'
    })
  },
  computed: {
    hasResult () {
      return !this.result.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .search-result
    position: absolute
    top: .79rem
    bottom: 0
    left: 0
    right: 0
    overflow: hidden
    background-color: #eee
    z-index: 1

    .search-result-item
      line-height: .2rem
      padding: .05rem
      background-color: #fff

  .search
    height: .3rem
    text-align: center
    background-color: $headerColor
    padding: 0 .05rem .05rem

    input
      box-sizing: border-box
      width: 100%
      height: .30rem
      text-align: center
      color: #666
      border-radius: 3px
      padding: 0 .1rem
</style>
