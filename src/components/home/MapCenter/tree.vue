<template>

  <div class="tree">
    <el-tree
      ref="treeRef"
      :data="selectTree"
      show-checkbox
      node-key="key"
      default-expand-all
      :filter-node-method="filterNode"
      :load="loadNode"
      lazy
      @node-click="nodeClick"
    >
      <template #default="{  data }" >
        <div class="custom-tree-node">
          <div v-if="data.nodeId === 2">
            {{ data.deviceImei }}
            <el-icon color="#409EFF">      
              <EditPen />
            </el-icon>
          </div>
          <div class="userID" v-else>
            <div class="icon">
              <el-icon color="#409EFF"><ElementPlus /></el-icon>
            </div>
            <div class="deviceImei">{{ data.deviceImei }}</div>
          </div>
          <div class="operate" v-if="data.nodeId === 2">
            <el-link type="primary" :underline="false" @click="append(data)">{{
              $t("devicePage.option.edit")
            }}</el-link>
          </div>
          <!-- <div class="operate" v-else>
            <el-dropdown trigger="click">
              <el-button size="small" >
                {{ $t("welcome.page.left.operation") }}
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>{{
                    $t("welcome.page.left.realTimeTracking")
                  }}</el-dropdown-item>
                  <el-dropdown-item>{{
                    $t("welcome.page.left.historicalTrack")
                  }}</el-dropdown-item>
                  <el-dropdown-item>{{
                    $t("welcome.page.left.flightTraining")
                  }}</el-dropdown-item>
                  <el-dropdown-item>{{
                    $t("devicePage.config")
                  }}</el-dropdown-item>
                  <el-dropdown-item>{{
                    $t("welcome.page.left.circularFence")
                  }}</el-dropdown-item>
                  <el-dropdown-item>{{
                    $t("welcome.page.left.polygonalFence")
                  }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div> -->
        </div>
      </template>
    </el-tree>
  </div>
</template>
<script setup>
import {  EditPen, ElementPlus } from "@element-plus/icons-vue";
import { computed, ref,watch} from "vue";
import { useStore } from "vuex"; 
const props=defineProps({
  data:String,
})
const treeRef=ref([])
const store=useStore()
const AllList=computed(()=>store.state.AllList)
const availableList=computed(()=>store.state.availableList)
const lossList=computed(()=>store.state.lossList)
const searchQuery=computed(()=>store.state.search)
watch(searchQuery,(newValue)=>{
  treeRef.value.filter(newValue)
})
const filterNode=(value, data)=>{
    if (!value) return true;
      return data.deviceImei.indexOf(value) !== -1;
}

const selectTree=computed(()=>{
  if(props.data==='AllList')
    return AllList.value
  else if(props.data==='availableList')
    return availableList.value
  else return lossList.value
})
//懒加载树节点
const loadNode=(node,resolve)=>{
  //根节点
  // resolve里面存放的方式[{},{}]，数组里面的对象表示有几个根节点
  if (node.level === 0) {
    return resolve(selectTree.value)
  }
  // data存放的是子节点，node.level=1,添加子节点，其余大于1的不添加子节点
  if (node.level>1){
    return resolve([]);
  } 
  setTimeout(() => {
        const data =selectTree.value[0].children
          //叶子节点
        resolve(data);
    }, 300);
}
const nodeClick=(node)=>{
  if(node.level===1) return 
  console.log(node);
  store.commit('setpoint',node)
}
</script>

<style scoped lang="less">
// :deep .el-tree-node__children .el-tree-node {
//   }

.tree{
  height: 100%;
  overflow: auto;
}
.custom-tree-node {
  display: flex;
  justify-items: center;
  align-items: center;
  .userID {
    display: flex;
    height: 15px;
    position: relative;
    // .el-icon{
    //   display: flex;
    //   align-items: center;
    // }
    .deviceImei{
      position: flex;
      top: 30px;
      width: 125px;
      white-space: normal;
      word-break: break-all;
    }
  }
//  .operate{
//   margin-left: 10px;
//  }

}
:deep .el-tree-node__content{
  margin-bottom: 2px;
}
:deep .el-dropdown-menu__item{
  text-align: center;
  display: block;
}
 //高宽分别对应横竖滚动条的尺寸
::-webkit-scrollbar{
    width:10px;
    height: 10px;
  }
  //定义滚动条轨道 内阴影 圆角
  ::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0,0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  //定义滑块 内阴影 圆角
  ::-webkit-scrollbar-thumb{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0,0.3);
    border-radius: 10px;
    background-color: #9cceff;
  }


</style>
