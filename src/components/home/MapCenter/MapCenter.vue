<template>
  <div class="MapCenter">

    <el-container>
      <el-aside>
        <nav-num ></nav-num>
        <el-input
          v-model="searchInput"
          class="Search"
          size="large"
          :placeholder="$t('welcome.page.left.searchPlaceholder')"
          :prefix-icon="Search"
          clearable
          @input="inputQuery"
        />
        <el-tabs v-model="asideName">
          <el-tab-pane :label="$t('welcome.page.left.labelAll')" name="all">
            <tree data="AllList"  ></tree>
          </el-tab-pane>
          <el-tab-pane :label="$t('device.available')" name="available">
            <tree data="availableList"  ></tree>
          </el-tab-pane>
          <el-tab-pane :label="$t('device.lost')" name="lost">
            <tree data="lossList" ></tree>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <baidu-map ></baidu-map>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import { Search} from "@element-plus/icons-vue";
import { getUserID } from "@/request/MapCenter/getuserID.js";
import { onMounted, ref  } from "vue";
import BaiduMap from "./baiduMap";
import NavNum from './navnum.vue'
import Tree from './tree.vue'
import { useStore } from "vuex";
const searchInput = ref("");
const asideName = ref("all");
const AllList = ref([])//全部
const availableList=ref([])//可用
const lossList=ref([])//飞丢
const store=useStore()
onMounted(async () => {
  const userID = sessionStorage.getItem("userId") || 0;
  if (userID === 0) return;
  const res = await getUserID(userID);
  if (res.data.code === 0) {
    res.data.data[0].forEach((item) => {
      const dataList = {
        deviceImei: item.userName,
        key: "0",
        nodeId: item.userId,
        depth: 1,
        type: 1,
        children: []
      }
      if (item.gpsDeviceList.length > 0) {
        const node=JSON.parse(JSON.stringify(dataList))
        const offlineNode=JSON.parse(JSON.stringify(dataList))
        const onlineNode=JSON.parse(JSON.stringify(dataList))
        item.gpsDeviceList.forEach((value) => {
          node.children.push(value);
          // {
          //   label: value.deviceImei,
          //   key: node.key + "-" + node.children.length,
          //   nodeId: value.deviceId,
          //   depth: 2,
          //   type: 2,
          // }
          if(value.deviceStatus===1){
            onlineNode.children.push(value)
          }
          // {
          //             label:value.deviceImei,
          //             key:onlineNode.key + '-' + onlineNode.children.length,
          //             nodeId: value.deviceId,
          //             depth: 2,
          //             type: 2
          //           }
          else{
            offlineNode.children.push(value)
          }
          // {
          //            label:value.deviceImei,
          //             key:offlineNode.key + '-' + offlineNode.children.length,
          //             nodeId: value.deviceId,
          //             depth: 2,
          //             type: 2
          //           }
        })
        store.commit('setAllNum',item.gpsDeviceList)
        AllList.value.push(node);
        sessionStorage.setItem('AllList',JSON.stringify(AllList.value))
        availableList.value.push(onlineNode);
        lossList.value.push(offlineNode);
        store.commit('setAllList',AllList)
        //sessionStorage 存储的是字符串类型
        store.commit('setavailableList',availableList)
        store.commit('setlossList',lossList)
      }

    });
  }
})
const inputQuery=()=>{
  store.commit('setSearch',searchInput)
}

</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.MapCenter {
  width: 100%;
  height: calc(100vh - 90px);
  .el-container {
    width: 100%;
    height: 100%;
  .el-main {
  padding: 0 !important;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  }
 }
}
.el-aside {
  background-color: #fff ;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
}

  .Search {
    width: 94%;
    margin-left: 3%;
  }
  .el-tabs{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
  }
  :deep .el-tabs__content{
    flex: 1;
  }
  :deep .el-tab-pane{
    height: 100%;
  }

:deep .el-tabs__header {
  margin: 0 0 5px;
}
:deep .el-tree-node__content{
  text-align: left;
  height: 30px;
}



</style>