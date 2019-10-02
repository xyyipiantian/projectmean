<!--  -->
<template>
  <div id="Home">
    <home-header></home-header>
    <HomeSwiper :swiperList='swiperList'></HomeSwiper>
    <HomeIcon :iconList='iconList'></HomeIcon>
    <HomeRecommend :recommendList='recommendList'></HomeRecommend>
    <HomeWeekend :weekendList='weekendList'></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcon from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      topIcon: [],
      itemList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>