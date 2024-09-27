<template>
    <div class="out">
        <div class="table">
            <!--    <button @click="handleBackButton">dakjdja</button>-->
            <el-table :data="tableData" style="width: 800px">
                <el-table-column prop="date" label="日期" width="180">
                    <template slot-scope="{row}"> {{row.date}}</template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                    <template slot-scope="{row}"> {{row.name}}</template>
                </el-table-column>
                <el-table-column prop="{row}" label="地址">
                    <template slot-scope="{row}"> {{row.address}}</template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import About from "@/view/About";

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
        },
        name: "Home",
        component: About
        // mounted: {
        //     window.addEventListener('popstate', this.handleBackButton)
        // },
        // methods: {
        //     handleBackButton() {
        //         console.log('返回上一层')
        //     },
        //     beforeDestroy() {
        //         window.removeEventListener('popstate', this.handleBackButton)
        //     },
        //     goBack() {
        //         // 回退到上一级目录
        //         this.$router.go(-1);
        //     },
        //     goToHome() {
        //         // 回到首页
        //         this.$router.push('/');
        //     }
        //
        // }
    }
</script>

<style scoped>
    .out {
        width: 100%;
        height: 700px;
    }

    .table {
        margin-left: 600px;
        margin-top: 200px;
        text-align: center;
    }
</style>