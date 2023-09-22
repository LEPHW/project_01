<template>
    <div class="DeviceList">
        <el-form :model="formInline" class="demo-form-inline" size="large" :inline="true">
            <el-row>
                <el-col :span="4">
                    <el-form-item :label="$t('device.deviceImei')">
                        <el-input v-model="formInline.deviceImei" :placeholder="$t('devicePage.deviceImeiPlaceholder')" clearable /> 
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item :label="$t('device.nickname')">
                        <el-input v-model="formInline.nikeName" :placeholder="$t('devicePage.deviceNamePlaceholder')" clearable />
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary" @click="seachList">{{$t('common.search')}}</el-button>
                        <el-button type="warning" @click="ReseachList">{{$t('common.reset')}}</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary">{{$t('common.add')}}</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            
        </el-form>
        <el-table :data="deviceList" border stripe style="width: 100%"  >
            <el-table-column align="center" header-align="center" type="index" :label="t('common.sn')" fixed></el-table-column>
            <el-table-column align="left" header-align="center" prop="deviceImei" :label="t('device.deviceImei')" fixed column-key></el-table-column>
            <el-table-column align="center" header-align="center" prop="deviceName" :label="t('device.nickname')" ></el-table-column>
            <el-table-column align="left" header-align="center" prop="iccid" label="ICCID" width="105px;"></el-table-column>
            <el-table-column align="center" header-align="center" prop="deviceType" :label="t('device.deviceType')"></el-table-column>
            <el-table-column align="left" header-align="center" :label="t('device.onlineStatus')"  ></el-table-column>
            <el-table-column align="center" header-align="center" prop="lastLongitude" :label="t('device.lastLongitude')" width="130" ></el-table-column>
            <el-table-column align="center" header-align="center" prop="lastLatitude" :label="t('device.lastLatitude')" width="130"></el-table-column>
            <el-table-column align="center" header-align="center" prop="lastLocationTime" :label="t('device.lastLocationTime')" width="150"></el-table-column>
            <el-table-column align="left" header-align="center" prop="lastLocationType" :label="t('device.lastLocationType')"></el-table-column>
            <el-table-column align="left" header-align="center" prop="lastSpeed" :label="t('device.lastSpeed')"></el-table-column>
            <el-table-column align="left" header-align="center" prop="lastPositionDesc" :label="t('device.lastPositionDesc')"></el-table-column>
            <el-table-column align="center" header-align="center" prop="expireDate" :label="t('device.expireDate')" ></el-table-column>
            <el-table-column align="left" header-align="center" prop="deviceRemark" :label="t('device.deviceRemark')" width="500"></el-table-column>
        </el-table>
            <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="pageSizes"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout=" jumper,total, sizes, prev, pager, next"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            />
    </div>
</template>
<script setup>

import { computed, onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import {listGpsDevice} from '@/request/DeviceList/devicelist.js'
const {locale,t}=useI18n()
console.log('locale',locale);
console.log('t',t);
const deviceList=ref([])
const deviceListpy=ref([])
// 生命周期函数,组件挂载前调用
onBeforeMount(async()=>{
  const res=await listGpsDevice()
  deviceList.value=res.data.data
  deviceListpy.value=res.data.data
})
const formInline = ref({
    deviceImei: "",
    nikeName: "",
})
const seachList=()=>{
    const IMEI=deviceList.value.filter((data)=> !formInline.value.deviceImei || data.deviceImei.toLowerCase().includes(formInline.value.deviceImei.toLowerCase()))
    const Name=IMEI.filter((data)=>!formInline.value.nikeName || data.deviceName.toLowerCase().includes(formInline.value.nikeName.toLowerCase()))
    if(!Name.length){
        ElNotification({
            title: t('device.searchShow'),
            message: t('device.searchShowMess'),
            type: 'warning',
            position:'bottom-right',
            duration:1000,
            'show-close':false
        })
        deviceList.value=deviceListpy.value
        formInline.value={
            deviceImei: "",
            nikeName: "",
        }
        return 
    }
    deviceList.value=Name
    
}
const ReseachList=()=>{
    formInline.value={
        deviceImei: "",
        nikeName: "",
    }
    deviceList.value=deviceListpy.value
}
const currentPage=ref(1) //当前页数
const pageSize=ref(10)   //每页显示条目个数
const pageSizes=[10,15,20,25]   //每页显示个数选择器的选项设置
const small=ref(false)  //是否使用小型分页样式
const disabled=ref(false) //是否禁用分页
const background=ref(false) //是否为分页按钮添加背景色
const total=computed(()=>deviceList.value.length)  //总条目数
//page-size 改变时触发
const handleSizeChange=()=>{
    console.log('page-size 改变时触发');
}
//current-page 改变时触发
const handleCurrentChange=()=>{
    console.log('current-page 改变时触发');
}
//用户点击上一页按钮改变当前页时触发
const prevClick=()=>{
    console.log('prev-click','用户点击上一页按钮改变当前页时触发');
}
//用户点击下一页按钮改变当前页时触发
const nextClick=()=>{
    console.log('next-click','用户点击下一页按钮改变当前页时触发');
}
</script> 
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.DeviceList{
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  display:flex;
  flex-direction: column;
}
.el-table__header{
  flex: 1;
}
.el-table{
font-size: 10px;
}
.el-pagination{
    margin-top:20px;
    justify-content: flex-end;
}
</style>