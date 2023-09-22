<template>
    <div class="GpsReport">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/tripReport" router>
        <div class="titlename">
            {{$t('reportMain.gpsReport')}}
        </div>
        <template v-for="item in GpsList" :key="item.index" >
            <el-menu-item :index="item.path" >
                <span>{{item.name}}</span>
            </el-menu-item>
        </template>
      </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </div>
</template>
<script setup>
  import { useI18n } from "vue-i18n";
  const {t}=useI18n()
  const GpsList=[
    {name:t('reportMain.odometerItem'),path:"/tripReport"},
    {name:t('reportMain.alterItem'),path:"/warmReport"},
    {name:t('reportMain.overSpeedItem'),path:"/speedReport"},
    {name:t('reportMain.bikeItem'),path:"/bycarReport"},
    {name:t('reportMain.historyItem'),path:"/historyReport"},
    {name:t('reportMain.stopItem'),path:"/stopcarReport"}
  ]
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.GpsReport{
    width: 100%;
    height: 100%;
    .titlename{
        height: 56px;
        line-height: 56px;
        padding-left: 15%;
        background-color: #79bafa;
        color: white;
        font-size: 14px;
    }
    .el-menu-item{
        justify-content: center;
    }
   .el-menu-item.is-active{
        color:#409eff ;
        background-color: #e3effb;
    }
}
</style>