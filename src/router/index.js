import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }
const routes = [
  {
    path: '/',
    redirect:'login'
  },
  {
    path:'/login',
    name:"login",
    component:login
  },
  {
    path:'/home',
    name:'home',
    redirect:'/MapCenter',
    component:()=>import(/* webpackChunkName: "home" */'@/views/home.vue'),
    children:[
      {
        path:'/MapCenter',
        name:'MapCenter',
        component:()=>import(/* webpackChunkName: "MapCenter" */'@/components/home/MapCenter/MapCenter.vue')
      },
      {
        path:"/DeviceList",
        name:"DeviceList",
        component:()=>import(/* webpackChunkName: "DeviceList" */'@/components/home/DeviceList/DeviceList.vue')
      },
      {
        path:"/GpsReport",
        name:"GpsReport",
        redirect:'/tripReport',
        component:()=>import(/* webpackChunkName: "GpsReport" */'@/components/home/GpsReport/GpsReport.vue'),
        children:[
          {
            path:'/tripReport',
            name:'tripReport',
            component:()=>import(/* webpackChunkName: "tripReport" */'@/components/home/GpsReport/tripReport.vue')
          },
          {
            path:'/warmReport',
            name:'warmReport',
            component:()=>import(/* webpackChunkName: "warmReport" */'@/components/home/GpsReport/warmReport.vue')
          },
          {
            path:'/speedReport',
            name:'speedReport',
            component:()=>import(/* webpackChunkName: "speedReport" */'@/components/home/GpsReport/speedReport.vue')
          },
          {
            path:'/bycarReport',
            name:'bycarReport',
            component:()=>import(/* webpackChunkName: "bycarReport" */'@/components/home/GpsReport/bycarReport.vue')
          },
          {
            path:'/historyReport',
            name:'historyReport',
            component:()=>import(/* webpackChunkName: "historyReport" */'@/components/home/GpsReport/historyReport.vue')
          },
          {
            path:'/stopcarReport',
            name:'stopcarReport',
            component:()=>import(/* webpackChunkName: "stopcarReport" */'@/components/home/GpsReport/stopcarReport.vue')
          },
        ]
      }
    ]
  },
 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
