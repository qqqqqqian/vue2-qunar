<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeHot></HomeHot>
    <HomeLike></HomeLike>
    <HomeWhere></HomeWhere>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeHot from './components/HotGroup'
import HomeLike from './components/GuessLike'
import HomeWhere from './components/Where'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot,
    HomeLike,
    HomeWhere
  }
}
</script>
<style lang="stylus" scoped>
</style>
