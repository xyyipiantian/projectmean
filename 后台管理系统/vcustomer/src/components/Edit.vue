<!--  -->
<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message='alert'></Alert>
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customer.graduationschool"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile">  ctrl + / 单行注释-->
          <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: "edit",
  data() {
    return {
      customer:{},
      alert:''
    };
  },
  methods: {
    addCustomer(e) {
      if (!this.customer.name || !this.customer.email || !this.customer.phone) {
        this.alert='请添加必要信息';
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        this.$http
          .put("http://localhost:3000/users/" + this.$route.params.id, newCustomer)
          .then(function(response) {
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    },
    fetchCustomer(id){
        this.$http.get('http://localhost:3000/users/'+id)
        .then(function(response){
            this.customer = response.body;
        })
    }
  },
  created(){
    this.fetchCustomer(this.$route.params.id)
  },
  components:{
      Alert
  }
};
</script>
<style lang='scss' scoped>
</style>