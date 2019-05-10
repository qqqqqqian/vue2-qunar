<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :alphabetAry="alphabetAry" @change="letterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import Axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getData ({ data }) {
      if (data.ret && data.data) {
        const res = data.data
        this.hotCities = res.hotCities
        this.cities = res.cities
      }
    },
    letterChange (text) {
      this.letter = text
    }
  },
  computed: {
    alphabetAry () {
      const tempAry = []
      for (let key in this.cities) {
        tempAry.push(key)
      }
      return tempAry
    }
  },
  created () {
    Axios.get('/static/mock/city.json').then(this.getData)
  }
}
</script>

<style lang="stylus" scoped>
</style>
