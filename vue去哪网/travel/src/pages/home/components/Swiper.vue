<!--  -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for='item in swiperLists' :key='item.id'>
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
      swiperLists: [
        {
          id: "001",
          imgUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/5bcf28bed6eccbb8743191fe7ebcdf32.jpg_890x330_61cf2ca3.jpg"
        },
        {
          id: "002",
          imgUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/5a8d6120fff4aa7a4c907f71e8e5ac16.jpg_890x330_fce6f14e.jpg"
        },
      ]
    };
  },
  methods: {

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
  padding-bottom: 37.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>