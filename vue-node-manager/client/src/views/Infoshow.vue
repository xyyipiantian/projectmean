<!--  -->
<template>
  <div class="infoshow">
      <el-row type='flex' class="row-bg" justify="center">
          <el-col :span='8'>
              <div class="user">
                 <img src="https://img2.woyaogexing.com/2019/08/28/8c9518fbbf1b40a18ca1f6b50b4bcf14!600x600.jpeg" alt=""> 
                 <span>照片</span>
              </div>
          </el-col>
          <el-col :span='16'>
              <div class="userinfo">
                  <div class="user-item">
                      <div>{{user.name}} </div>
                      <div>{{user.identity=='manager'?"管理员":'普通员工'}}</div>
                  </div>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:'infoshow',
    computed:{
        user(){
            return this.$store.getters.user;
        }
    }
}

</script>
<style lang='scss' scoped>
.infoshow{
    width:100%;
    height:100%;
    overflow: hidden;
    box-sizing: border-box;
}
.row-bg{
    width:100%;
    height: 100%;
}
.user{
    text-align: center;
    position: relative;
    top:30%;
}
.user img{
    width:150px;
    border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  padding: 50px;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
  div{
      margin-top: 50px;
  }
}
</style>