<!--  -->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link 
      tag='li'
      class="item" 
      v-for='item in recommendList' 
      :key='item.id'
      :to="'/detail/'+ item.id">
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">详细情况</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommendList:{
      type:Array
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  outline: 0.1rem solid rgba(0, 0, 0, 0.01);

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width:0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.2rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
    }
  }
}
</style>