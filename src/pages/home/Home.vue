<template>
  <div>
    <home-header></home-header>
    <HomeSwiper :items="swiperList"></HomeSwiper>
    <HomeIcons :items="iconList"></HomeIcons>
    <HomeHot :hotGroupItems="groupList.hotGroupItems" :hotTagImgs="groupList.hotTagImgsList"></HomeHot>
    <HomeLike :GuessItems="guessLikeList.GuessItemsList" :tagBgImgs="guessLikeList.tagBgImgsList"></HomeLike>
    <HomeWhere :whereItems="whereItemsList"></HomeWhere>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/HotGroup'
import HomeLike from './components/GuessLike'
import HomeWhere from './components/Where'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot,
    HomeLike,
    HomeWhere
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      groupList: {},
      guessLikeList: {},
      whereItemsList: [],
      lastCity: ''
    }
  },
  methods: {
    getRes (res) {
      if (res.data.ret) {
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.groupList = data.groupList
        this.guessLikeList = data.guessLikeList
        this.whereItemsList = data.whereItemsList
      }
    },
    getIndexJson () {
      axios.get('api/index.json?' + this.lastCity).then(this.getRes)
    }
  },
  created () {
    this.lastCity = this.city
    this.getIndexJson()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getIndexJson()
      this.lastCity = this.city
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
