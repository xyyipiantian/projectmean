<template>
  <div id="app">
    <LeftNav></LeftNav>
    <div class="main">
      <Pos></Pos>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
import LeftNav from './components/common/LeftNav'
import Pos from './components/page/Pos'
export default {
  name: 'App',
  components:{
    LeftNav,
    Pos
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
   height:100%;
}
.main{
  float: left;
  width: 95%;
  background-color: #EFF2F7;
  height: 100%;
  overflow: hidden;
}

</style>
