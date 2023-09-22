import { createI18n } from 'vue-i18n'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import store from '@/store/index'
const zhMessage = require('./lang/zh')
const enMessage = require('./lang/en')
const messages = {
    'zh-CN': {
      ...zhMessage,
      zhCn
    },
    'en-US': {
      ...enMessage,
      en
    }
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true, // 全局模式，可以直接使用 $t
    fallbackLocale: 'en-US', // 回退语言
    locale:sessionStorage.getItem('lang') || navigator.language || 'en-US', //指定语言，与messages内的语言匹配
    messages
  })
export default i18n

// require.context(path,deep,regExp)  vue-cli文档配置有相关资料
// path:文件夹路径
// deep:是否深度查找子文件夹(大概意思)
// regExp:正则语法，匹配文件  en.js =>  /\.js$/
// let regExp=/\.\/([^\.\/]+)\.([^\.]+)$/
// let langFileds=require.context('./lang',false,/\.js$/)
// // console.log(langFileds('./en.js'))
// let language={}
// langFileds.keys().forEach(key => {
//      let prop=regExp.exec(key)[1]
//      language[prop]=langFileds(key).default
// });
 // 日期格式化
  // const datetimeFormats = {
  //   'en': {
  //     short: {
  //       year: 'numeric', month: 'short', day: 'numeric'
  //     },
  //     long: {
  //       year: 'numeric', month: 'short', day: 'numeric',
  //       weekday: 'short', hour: 'numeric', minute: 'numeric'
  //     }
  //   },
   
  // }