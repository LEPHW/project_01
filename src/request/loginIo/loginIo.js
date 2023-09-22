import axiosData from '../index.js'
export function loginUser (data) {
  const req = {
    action: 'userAction',
    method: 'login',
    data: {
      userName: data.userName,
      password: data.password
    }
  }
  return axiosData({
    url: 'MainServlet',
    method: 'post',
    data: req
  })
}
export function deviceLogin (data) {
  const req = {
    action: 'deviceAction',
    method: 'login',
    data: {
      deviceImei: data.deviceImei,
      devicePassword: data.password
    }
  }
  return axiosData({
    url: 'MainServlet',
    method: 'post',
    data: req
  })
}
export function experienceLogin () {
  const req = {
    action: 'userAction',
    method: 'login',
    data: {
      userName: 'experience',
      password: '111111q'
    }
  }
  return axiosData({
    url: 'MainServlet',
    method: 'post',
    data: req
  })
}