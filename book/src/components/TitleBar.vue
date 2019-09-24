<!--  -->
<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="left">
        <span class="iconfont icon">&#xe7b0;</span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="iconfont icon icon-cart">&#xe639;</span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon">&#xe622;</span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon">&#xe608;</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    props:{
        ifTitleAndMenuShow:{
            type:Boolean,
            default:false,
        }
    }
};
</script>
<style lang='scss' scoped>
@import "../../src/assets/styles/global.scss";
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
    display: flex;
    background: white;
    height: px2rem(48);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    .left {
      flex: 0 0 px2rem(60);
      @include center;
      // background:red;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        // background:green;
        .icon-cart {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>