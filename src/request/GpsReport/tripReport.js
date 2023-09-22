import axiosData from '../index.js'
export function getOdometerReport (data) {
    const req = {
      deviceImei: data.deviceImei,
      startDate: data.startDate,
      endDate: data.endDate,
      pageNum: data.pageNum,
      pageSize: data.pageSize
    }
    return axiosData({
      url: '/gps/report/getOdometerReport',
      method: 'post',
      data: req
    })
  }