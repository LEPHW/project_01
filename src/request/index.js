import axios from "axios";
const  axiosData=axios.create({
    baseURL:'http://trackservice.gps866.com',
    // baseURL:'http://192.168.1.100:8080/ROOT_war',
    timeout:10000,
    headers:{'Content-Type':'application/json;charset=utf-8'}
})
// 添加请求拦截器
axiosData.interceptors.request.use(function (config) {
    // console.log(config);
    // 在发送请求之前做些什么
    const token = sessionStorage.getItem('token') || ''
    config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    const userId = sessionStorage.getItem('userId') || 0
    config.headers['userId'] = userId
    config.headers['clientFlag'] = 1
    let session =sessionStorage.getItem('session') || ''
    if (session !== undefined) {
    config.headers['session'] = session
    }
    return config;
  }
//   , function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
  );

// 添加响应拦截器
axiosData.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default axiosData