<!--  -->
<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOriderList(scope.row)">添加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量</small>
              {{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;
              <small>金额</small>
              {{totalMoney}}
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click='delAllGoods'>删除</el-button>
              <el-button type="success" @click='checkout'>结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li
                v-for="goods in oftenGoods"
                :key="goods.goodsId"
                v-on:click="addOriderList(goods)"
              >
                <span>{{goods.goodsName}}</span>
                <span class="o-price">{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li
                    v-for="goods in type0Goods"
                    :key="goods.goodsId"
                    v-on:click="addOriderList(goods)"
                  >
                    <span class="foodImg">
                      <img src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="零食">
              <div>
                <ul class="cookList">
                  <li
                    v-for="goods in type1Goods"
                    :key="goods.goodsId"
                    v-on:click="addOriderList(goods)"
                  >
                    <span class="foodImg">
                      <img src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li
                    v-for="goods in type2Goods"
                    :key="goods.goodsId"
                    v-on:click="addOriderList(goods)"
                  >
                    <span class="foodImg">
                      <img src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li
                    v-for="goods in type3Goods"
                    :key="goods.goodsId"
                    v-on:click="addOriderList(goods)"
                  >
                    <span class="foodImg">
                      <img src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    };
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods"
      )
      .then(response => {
        this.oftenGoods = response.data;
      })
      .catch(error => {
        alert("网络错误,不能访问");
      });

    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods"
      )
      .then(response => {
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      });
  },
  mounted() {
    var orderHeigth = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeigth + "px";
  },
  computed: {
    
  },
  methods: {
    addOriderList(goods) {
      //商品是否已经存在与订单中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }

      //根据判断的值编写业务逻辑
      if (isHave) {
        //改变列表中商品数量
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    delAllGoods(){
      this.tableData = [];
      this.getAllMoney();
    },
    //汇总数量金额
    getAllMoney() {
      this.totalMoney = 0;
      this.totalCount = 0;
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney += element.price * element.count;
      });
    },
    //模拟结账
    checkout(){
      if(this.tableData!=0){
        this.tableData=[];
        this.totalMoney=0;
        this.totalCount=0;
        this.$message({
          message:'结账成功,感谢你为店里做出一份贡献',
          type:"success"
        })
      }else{
        this.$message.error('没有选中商品')
      }
    }
  }
};
</script>
<style type='scss' scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
.div-btn {
  margin-top: 30px;
  text-align: center;
}
.div-btn button {
  margin-left: 30px;
  margin-right: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #f9fafc;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}
.often-goods-list ul li .o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;

  span {
    display: block;
    float: left;
  }
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.footPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  height: auto;
  overflow: hidden;
  text-align: right;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e5e9f2;
  padding: 10px;
}
</style>