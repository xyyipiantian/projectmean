<!--  -->
<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">大连上帝撒旦和</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62b;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallary></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
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