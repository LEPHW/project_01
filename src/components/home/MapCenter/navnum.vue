<template>
     <div class="tag">
          <el-row class="row-bg" justify="space-around">
            <el-col :span="6" class="tag1"
              ><h4>
            {{ t('welcome.page.left.deviceTotal') }} {{ totalDev }}
              </h4></el-col
            >
            <el-col :span="6" class="tag2"
              ><h4>{{t('welcome.page.left.deviceOffline')}}{{ offlineDev}}</h4></el-col
            >
            <el-col :span="6" class="tag3"
              ><h4>{{t('welcome.page.left.deviceOnline') }}{{onlineDev}}</h4></el-col
            >
            <el-col :span="6" class="tag4"
              ><h4>{{t('welcome.page.left.deviceRun')}}{{ runDev}}</h4></el-col
            >
          </el-row>
        </div>
</template>
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
const {t}=useI18n()
const store=useStore()

const AllNum=computed(()=>{
  return store.state.AllNum
})
const totalDev=computed(()=>{
    let allnum=0
    if(AllNum.value.length){
        allnum=AllNum.value.length
    }
    return  allnum +''
})
const offlineDev=computed(()=>{
    let offline = 0
      if ( AllNum.value.length > 0) {
        for (let i = 0; i < AllNum.value.length; i++) {
          offline++
        }
    }
    return  offline +''
})
const onlineDev=computed(()=>{
    let online = 0
      if ( AllNum.value.length > 0) {
        for (let i = 0; i <  AllNum.value.length; i++) {
          if ( AllNum.value[i].onlineStatus && ( AllNum.value[i].lastMotionStatus === null || AllNum.value[i].lastMotionStatus === 0)) {
            online++
          }
        }
      }
      return  online + ''
})
const runDev=computed(()=>{
    let run = 0
      if ( AllNum.value.length > 0) {
        for (let i = 0; i <  AllNum.value.length; i++) {
          if (AllNum.value[i].onlineStatus && AllNum.value[i].lastMotionStatus === 1) {
            run++
          }
        }
      }
      return run+''
})
</script>

<style scoped lang="less">
.tag {
    margin: 20px 0;
    .el-col {
      text-align: center;
      font-size: 8px;
      font-weight: 900;
    }
    .tag2 {
      color: #fcd949;
    }
    .tag3 {
      color: #ff0000;
    }
    .tag4 {
      color: #008000;
    }
  }
</style>
