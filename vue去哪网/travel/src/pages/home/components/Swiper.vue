<!--  -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if='showSwiper'>
      <!-- slides -->
      <swiper-slide v-for='item in swiperList' :key='item.id'>
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true,
      },
      
    };
  },
  props:{
    swiperList:{
      type:Array,
    }
  },
  computed:{
    showSwiper(){
      return this.swiperList.length;
    }
  },
  name: "HomeSwiper"
};
</script>
<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff
.wrapper {
  width: 100%;
  height: 0;
  overflow:hidden;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>