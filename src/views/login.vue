<template>
    <div class="login">
        <el-container>
            <el-header></el-header>
            <el-main>
                <baidu-map></baidu-map>
                <login-io></login-io>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>
<script setup>
import BaiduMap from '@/components/loginMap/baiduMap'
import LoginIo from '@/components/loginIo/loginIo.vue'
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.login{
    height: 100vh;
    width: 100%;
    .el-container{
            height: 100vh !important;
            width: 100%;
            .el-header{
                height:8% !important;
                background-color:#1a7582 !important;
            }
            .el-footer{
                height:8% !important;
                background-color:#1a7582 !important;
            }
            .el-main{
                height: 84% !important;
                padding: 0 !important;
                position: relative;
            }
     }
}

</style>
