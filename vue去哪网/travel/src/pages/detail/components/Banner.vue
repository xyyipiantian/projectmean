<!--  -->
<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62b;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <CommonGallary :imgs='imgs' v-show='showGallay' @close='handleGallayClose'></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array,
  },
  data(){
    return{
      showGallay:false,
      imgs:['https://tse3-mm.cn.bing.net/th?id=OIP.rSHgPSQxnVyNM6mH3JC5kAAAAA&w=248&h=177&c=7&o=5&dpr=1.25&pid=1.7',
      'https://tse3-mm.cn.bing.net/th?id=OIP.QIOWQnwZNRAsuPVQaoQiwAHaE8&w=258&h=172&c=7&o=5&dpr=1.25&pid=1.7'],
    }
  },
  components: {
    CommonGallary
  },
  methods:{
    handleBannerClick(){
      this.showGallay = true
    },
    handleGallayClose(){
      this.showGallay = false
    }
  }
};
</script>
<style lang='stylus' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 31%;
  background: green;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>