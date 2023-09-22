<template>
    <div class="map">
        <baidu-map class="bm-view" :zoom="12" :center="{ lng: 121.484928, lat: 25.285599}" :scroll-wheel-zoom="true" :double-click-zoom="true">
            <template v-for="item in AllList[0]?.children" :key="item">
                <bm-marker :position="{lng: item.lastLongitude, lat: item.lastLatitude}" >
                    <bm-label :content="item.deviceImei" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
            </template>
        </baidu-map>
    </div>
   
</template>
<script setup>
import { useStore } from 'vuex';
import {computed} from 'vue'
const store=useStore()
const AllList=computed(()=>store.state.AllList)</script>
<style scoped lang="less">
.map{
    width: 100%;
    height: 100%;
    .bm-view {
    width: 100%;
    height: 100%;
}
}

</style>
