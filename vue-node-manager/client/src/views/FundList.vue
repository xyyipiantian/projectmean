<!--  -->
<template>
  <div class="fillContainer">
    <div>
      <el-form :inline="true" ref="add_data" :modul='search_data'>
        <!--筛选 -->
        <el-form-item label="按照时间筛选">
          <el-date-picker
            v-model="search_data.startTime"
            type="datetime"
            placeholder="选择开始时间"
            default-time="12:00:00"
          ></el-date-picker>
          --
          <el-date-picker
            v-model="search_data.endTime"
            type="datetime"
            placeholder="选择结束时间"
            default-time="12:00:00"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type='warnning' size='small' icon='search' @click='handleSearch'>筛选</el-button>
        </el-form-item>

        <el-form-item class="btnRight">
          <el-button v-if="user.identity =='manager'" type="primary" size="samll" icon="view" @click="handleAdd">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%" v-if="tableData.length>0" border>
        <el-table-column align="center" label="序号" width="70" type="index"></el-table-column>
        <el-table-column align="center" label="创建时间" width="250" prop="date">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="收支类型" align="center" width="100"></el-table-column>
        <el-table-column prop="describe" label="收支描述" align="center" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.describe}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="incode" label="收入" align="center" width="100">
          <template slot-scope="scope">
            <span style="color:#00d053">{{ scope.row.income }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="expend" label="支出" align="center" width="100">
          <template slot-scope="scope">
            <span style="color:#f56767">{{ scope.row.expend }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cash" label="账户现金" align="center" width="100">
          <template slot-scope="scope">
            <span style="color:#4db3ff">{{ scope.row.cash }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" align="center" width="200"></el-table-column>
        <el-table-column label="操作" prop="operation" fixed="right" align="center" width="320" v-if="user.identity =='manager'">
          <template slot-scope="scope">
            <el-button
              type="warning"
              icon="edit"
              v-if="user.identity =='manager'"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="small"
              icon="delete"
              v-if="user.identity =='manager'"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页-->
      <el-row>
        <el-col :span="24">
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="paginations.page_index"
              :page-sizes="paginations.page_sizes"
              :page-size="paginations.page_size"
              :layout="paginations.layout"
              :total="paginations.total"
            ></el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
    <Dialog :dialog="dialog" :formData="formData" @update="getProfile"></Dialog>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
export default {
  name: "fundList",
  data() {
    return {
      tableData: [],
      dialog: {
        show: false,
        title: "",
        option: "edit"
      },
      formData: {},
      paginations: {
        page_index: 1, //当前在那一页
        total: 0, //总条数
        page_size: 5, //一页显示几条
        page_sizes: [5, 10, 15, 20], //每页显示几条
        layout: "total,sizes,prev,pager,next,jumper" //翻页属性
      },
      search_data:{
        startTime:'',
        endTime:''
      },
      filterTableData:[]
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      //获取表格数据
      this.$axios
        .get("/api/profiles")
        .then(res => {
          this.allTableData = res.data;
          this.filterTableData = res.data;
          //设置分页数据
          this.setPaginations();
        })
        .catch(err => console.log(err));
    },
    setPaginations() {
      //分页属性设置
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    handleEdit(index, row) {
      //编辑
      this.dialog = {
        show: true,
        option: "edit",
        title: "修改编辑信息"
      };
      this.formData = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      };
    },
    handleDelete(index, row) {
      this.$axios.delete(`/api/profiles/delete/${row._id}`).then(res => {
        this.$message({
          message: "删除成功",
          type: "danger"
        });
        this.getProfile();
      });
    },
    handleAdd() {
      this.dialog = {
        show: true,
        title: "添加资金信息",
        option: "add"
      };

      this.formData = {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      };
    },
    handleSizeChange(page_size) {
      //切换size
      this.paginations.index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },
    handleCurrentChange(page) {
      //获取当前页
      let index = this.paginations.page_size * (page - 1);
      //数据总数
      let nums = this.paginations.page_size * page;
      //容器
      let tables = [];
      for (let i = index; i < nums; i++) {
        if (this.allTableData[i]) {
          tables.push(this.allTableData[i]);
        }
        this.tableData = tables;
      }
    },
    handleSearch(){
      if(!this.search_data.startTime|| !this.search_data.endTime){
        this.$message({
          message:'请选择时间',
          type:'warning',
        });
        this.getProfile();
        return ;
      }
      const sTime = this.search_data.startTime.getTime();
      const eTime = this.search_data.endTime.getTime();

      this.allTableData = this.filterTableData.filter(item =>{
        let date = new Date(item.date);
        let time = date.getTime();
        return time >= sTime && time <= eTime;
      });

      //分页数据
      this.setPaginations();
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Dialog
  }
};
</script>
<style lang='scss' scoped>
.fillContainer {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>