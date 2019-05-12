<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-ticket :list="categoryList"></detail-ticket>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailTicket from './components/Ticket'
import Axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      lastId: -1
    }
  },
  methods: {
    getData (res) {
      if (res.data.ret) {
        const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailTicket
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      Axios.get('/static/mock/detail.json?' + this.$route.params.id).then(this.getData)
      this.lastId = this.$route.params.id
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    Axios.get('/static/mock/detail.json?' + this.$route.params.id).then(this.getData)
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
