<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row class="row-bg">
                    <nav-top></nav-top>
                </el-row>
            </el-header>
            <el-main>
                <el-config-provider :locale="localeLang">
                    <router-view/>
                </el-config-provider>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import NavTop from '@/components/home/navtop.vue'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const {messages}=useI18n()
// Element-plus国际化
const localeLang=ref(messages.value[sessionStorage.getItem('lang')].zhCn)


</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.common-layout{
    height: 100vh;
    width: 100%;

.el-header{
    padding: 0 !important;

}
.el-main{
    padding: 10px !important;
    height: calc(100vh - 60px);
    background-color: #f4f5f9;
}
}

</style>  