<template>
    <div class="changepassword">
        <el-dialog v-model="changArgee" :title="$t('home.page.diagTitle')" width="20%" :close-on-press-escape="false"  @close="closeForm">
            <el-form :model="changePasswordForm" :label-position="location" label-width="80px" :rules="passwordRules" ref="FormRules" >
                <el-form-item :label="$t('home.page.changePasswordForm.oldPassword')" prop="oldPassword">
                    <el-input v-model="changePasswordForm.oldPassword" type="password" clearable />
                </el-form-item>
                <el-form-item :label="$t('home.page.changePasswordForm.newPassword1')" prop="newPassword1" >
                    <el-input v-model="changePasswordForm.newPassword1"  type="password" clearable />
                </el-form-item>
                <el-form-item :label="$t('home.page.changePasswordForm.newPassword2')" prop="newPassword2">
                    <el-input v-model="changePasswordForm.newPassword2"  type="password" clearable />
                </el-form-item>
            </el-form>
            <div class="btnclass">
                <el-form-item class="btns">
                    <el-button @click="btnCancel" class="buttonOne" >{{$t('home.page.pwdBtnCancel')}}</el-button>
                    <el-button type="primary" @click="updatePassworld">{{$t('home.page.pwdBtnConfirm')}}</el-button>
                </el-form-item>
            </div>
        </el-dialog>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive ,ref} from 'vue'
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
const {t}=useI18n()
const store=useStore()
const changArgee=computed(()=>store.state.changArgee)
const location=sessionStorage.lang==="zh-CN"?'right':'top'
const FormRules=ref('')
const changePasswordForm = reactive({
    oldPassword:"",
    newPassword1:"",
    newPassword2:""
})
const passwordRules=reactive({ 
    oldPassword:[
        {required:true,message:t('home.rules.oldPassword.required'),trigger:'blur'},
        { min: 6, max: 18, message: t('login.msg.rules.password.length'), trigger: 'blur' }
    ],
    newPassword1:[
        {required:true,message:t('home.rules.newPassword1.required'),trigger:blur},
        { min: 6, max: 18, message: t('login.msg.rules.password.length'), trigger: 'blur' }
    ],
    newPassword2:[
    {required:true,message:t('home.rules.newPassword2.required'),trigger:blur},
    { min: 6, max: 18, message: t('login.msg.rules.password.length'), trigger: 'blur' }
    ]
})
const btnCancel=()=>{
    store.commit('setChangArgee',false)
}
const closeForm=()=>{
    store.commit('setChangArgee',false)
}
function updatePassworld(){
    // FormRules.value.validate(val=>{
    //     if(!val) 
    //     return     
    // })
    store.commit('setChangArgee',false)
}
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
:deep .el-dialog__header{
    background-color: rgb(67, 196, 255);
    margin: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    .el-dialog__title{
        color: #fff;
    }
}
:deep .el-dialog{
        --el-dialog-border-radius:20px !important;
        width: 20%;
    }
.buttonOne{
    margin-left: 30%;
}
</style>