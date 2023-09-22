import { createStore } from 'vuex'
const store=createStore({
  state(){
      return {
        // 语言
        lang:"zh-CN",
        userInfo:{},
        token:'',
        search:'',
        changArgee:false, //更改密码 
        AllNum:[], //全部数据
        AllList:[],  //全部
        availableList:[], //可用
        lossList:[],//飞丢
        point:{},//节点经纬度
      }
  },
  // getters相当于computed属性，当对应的state中的数据变化时执行
  getters:{
      // // 第一个参数默认是state，当msg变化时具有响应式
      // reverMsg(state){
      //     return state.msg.split('').reverse().join('')
      // },
      // // getters是当前store下的getters属性
      // getLength(state,getters){
      //     return getters.reverMsg.length
      // }

      getAllList(state){
        return state.AllList
      },
      getpoint(state){
        return state.point
      }
  },
  mutations:{
      // //通过store.commit方法触发对应函数状态变更，是同步函数  
      // //  默认第一个参数时createStore中的state
      // btnClick(state,value){
      //     state.count+=value
      // },
      // btnMsg(state,Msg){
      //     state.msg=Msg
      // }  
      setUserInfo (state, userInfo) {
        state.userInfo = userInfo
      },
      setLang (state, lang) {
        state.lang = lang
      },
      setToken(state,token){
        state.token = token
      },
      setChangArgee(state,changArgee){
        state.changArgee=changArgee
      },
      setSearch(state,search){
        state.search=search
      },
      setAllNum(state,AllNum){
        state.AllNum=AllNum
      },
      setAllList(state,AllList){
        state.AllList=AllList
      },
      setavailableList(state,availableList){
        state.availableList=availableList
      },
      setlossList(state,lossList){
        state.lossList=lossList
      },
      setpoint(state,point){
        state.point=point
      }
  },
  // 异步函数
  actions: {
  },
  // 局部store模块
  modules: {
  }
})
export default store