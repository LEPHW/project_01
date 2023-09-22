
export function setCookie (userId, session) {
  return function () {
    const Days = 30
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = userId + '=' + escape(session) + ';expires=' + exp.toGMTString()
  }
}

export function getCookie (userId) {
  let arr = document.cookie.match(new RegExp('(^| )' + userId + '=([^;]*)(;|$)'))
  if (arr != null) {
    return function () {
      return unescape(arr[2])
    }
  }
  return function () {
    return null
  }
}

export function delCookie (userId) {
  return function () {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const sess = getCookie(userId)
    if (sess != null) document.cookie = name + '=' + sess + ';expires=' + exp.toGMTString()
  }
}

export function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}
