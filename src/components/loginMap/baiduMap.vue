<template>
    <div class="BaiMap">
        <baidu-map class="bm-view" :center="Ress.length>0 ? Ress[Ress.length-1] : {lng:116.39861016693963,lat:39.93695309960851}" :zoom="19" :scroll-wheel-zoom="true"
            :double-click-zoom="true" >
            <!-- 路线，主要是显示路书的轨迹 -->
            <!-- animation="BMAP_ANIMATION_BOUNCE" -->
            <bm-marker v-if="Ress.length>0" :position="Ress[0]" :dragging="true" :icon='icon' >
              <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
            <bm-marker v-if="Ress.length>0" :position="Ress[Ress.length-1]" :dragging="true" :icon='icon'></bm-marker>
            <bm-polyline v-if="Ress.length>0" :path="Ress"  stroke-color="pink" :stroke-opacity="0.8" :stroke-weight="3" ></bm-polyline>
               
                <!-- <bml-lushu v-if="Ress.length>0" :path="Ress" :rotation="true"   :speed="5000" :icon="icon" :play="onkey"   :autoView="true" > </bml-lushu>  -->
               
               
                <!-- <bm-polyline :path="path"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"   ></bm-polyline>
                <bml-lushu  :path="path" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true" > </bml-lushu> 
  
                <bm-polyline :path="path1"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  ></bm-polyline>
                <bml-lushu  :path="path1" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu>

             <bm-polyline :path="path2"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  :editing="true" ></bm-polyline>
            <bml-lushu  :path="path2" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu>

            <bm-polyline :path="path3"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  :editing="true" ></bm-polyline>
            <bml-lushu  :path="path3" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu>

            <bm-polyline :path="path4"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  :editing="true" ></bm-polyline>
            <bml-lushu  :path="path4" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu>

            <bm-polyline :path="path5"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  :editing="true" ></bm-polyline>
            <bml-lushu  :path="path5" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu>

            <bm-polyline :path="path6"  stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2"  :editing="true" ></bm-polyline>
            <bml-lushu  :path="path6" :rotation="true"   :speed="500" :icon="icon" :play="true"   :autoView="true"> </bml-lushu> -->
            <bm-control>
                <button @click="btnclick">缩放</button>
            </bm-control>
        </baidu-map>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// 必须引入
import {  BmlLushu } from 'vue-baidu-map-3x';
let lengt=0
const onkey=ref(false)
let offdeplay=''  //定时器开关
const btnclick=()=>{
    Ress.value=[]
    lengt=0
    clearInterval(offdeplay)
    offdeplay=setInterval(()=>{
        if(lengt>=add.length-1)
        clearInterval(offdeplay)
    Ress.value.push(add[lengt])
    lengt++
    console.log(lengt);
    },1000);
    if(onkey.value){
        clearInterval(offdeplay)
        onkey.value=!onkey.value
        return
    }
    onkey.value=!onkey.value
}
const Ress=ref([])
const add=[
    {lng:116.39861016693963,lat:39.93605309960851},
    {lng:116.39861016693963,lat:39.93615309960852},
    {lng:116.39861016693963,lat:39.93635309960853},
    {lng:116.39861016693963,lat:39.93645309960854},
    {lng:116.39861016693963,lat:39.93655309960855},
    {lng:116.39861016693963,lat:39.93665309960856},
    {lng:116.39861016693963,lat:39.93675309960857},
    {lng:116.39861016693963,lat:39.93685309960858},
    {lng:116.39861016693963,lat:39.93695309960859},
    {lng:116.39861016693963,lat:39.93705309960860},
    {lng:116.39861016693963,lat:39.93715309960861},
    {lng:116.39861016693963,lat:39.93725309960862},
    {lng:116.39861016693963,lat:39.93735309960863},
    {lng:116.39861016693963,lat:39.93745309960864},
    {lng:116.39861016693963,lat:39.93755309960865},
    {lng:116.39861016693963,lat:39.93765309960866},
    {lng:116.39861016693963,lat:39.94775309960867},
    {lng:116.39861016693963,lat:39.95785309960868},
    {lng:116.39861016693963,lat:39.96795309960869},
    {lng:116.39861016693963,lat:39.97805309960870},
    {lng:116.39861016693963,lat:39.98815309960871},
    {lng:116.39861016693963,lat:39.99825309960872},
    {lng:116.39861016693963,lat:40.00695309960873},
    {lng:116.39861016693963,lat:40.01695309960874},
    {lng:116.39861016693963,lat:40.05695309960875},
    {lng:116.39861016693963,lat:40.09695309960876},
    {lng:116.39861016693963,lat:40.14695309960877},
    {lng:116.39861016693963,lat:40.25695309960878},
    {lng:116.39861016693963,lat:40.36695309960879},
    {lng:116.39861016693963,lat:40.49695309960851},
    {lng:116.39861016693963,lat:40.52695309960851},
    {lng:116.39861016693963,lat:41.02695309960851},
    {lng:116.39861016693963,lat:41.12695309960851},
    {lng:116.39861016693963,lat:41.22695309960851},
    {lng:116.39861016693963,lat:41.26695309960851},
    {lng:116.39861016693963,lat:41.32695309960851},
    {lng:116.39861016693963,lat:41.42695309960851},
    {lng:116.39861016693963,lat:41.52695309960851},
    {lng:116.39861016693963,lat:41.62695309960851},
    {lng:116.39861016693963,lat:41.63695309960851},
    {lng:116.39861016693963,lat:42.06953099608511},
    {lng:116.39861016693963,lat:42.12695309960851},
    {lng:116.39861016693963,lat:42.22695309960851},
    {lng:116.39861016693963,lat:42.29695309960851},
    {lng:116.39861016693963,lat:42.33695309960851},
    {lng:116.39861016693963,lat:42.38695309960851},
    {lng:116.39861016693963,lat:42.45695309960851},
    {lng:116.39861016693963,lat:42.55695309960851},
    {lng:116.39861016693963,lat:42.65695309960851},
    {lng:116.39861016693963,lat:43.00695309960851},
    {lng:116.39861016693963,lat:43.24695309960851},
    {lng:116.39861016693963,lat:43.33695309960851},
    {lng:116.39861016693963,lat:43.39695309960851},
    {lng:116.39861016693963,lat:43.42695309960851},
    {lng:116.39861016693963,lat:43.42695309960851},
    {lng:116.39861016693963,lat:43.62695309960851},
    {lng:116.39861016693963,lat:43.72695309960851},
    {lng:116.39861016693963,lat:43.82695309960851},
    {lng:116.39861016693963,lat:44.02695309960851},
    {lng:116.39861016693963,lat:44.12695309960851},
    {lng:116.39861016693963,lat:44.22695309960851},
    {lng:116.39861016693963,lat:44.32695309960851},
    {lng:116.39861016693963,lat:44.33695309960851},
    {lng:116.39861016693963,lat:44.35695309960851},
    {lng:116.39861016693963,lat:44.37695309960851},
    {lng:116.39861016693963,lat:44.39695309960851},
    {lng:116.39861016693963,lat:44.40695309960851},
    {lng:116.39861016693963,lat:44.44695309960851},
    {lng:116.39861016693963,lat:44.53695309960851},
    {lng:116.39861016693963,lat:44.72695309960851},
    {lng:116.39861016693963,lat:44.92695309960851},
    {lng:116.39861016693963,lat:45.42695309960851},
    {lng:116.39861016693963,lat:45.82695309960851},
    
    
]
const icon = ref({
  url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
  //容器大小
  size: {
    width: 80,
    height: 80
  },
  opts: {
    //图片大小
    imageSize:{
        width:20,
        height:20
    },
    //偏移值
    anchor: {
      width: 10,
      height: 10
    }
  }
})

const path=[
    {lng:116.39861016693963,lat:39.92695309960851},
    {lng:116.42570306111925,lat:39.930633958081145},
    {lng:116.43684204944245,lat:39.931796443340296}
]
const path1=[
    {lng:116.39361016693963,lat:39.92695309960851},
    {lng:116.42470306111925,lat:39.930633958081145},
    {lng:116.43384204944245,lat:39.931796443340296}
]
const path2=[
    {lng:116.39661016693963,lat:39.92695309960851},
    {lng:116.42670306111925,lat:39.930633958081145},
    {lng:116.43684204944245,lat:39.931796443340296}
]
const path3=[
    {lng:116.39961016693963,lat:39.92695309960851},
    {lng:116.43270306111925,lat:39.930633958081145},
    {lng:116.43484204944245,lat:39.931796443340296}
]
const path4=[
    {lng:116.33361016693963,lat:39.92695309960851},
    {lng:116.41470306111925,lat:39.930633958081145},
    {lng:116.42384204944245,lat:39.931796443340296}
]
const path5=[
    {lng:116.32361016693963,lat:39.92695309960851},
    {lng:116.44470306111925,lat:39.930633958081145},
    {lng:116.43384204944245,lat:39.931796443340296}
]
const path6=[
    {lng:116.31361016693963,lat:39.92695309960851},
    {lng:116.43470306111925,lat:39.930633958081145},
    {lng:116.44384204944245,lat:39.931796443340296}
]
// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">

.BaiMap{
    width: 100%;
    height: 100%;
    .bm-view{
        width: 100%;
        height: 100%;
    }
    .el-button{
        margin:10px ;
        color: #fff;
        background-color: #04b4ff;
    }
}
</style>