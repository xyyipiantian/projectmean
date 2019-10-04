<!--  -->
<template>
  <div class="container">
      <div class="wapper">
          <swiper >
      <!-- slides -->
      <swiper-slide >
        <img
          class="gallary-img"
          src=""
        />
      </swiper-slide>
    </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name:'CommonGallary'
}

</script>
<style lang='stylus' scoped>
.container
    display:flex
    flex-direction:column
    justify-content:center
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
        overflow:hidden
        height:0
        width:100%
        padding-bottom:100%
        .gallary-img
            width:100%

</style>