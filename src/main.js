import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'
// 解决阻止事件的默认行为的警告（浏览器滑动）
// import 'default-passive-events';
// 清除默认样式
// reset-css
// import 'normalize.css'
import 'reset-css'
// import '@/common/I18n/index.js'
// 引入适配
import 'lib-flexible'
import i18n from '@/common/I18n/index.js'
import BaiduMap from 'vue-baidu-map-3x'

// // 解决浏览器地图什么组织滚动事件
// //Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>
// import 'default-passive-events'
// import ElementPlus from 'element-plus'
// const app=createApp(App)
// app.use(ElementPlus, {
//   i18n: (key, value) =>{console.log('ElementPlus',key,value); 
  
//  return i18n.t(key, value)}
// })
createApp(App).use(store).use(router).use(i18n).use(BaiduMap,{
  ak:'Xs1A6W2NSujM4c6y0Vdn2Uz60LpG6a0W'
}).mount('#app')

