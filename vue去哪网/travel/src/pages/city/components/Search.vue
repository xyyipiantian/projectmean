<!--  -->
<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show='keyword'>
      <ul>
        <li class="search-item border-bottom" 
        v-for="item in list" 
        :key="item.id"
        @click='handleCityClick(item.name)'>{{item.name}}</li>
        <li class='search-item border-bottom' v-show='hasNoData'>没有查找到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  props: {
    cities: Object
  },
  computed:{
      hasNoData(){
          return !this.list.length
      }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
      } else {
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (
                value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 100);
      }
    }
  },
  methods:{
    handleCityClick(city){
      // this.$store.state.city = city
      this.changeCity(city);
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    padding: 0 0.1rem;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
    outline: 0.02rem solid #ccc;
  }
}
</style>