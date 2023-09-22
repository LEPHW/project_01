<template>
    <div class="navtop">
        <el-menu :default-active="defaultPath" mode="horizontal"  router @select="defaultselect">
            <div class="leftNavtop" />
            <el-menu-item index="/MapCenter" >{{$t('home.page.head.menu.mapCenter')}}</el-menu-item>
            <el-menu-item index="/DeviceList" >{{$t('home.page.head.menu.deviceList')}}</el-menu-item>
            <el-menu-item index="/GpsReport">{{$t('home.page.head.menu.reportMain')}}</el-menu-item>
            <div class="rightNavtop">
                <span>{{$t('home.page.head.welcome')}}</span>
                <span class="userName">{{userName }}</span>
                <el-button v-if="userName !== 'experience'" type="info" @click="openChangePassword" class="button-changePass">{{$t('home.page.head.changePasswd')}}</el-button>
                <el-button type="info" @click="loginout" class="button-logout">{{$t('home.page.head.logout')}}</el-button>
            </div>
     </el-menu>
        <change-pass  ></change-pass>
    </div>
    
</template>
<script setup>
import {onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import ChangePass from './changepass.vue'
import { useStore } from 'vuex';
const router=useRouter()
const userName=ref('')
const store=useStore()
function openChangePassword(){
    store.commit('setChangArgee',true)
}
function loginout(){
    // sessionStorage.clear()
    sessionStorage.removeItem('defaultPath')
    router.push('login')
}
const defaultPath=sessionStorage.getItem('defaultPath') || '/MapCenter'
const defaultselect=(index)=>{
    sessionStorage.setItem('defaultPath',index)
}
onMounted(()=>{
    userName.value=sessionStorage.getItem('userName')
})


</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    background-color: rgb(255, 255, 255);
}
.navtop{
    width:100%;
    height:100%;

.el-menu{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        .leftNavtop{
            width: 15%;
            height: 100%;
        }
        .rightNavtop{
            position: absolute;
            right: 20px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #868585;
            font-size: 12px;
           .userName{
            color: rgb(43, 43, 43);
            font-size: 13px;
            margin-left: 5px;
           }
           .el-button{
            background-color: #fff;
            border: none;
            color: #666666;
            font-size: 12px;
            margin-left: 20px;
            background-color: rgb(214, 214, 214);
           }
           .button-logout{
            margin-left: 10px;
           }
         }
    }
}

</style>