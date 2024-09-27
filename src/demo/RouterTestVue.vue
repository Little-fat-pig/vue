<template>

  <!--  主要是测试 vue的页面跳转-->
  <el-link type="primary" @click="dddd">ceshi</el-link>


</template>

<script>

import axios from "axios";

export default {
  data() {

  },

  methods: {
    // 异步调用后端接口

    async dddd() {

      const queryParams = {
        page: 1,
        limit: 10
      };

      const response = await axios.get("/test",{params:queryParams})
      const data = response.data;
      console.log(data)
    }

  }
}

</script>


<style>

</style>