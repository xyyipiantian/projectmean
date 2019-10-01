<!--  -->
<template>
  <div id='Home'>
      <home-header></home-header>
      <HomeSwiper></HomeSwiper>
      <HomeIcon></HomeIcon>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
export default {
  name: "Home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
  }
};
</script>
<style lang='scss' scoped>
</style>