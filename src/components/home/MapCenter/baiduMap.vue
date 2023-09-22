<template>
    <div class="BaiMap">
        <baidu-map class="bm-view" :center="point" :zoom="zoom" :scroll-wheel-zoom="true" :double-click-zoom="true"  v-if="onShow">
                <template v-for="item in AllList[0].children" :key="item">
                    <bm-marker :position="{lng:item.lastLongitude, lat: item.lastLatitude}" @click="btnMarker(item)" v-if="item.lastLocationType===1">
                    </bm-marker>
                </template>
                <bm-marker :position="point"  @click="clickMarker" >
                    <bm-info-window :show="show"  :width="400" @close="closeMes" >
                       <table>
                            <tr>
                                <td><p>IMEI:</p>{{pointMes.deviceImei}}</td>
                                <td><p>昵称:</p>{{pointMes.deviceName}}</td>
                            </tr>
                            <tr>
                                <td><p>设备电量:</p>{{pointMes.lastDeviceVol+'%'}}</td>
                                <td><p>设备版本:</p>{{pointMes.iccid}}</td>
                            </tr>
                            <tr>
                                <td><p>定位时间:</p>{{pointMes.lastGpsTime}}</td>
                                <td><p>上传时间:</p>{{ pointMes.lastLocationTime }}</td>
                            </tr>
                            <tr>
                                <td><p>经度:</p>{{pointMes.lastLongitude}}</td>
                                <td><p>纬度:</p>{{ pointMes.lastLatitude }}</td>
                            </tr>
                            <tr>
                                <td><p>距离上一点距离:</p>52米</td>
                                <td><p>距离上一点时间:</p>5秒</td>
                            </tr>
                            <tr>
                                <td><p>分速:</p>0.000米/分钟</td>
                                <td><p>时速:</p>0.000公里/小时</td>
                            </tr>
                            <tr>
                                <td><p>平均分速:</p>0.000米/分钟</td>
                                <td><p>平均速度:</p>0.000公里/小时</td>
                            </tr>
                            <tr>
                                <td><p>海拔高度:</p>100米</td>
                                <td><p>定位点数:</p>12</td>
                            </tr>
                       </table>
                        <el-row justify="space-around">
                            <el-button style="background-color: rgb(100, 222, 255);" round>跟踪</el-button>
                            <el-button style="background-color: rgb(240, 168, 36);" round>轨迹</el-button>
                            <el-button style="background-color: rgb(223, 68, 57);" round>训飞</el-button>
                            <el-button style="background-color: #be5cff;" round>配置</el-button>
                            <el-button style="background-color: #f687fc;" round @click="btnMes">信息</el-button>
                        </el-row>
                    </bm-info-window>
                </bm-marker>
        </baidu-map>
        <baidu-map v-else></baidu-map>
        <el-dialog v-model="keyOff" title="设备信息" width="20%" custom-class="keyDialog" :close-on-press-escape="false">
            <table>
                <tr>
                    <td><p>IMEI:</p>{{pointMes.deviceImei}}</td>
                    <td><p>昵称:</p>{{pointMes.deviceName}}</td>
                </tr>
                <tr>
                    <td><p>设备电量:</p>{{pointMes.lastDeviceVol+'%'}}</td>
                    <td><p>设备版本:</p>{{pointMes.iccid}}</td>
                </tr>
                <tr>
                    <td><p>定位时间:</p>{{pointMes.lastGpsTime}}</td>
                    <td><p>上传时间:</p>{{ pointMes.lastLocationTime }}</td>
                </tr>
                <tr>
                    <td><p>经度:</p>{{pointMes.lastLongitude}}</td>
                    <td><p>纬度:</p>{{ pointMes.lastLatitude }}</td>
                </tr>
                <tr>
                    <td><p>距离上一点距离:</p>52米</td>
                    <td><p>距离上一点时间:</p>5秒</td>
                </tr>
                <tr>
                    <td><p>分速:</p>0.000米/分钟</td>
                    <td><p>时速:</p>0.000公里/小时</td>
                </tr>
                <tr>
                    <td><p>平均分速:</p>0.000米/分钟</td>
                    <td><p>平均速度:</p>0.000公里/小时</td>
                </tr>
                <tr>
                    <td><p>海拔高度:</p>100米</td>
                    <td><p>定位点数:</p>12</td>
                </tr>
            </table>
        </el-dialog>
    </div> 
    

</template>
<!-- {lng:AllList[0]?.children[1].lastLongitude,lat:AllList[0]?.children[1].lastLatitude} -->
<script setup>
import { computed,ref, watch } from 'vue';
import { useStore } from 'vuex';
const store=useStore()
const zoom=ref(8)
const AllList=computed(()=>(store.state.AllList))
const point=ref('')
const pointMes=ref('')
const onShow=ref(false)
watch(AllList,()=>{
    point.value={
        lng:AllList.value[0].children[11].lastLongitude ,
        lat:AllList.value[0].children[11].lastLatitude 
    }
    pointMes.value=AllList.value[0]?.children[11]
    onShow.value=true
    },{deep:true})
const btnMarker=(item)=>{
    pointMes.value=item
    point.value={lng:item.lastLongitude,lat:item.lastLatitude}
    zoom.value=12
    show.value=true
}
const show=ref(false)
const clickMarker=()=>{
    show.value=!show.value
    zoom.value=12
}
const closeMes=()=>{
    show.value=false
}
const getpoint=computed(()=>store.getters.getpoint)
watch(getpoint,(newValue)=>{
    btnMarker(newValue)
},{deep:true})
const keyOff=ref(false)
const btnMes=()=>{
    keyOff.value=!keyOff.value
}
</script>

<style scoped lang="less">

.BaiMap{
    width: 100%;
    height: 100%;
    .bm-view{
        width: 100%;
        height: 100%;
    }
    .el-button{
        margin: 0;
        font-size: 12px;
        height: 20px;
        color: aliceblue;
    }
    .MesDialog{
        padding: 10px 30px ;
    }
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
    }
    :deep .el-dialog__body{
        padding: 10px 15px 15px;
    }
    td{
        vertical-align:middle;  //把此元素放置在父元素的中部。
        width:200px;
        height: 25px;
        word-wrap:break-word;
        word-break:break-all;
        font-size: 12px;
        color: #3c3a3a;
        // 必须设置td的宽度
        // word-wrap：设置或检索当前行超过指定容器的边界时是否断开?>转行
        // normal: 默认值。允许内容顶开指定的容器边界
        // break-word: 内容将在边界内换行。如果需要，词内换行( word-break )也将发生
        // word-break:设置或检索对象内文本的字内换行行为。尤其在出现多种语言时
        // normal: 默认值。允许在词间换行
        // break-all: 该行为与亚洲语言的 normal 相同。也允许非亚洲语言文>本行的任意字内断开。该值适合包含一些非亚洲文本的亚洲文本
        // keep-all: 与所有非亚洲语言的 normal 相同。对于中文，韩文，日文，不允许字断开。适合包含少量亚洲文本的非亚洲文本
        p{
            display: inline;
            font-size: 13px;
            color: #242424;
            font-weight: 600;
        }
    }

    
}


</style>