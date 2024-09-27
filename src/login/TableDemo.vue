<template>
  <div class="topBox">

    <div class="secondBox">
      <span>邮箱</span>
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      <span>验证码</span>
      <el-input v-model="checkCode" placeholder="请输入验证码">验证码</el-input>
      <span>密码</span>
      <el-input v-model="password" placeholder="请输入密码" show-password>密码</el-input>
      <span>确认密码</span>
      <el-input v-model="password2" placeholder="请再次输入密码" show-password>确认密码</el-input>
<!--      <el-input v-model="code" placeholder="请输入验证码"></el-input>-->
      <span>获取验证码</span>
      <button @click="loginQuery"><span>获取验证码</span></button>

    </div>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 800px">
        <el-table-column prop="date" label="日期" width="180">
          <template slot-scope="{row}"> {{ row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
          <template slot-scope="{row}"> {{ row.name }}</template>
        </el-table-column>
        <el-table-column prop="{row}" label="地址">
          <template slot-scope="{row}"> {{ row.address }}</template>
        </el-table-column>
      </el-table>
    </div>

  </div>


</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        , {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }

}

</script>


<style>

.topBox{
  width: 100%;
  height: 100%;
}

.secondBox{
  //width: 100px;
  height: 50px;
  display: flex;
  gap: 10px;

}

.el-input {

}


</style>