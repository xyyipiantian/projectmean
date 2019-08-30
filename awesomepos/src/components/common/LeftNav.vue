<!--  -->
<template>
  <div class="left-nav">
      <ul>
          <li><i class="icon iconfont icon--diangan "></i><div>收银</div></li>
          <li><i class="icon iconfont icon-miwen"></i><div>店铺</div></li>
          <li><i class="icon iconfont icon-icon_zhanghao"></i><div>商品</div></li>
          <li><i class="icon iconfont icon-renjijiaohu"></i><div>会员</div></li>
          <li><i class="icon iconfont icon-jichuguanli"></i><div>设置</div></li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'left-nav'
}

</script>
<style>
.left-nav{
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1D8CE0;
    float: left;
    width: 5%;

}
.iconfont{
    font-size: 24px;

}
.left-nav ul{
    padding: 0px;
    margin: 0px;

}
.left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #10a0ff;
    padding: 10px;
    
}

</style>