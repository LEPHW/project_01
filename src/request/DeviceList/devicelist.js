import axiosData from '../index.js'
export function listGpsDevice () {
    return axiosData({
      url: 'app/device/listDevice',
      method: 'get',
    })
  }