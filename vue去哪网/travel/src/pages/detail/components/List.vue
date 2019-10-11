<!--  -->
<template>
  <div>
      <div 
      class="item"
      v-for='(item,index) in list'
      :key='index'>
        <div class="item-title">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <div v-if='item.children' class="item-children">
            <DetailList :list='item.children'></DetailList>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list:{
            type:Array,
        }
    }
}

</script>
<style lang='stylus' scoped>
.item-title-icon
    position:relative
    top:0.06rem
    left:0.06rem
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url(http://ss.qunarzz.com/package_b2c_frontend/shop/rank-2016v1.png) -422px -16px no-repeat;
.item-title
    line-height:.8rem
    hieght: 0.8rem
    font-size:.32rem
    padding:0.2rem
.item-children
    padding: 0 .6rem
</style>