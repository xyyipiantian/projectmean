<!--  -->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe646;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe62b;</span>
      内容
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xec70;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city'])
  }
};
</script>
<style lang='stylus' scoped>
// 1rem = html font-size = 50px
@import '~styles/varibles.styl';

.header {
  height: $headerHeight;
  display: flex;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    line-height: 0.86rem;
    height: 100%;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    line-height: 0.64rem;
    height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding:0.1rem
    float: right;
    text-align: center;
    line-height: 0.86rem;
    height: 100%;
    color:#fb6700
    .arrow-icon:margin-left:-.04rem {
      font-size: 0.24rem;
    }
  }
}
</style>