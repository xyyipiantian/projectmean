<!--  -->
<template>
  <div class='header'>
      城市选择
    <router-link to='/'>
        <div class="iconfont back-icon">&#xe646;</div>
    </router-link>
  </div>
</template>

<script>
export default {
    name:'CityHeader'
}

</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header 
    overflow:hidden
    height:$headerHeight
    line-height:$headerHeight
    text-align:center
    color:#fff
    background:$bgColor
    position:relative
    .back-icon
        position:absolute;
        top:0;
        left:0.2rem;
        font-size:.4rem;
        color:#fff
</style>