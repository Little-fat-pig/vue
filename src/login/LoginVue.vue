<template>
  <div class="widowsBackGroup">

    <div class="loginId">
      <el-image class="imageTip" v-bind:src="url"></el-image>
      <div class="input">
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        <div class="checkCodeInput">
          <el-input v-model="checkCode" placeholder="请输入验证码"></el-input>
          <button @click="loginQuery"><span>获取验证码</span></button>
        </div>

        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>

        <el-input v-model="password2" placeholder="请再次输入密码" show-password></el-input>
        <el-input v-model="code" placeholder="请输入验证码"></el-input>
      </div>
      <el-button class="login" type="success" @click="loginQuery">登录/注册</el-button>
    </div>

    <div class="tipBut">
      <el-link type="primary" @click="getPassWord">忘记密码?</el-link>
    </div>

  </div>

</template>

<script>
import about from "../view/About.vue";

import tableDemo from "./TableDemo.vue";

import axios from "axios";


export default {
  data() {
    return {
      email: '',
      password: '',
      checkCode: '',
      password2: '',

      code: 0,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  name: "loginVue",
  components: about, tableDemo
  ,
  methods: {

    //需要使用异步方式

    async loginQuery() {
      console.log(this.$data.url)
      const queryParams = {
        test: this.email,
        uuid: this.password
      }
      //这里直接写接口，就行  不用加套接字

      const response = await axios.get('/api/v1/async/test1',
          {
            params: queryParams
          }
      );

      const test = response.data;
      console.log(JSON.stringify(test))

      // 提取数据
      const {code, message, data} = response.data;
      console.log('获取到后端的code')
      console.log(code)
      // 检查响应码
      if (code === '0') {
        console.log('获取到后端的数据')
        console.log(message)
        // 数据处理
        console.log('处理后端的数据')
        console.log(JSON.stringify(data, null, 2));

        this.error = null;
      }
      const testName = JSON.stringify(response)
      console.log(testName);

      //跳转页面的同时,将当前页面的参数  携带到新的页面中
      this.$router.push({name: "about", query: {id: 123, name: 'ssss'}})

      //第二种方式
      // this.$router.push({name: "about", query: {data: response}})
      //调用后端接口，实现登录的功能
      // axios.post('http://10.192.19.122:8096/api/v1/async/test',{
      //
      //     }
      //
      // )
    },
    // 找回密码跳转页面
    getPassWord() {
      console.log('看监控机房监控手段')
      this.$router.push("/tableDemo")

    }
  }
}

</script>


<style>
.widowsBackGroup {
  width: 100%;
  height: 100%;
}

.imageTip {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.loginId {
  width: 300px;
  height: 400px;
  margin: 15px auto;

}

.input {

  margin-bottom: 5px;
}

.checkCodeInput{
  display: flex;
  gap: 8px;

}

.login {
  width: 300px;
  background-color: green;
}

.tipBut {
  width: 300px;
  text-align: left;
  margin: 0 auto;
}

.el-input .el-input__inner {
  margin: 5px 0 5px 0;
}
</style>
<!--所有的input标签都可以设置统一的样式   这样input标签就不挨着了-->