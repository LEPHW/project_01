<template>
    <div class="loginIo">
        <el-form label-width="20px" :rules="baseRules" :model="loginForm" ref="loginFormRef" :scroll-to-error="true">
            <div style="margin-left:20px ;">
                <el-radio-group v-model="loginForm.loginMode" @change="changeUser" >
                    <el-radio label="userName" size="large">{{ $t('login.loginMode.userName') }}</el-radio>
                    <el-radio label="deviceImei" size="large">{{ $t('login.loginMode.deviceImei') }}</el-radio>
                </el-radio-group>
            </div>
            <el-form-item prop="userName" :show-message="true">
                <el-input v-model.trim="loginForm.userName" autocomplete="off" :prefix-icon="prefixIcon" clearable
                    style="width: 230px"  />
            </el-form-item>
            <el-form-item prop="password" :show-message="true">
                <el-input v-model.trim="loginForm.password" type="password" autocomplete="off" :prefix-icon="Lock" clearable
                    style="width: 230px"/>
            </el-form-item>
            <el-form-item >
                <el-select v-model="loginForm.lang" @change="changeLanguage" >
                    <el-option v-for="item in langList" :key="item.key" :value="item.key" :label="item.label" />
                </el-select>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="loginSub" >{{ $t('login.btn.login') }}</el-button>
                <el-button type="success" @click="experience" >{{ $t('login.btn.experience') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>
<script setup>
// 引入element组件icon图标
import { Lock, UserFilled, MapLocation } from '@element-plus/icons-vue'
import { computed, shallowRef,ref, onMounted, reactive } from 'vue'
import { guid } from '@/api/cookie'
import { loginUser ,deviceLogin,experienceLogin} from '@/request/loginIo/loginIo.js'
import { useI18n } from "vue-i18n";
import { useStore } from 'vuex';
import router from '@/router';
const prefixIcon = shallowRef(UserFilled)
const { locale, t} = useI18n();
const store = useStore()
const loginForm = reactive({
    userName: '',
    password: '',
    loginMode: 'userName',
    lang: 'zh-CN',
})

const loginFormRef = ref('')
const langList = [
    { key: 'zh-CN', label: '中文' },
    { key: 'en-US', label: 'English' }
]

const baseRules = computed(() => ({
    userName: [
        { required: true, message: t('login.msg.rules.userName.required'), trigger: 'blur' },
        { min: 4, max: 12, message: t('login.msg.rules.userName.length'), trigger: 'blur' }
    ],
    password: [
        { required: true, message: t('login.msg.rules.password.required'), trigger: 'blur' },
        { min: 6, max: 18, message: t('login.msg.rules.password.length'), trigger: 'blur' }
    ]
}))
onMounted(()=>{
    loginForm.lang=sessionStorage.getItem('lang') || navigator.language
    //因改变了select的值，会自动触发表单验证，需要清除表单验证
    //resetFields 重置该表单项，将其值重置为初始值，并移除校验结果
    //因为挂载后默认表单没有数据，所以直接使用resetFields即可
    loginFormRef.value.resetFields()
    loginForm.userName=sessionStorage.getItem('userName') || ''
    loginForm.password=sessionStorage.getItem('password') || ''
    locale.value=sessionStorage.getItem('lang') || navigator.language
})
function changeUser() {
    prefixIcon.value = loginForm.loginMode === 'userName' ? UserFilled : MapLocation
}
function changeLanguage() {
    //select选中后会自动触发表单验证，需要对该表单项清除对应字段的表单验证信息，移除校验结果
    // 以下清除select选择后自动触发效验的方法，应该是对表单的每一项都进行清理表单验证，此项不会删除表单输入的数据
    // clearValidate 清理某个字段的表单验证信息。
    loginFormRef.value.validate( valid =>{
        if (!valid)
        loginFormRef.value.clearValidate()
    })
    locale.value = loginForm.lang
}
function showMes(message,type){
  return    ElNotification({
    title: type,
    message: t(message),
    type: type,
    position:'bottom-right',
    duration:1000,
    'show-close':false
  })


//   ElMessage({
//                 dangerouslyUseHTMLString: true,
//                 message: t(message),
//                 type: type,
//                 grouping:true,
//                 duration:1000,     
//     }) 
}
async function usernameLogin(){
    const res = await loginUser(loginForm)
            if (res.data.code === 3011 ) {
                loginForm.password=''
                loginFormRef.value.scrollToField()
                return showMes('login.msg.login.passMsg','error')
            }
            else if (res.data.code === 3001 ) {
                loginForm.password=''
                return showMes('login.msg.login.userMsg','error')
            }      
            showMes('login.msg.login.success','success')
            sessionStorage.setItem('lang', loginForm.lang) 
            sessionStorage.setItem('token', res.data.data[0].token) 
            sessionStorage.setItem('userId', res.data.data[0].userId)
            sessionStorage.setItem('userName', res.data.data[0].userName)
            store.commit('setUserInfo', res.data.data[0])
            store.commit('setToken', res.data.data[0].token)    
            router.push('/home')  
}
async function useidLogin(){
    const res = await deviceLogin(loginForm)
    if (res.data.code === 3011 ) {
                loginForm.password=''
                loginFormRef.value.scrollToField()
                return showMes('login.msg.login.passMsg','error')
        }
     else if (res.data.code === 3001 ) {
             loginForm.password=''
            return showMes('login.msg.login.userMsg','error')
        }    
        showMes('login.msg.login.success','success')
        sessionStorage.setItem('lang', loginForm.lang) 
        sessionStorage.setItem('token', 'emptyToken')
        sessionStorage.setItem('userId', res.data.data[0][0].deviceId)
        sessionStorage.setItem('userName', res.data.data[0][0].deviceImei)
        sessionStorage.setItem('selfCustomerId', res.data.data[0][0].customerId)
        sessionStorage.setItem('selfDeptId', res.data.data[0][0].deptId)
        sessionStorage.setItem('device', JSON.stringify(res.data.data[0][0]))
        store.commit('setUserInfo', res.data.data[0][0])
        store.commit('setToken', 'emptyToken')
        router.push('/home')
}
// 用户密码登录验证
function loginSub() {
    // 表单预验证
    // valid: bool类型
    // 表单的内置与验证功能，验证成功valid返回true，否则false,若为false直接return出去
    store.commit('setLang', loginForm.lang)
    loginFormRef.value.validate( valid => {
        if (!valid) return false
        const session = guid()
        sessionStorage.setItem('session', session)
        if (loginForm.loginMode === 'userName') 
        {    
            usernameLogin(loginForm)
        }
        else {
            useidLogin()
        }
        
})}
// 用户体验登录
async function experience(){
    const session = guid()
    store.commit('setLang', loginForm.lang)
    sessionStorage.setItem('lang', loginForm.lang) 
    sessionStorage.setItem('session', session)
    const res=await experienceLogin()
    console.log(res);
    if (res.data.code >= 2000 && res.data.code < 3000) {
    return router.push({ path: '/login' })
    }
    if (res.data.code !== 0) {
          return  showMes('login.msg.login.userMsg','error')
    }
        sessionStorage.setItem('token', res.data.data[0].token)
        sessionStorage.setItem('userId', res.data.data[0].userId)
        sessionStorage.setItem('userName', res.data.data[0].userName)
        sessionStorage.setItem('selfCustomerId', res.data.data[0].customerId)
        sessionStorage.setItem('selfDeptId', res.data.data[0].deptId)
        store.commit('setUserInfo', res.data.data[0])
        store.commit('setToken', res.data.data[0].token)
        showMes('login.msg.login.success','success')
        router.push('/home') 
}
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.loginIo {
    // height: 250px;
    width: 280px;
    position: absolute;
    top: 0;
    right: 140px;
    z-index: 999;
    border-radius: 0 0 10px 10px;
    border-top: 1px solid #1a7582;
    background-color: #1a7582;
    padding: 15px !important;

    .el-radio-group {
        .el-radio {
            color: #fff;
        }
    }
}

</style>




