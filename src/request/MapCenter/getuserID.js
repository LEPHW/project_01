import axiosData from '../index.js'
export function getUserID(userID){
    const req={
        action:'userAction',
        method:'queryAllUserBindDevice',
        parameter:userID
    }
    return axiosData({
        url: 'MainServlet',
        method: 'post',
        data: req
      })
}