<template>
    <div class="Formtable">
    <el-form size="large" inline>
        <el-form-item label="设备IMEI"  >
                <el-input :placeholder="$t('alterReport.query.deviceImeiPlaceholder')" width="80" ></el-input>
                <el-button type="primary" >选取</el-button>
        </el-form-item>
        <el-form-item>
            <el-date-picker v-model="dateRange" type="daterange" range-separator="To" :start-placeholder="$t('alterReport.query.startTimePlaceholder')" :end-placeholder="$t('alterReport.query.endTimePlaceholder')" unlink-panels />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" >搜索</el-button>
            <el-button type="primary" >重置</el-button>
        </el-form-item>
    </el-form>

    </div>
</template>

<script setup>
import { ref } from "vue";
import {getTime} from '@/api/getTime.js'
const dateRange=ref(getTime())
</script>

<style scoped lang="less">
.Formtable{
    width: 100%;
    .el-form{
        width: 80%;
      :deep .el-form-item__content{
        flex-wrap: nowrap ;
       }
       .el-input{
        margin-right:10px ;
       }
    
    }
}

</style>
