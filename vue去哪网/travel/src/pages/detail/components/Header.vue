<!--  -->
<template>
  <div class='header'>
    <router-link tag="div" to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe646;</div>
    </router-link>
    <div class="header-fixed">
      <div>
        景点详情
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe646;</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader"
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-fixed 
    height:$headerHeight
    line-height:$headerHeight
    text-align:center
    color:#fff
    background:$bgColor
    position:fixed
    top:0
    right:0
    left:0
    .header-fixed-back
        position:absolute;
        top:0;
        left:0.2rem;
        font-size:.4rem;
        color:#fff
</style>