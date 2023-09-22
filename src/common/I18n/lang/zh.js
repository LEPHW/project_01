export const login = {
  btn: {
    login: '登录',
    experience: '体验'
  },
  loginMode: {
    userName: '用户名',
    deviceImei: '设备ID'
  },
  msg: {
    rules: {
      userName: {
        required: '请输入用户名',
        length: '长度为4-12个字符'
      },
      password: {
        required: '请输入口令',
        length: '口令长度6-18个字符'
      }
    },
    login: {
      success: '登录成功'
    }
  }
}

export const home = {
  page: {
    head: {
      menu: {
        home: '主页',
        mapCenter: '地图中心',
        deviceTitle: 'GPS 设备',
        deviceList: '设备列表',
        userBind: '用户设备绑定',
        reportTitle: '统计报表',
        reportMain: 'Gps 报表',
        systemMain: '系统管理',
        systemTitle: '系统管理',
        users: '系统用户',
        dept: '部门管理',
        code: '代码管理',
        customer: '客户管理',
        competitionManage: '赛事管理'
      },
      welcome: '欢迎！',
      changePasswd: '更改密码',
      logout: '退出'
    },
    diagTitle: '修改密码',
    changePasswordForm: {
      oldPassword: '旧密码',
      newPassword1: '新密码',
      newPassword2: '再输一遍'
    },
    pwdBtnConfirm: '确认',
    pwdBtnCancel: '取消'
  },
  rules: {
    oldPassword: {
      required: '请录入旧密码'
    },
    newPassword1: {
      required: '请录入新密码'
    },
    newPassword2: {
      required: '请再录一遍新密码'
    }
  },
  msg: {
    pwdDiff: '两次口令不相同！',
    changedSuccess: '口令已更改！'
  }
}

export const welcome = {
  page: {
    left: {
      deviceTotal: '总数:',
      deviceOffline: '离线:',
      deviceOnline: '在线:',
      deviceRun: '在开:',
      searchPlaceholder: '请输入设备编号',
      labelAll: '全部',
      labelOnline: '在线',
      labelOffline: '离线',
      realTimeTracking: '实时跟踪',
      more: '更多',
      historicalTrack: '历史轨迹',
      sendCommand: '发送指令',
      circularFence: '圆形电子围栏',
      polygonalFence: '多边形电子围栏',
      detailList: '详细信息',
      operation: ' 操 作',
      flightTraining: '训飞'
    },
    main: {
      refreshPre: '',
      refreshNext: '秒后刷新'
    },
    sendCommand: {
      title: '发送指令',
      stop: '停车',
      resume: '恢复',
      openDoor: '开门',
      closeDoor: '关门',
      start: '启动',
      stopAfter: '停车(10km后)',
      photograph: '拍照',
      timeInterval: '设置跟踪时间间隔',
      timeIntervalPlaceholder: '请录入时间间隔',
      timeZone: '设置时区',
      timeZonePlaceholder: '请录入时区',
      setAngle: '设置跟踪角度',
      setAnglePlaceholder: '请录入跟踪角度',
      setDistance: '设置跟踪距离',
      setDistancePlaceholder: '请输入距离',
      setWiretapping: '设置监听',
      setWiretappingPlaceholder: '请录入监听电话',
      setSpeed: '设置速度限制',
      setSpeedPlaceholder: '请录入速度限制',
      movementAlert: '设置移动警报',
      movementAlertPlaceholder: '录入移动距离',
      authorizedPhone: '设置授权电话',
      authorizedPhonePlaceholder: '选择按钮',
      phoneSMSPlaceholder: '请录入SMS号码',
      phoneCALLPlaceholder: '请录入CALL号码',
      setRFID: '设置RFID',
      sendMessage: '发送消息',
      closeBtn: '关闭'
    },
    deviceInfo: {
      title: '设备信息'
    }
  },
  msg: {
    sendCmdSuccess: '指令发送成功！'
  }
}

export const competition = {
  name: '比赛名称',
  date: '比赛日期',
  createTime: '创建日期',
  searchCompetition: '搜索比赛',
  createCompetition: '创建比赛',
  expiryDate: '有效日期',
  pigeonHouseNo: '鸽舍号',
  startLat: '起点经度',
  startLon: '起点纬度',
  endLat: '终点经度',
  endLon: '终点纬度',
  msg: {
    inputNamePrompt: '请输入比赛名称',
    selectDate: '请选择比赛日期',
    createSucceed: '比赛创建成功',
    deleteTip: '请确认是否删除比赛'
  },
  btns: {
    search: '搜索',
    create: '创建'
  }
}

export const pigeonHouse = {
  pigeonNo: '鸽环号',
  imei: '设备号',
  addPigeonNo: '添加鸽环号',
  editPigeonNo: '编辑鸽环信息',
  msg: {
    inputPrompt: '请输入鸽环号或设备号',
    inputPigeonNoPrompt: '请输入鸽环号'
  },
  btns: {
    importFile: '导入',
    add: '添加',
    bind: '绑定'
  }
}

export const device = {
  searchShow:'警告',
  searchShowMess:'数据不存在',
  createTime: '激活时间',
  deviceImei: 'IMEI',
  deviceName: '车牌',
  nickname: '昵称',
  organization: '所属车队',
  deviceType: '设备类型',
  deptId: '部门',
  bindMobile: 'Sim卡号',
  version: '设备版本',
  timeFromPreviousPoint: '距上一点时间',
  distanceFromPreviousPoint: '距上一点距离',
  deviceShortNumber: '设备短号',
  deviceFamilyNumber: '家庭电话',
  deviceRemark: '备注',
  lastLongitude: '经度',
  lastLatitude: '纬度',
  weather: '天气',
  lastLocationTime: '时间',
  lastLocationType: '定位类型',
  lastSpeed: '速度',
  lastMotionStatus: '运动状态',
  lastDeviceVol: '设备电量',
  heading: '朝向',
  odometer: '里程',
  onlineStatus: '在线状态',
  accStatus: '引擎',
  expireDate: '过期时间',
  lastDeviceSms: '设备信息',
  lastPositionDesc: '位置描述',
  plate: '车牌',
  timeZone: '时区',
  baseMileage: '基础里程',
  deviceColour: '颜色',
  deviceStatus: '设备状态',
  positioningTime: '定位时间',
  uploadTime: '上传时间',
  altitude: '海拔高度',
  locationPoints: '定位点数',
  lost: '飞丢',
  available: '可用',
  ad1: '油箱1容量',
  ad1Max: '油箱1最大Ad',
  ad1Min: '油箱1最小Ad',
  ad2: '油箱2容量',
  ad2Max: '油箱2最大Ad',
  ad2Min: '油箱2最小Ad',
  ad3: '油箱3容量',
  ad3Max: '油箱3最大Ad',
  ad3Min: '油箱3最小Ad',
  ad4: '油箱4容量',
  ad4Max: '油箱4最大Ad',
  ad4Min: '油箱4最小Ad',
  fuel: '油量',
  address: '地址',
  temperature: '温度',
  displayedStatus: '状态',
  alarm: '警报',
  deviceStatusEnum: {
    online: '在线',
    offline: '离线'
  },
  deviceTypeEnum: {
    vehicleMountedLocator: '车载定位器',
    pigeonLocator: '鸽子定位器',
    studentCard: '学生卡',
    drivingRecorder: '行车记录仪'
  },
  msg: {
    inputImei: '请输入设备的IMEI号',
    unbindTip: '请确认是否解绑该设备',
    imeiRule: '设备IMEI号是由15到17位的纯数字组合而成的,请输入设备IMEI号后六位或全部的设备IMEI号'
  }
}

export const user = {
  userName: '用户名称',
  email: '电子邮箱',
  mobile: '手机',
  sex: '性别',
  userRole: '用户角色',
  status: '状态',
  createTime: '创建时间',
  expireDate: '过期时间',
  password: '口令'
}

export const dept = {
  deptName: '部门名称',
  createTime: '创建时间'
}

export const customer = {
  customerName: '客户名称',
  contactPhone: '联系电话',
  contactUser: '联系人',
  customerType: '客户类型',
  address: '地址',
  delFlag: '删除标识',
  quota: '设备限额',
  createTime: '创建时间',
  pCustomerName: '父公司'
}

export const breadCrumb = {
  mainPage: '主页',
  sysUser: '系统用户',
  userList: '用户列表',
  sysDept: '部门',
  deptList: '部门列表',
  gpsDevice: '定位设备',
  deviceList: '设备列表',
  inOutConfig: '输入输出配置',
  sysManage: '系统管理',
  codeManage: '代码管理',
  customer: '客户',
  customerList: '客户列表',
  userDeviceBind: '用户设备绑定',
  reportMain: '报表主页',
  reportAlter: '警报报表',
  reportBike: '单车报表',
  reportOdometer: '旅程报表',
  reportSpeed: '超速报表',
  historyReport: '历史报表'
}

export const common = {
  bind: '绑定',
  unbind: '解绑',
  bindDevice: '绑定设备',
  unbindDevice: '解绑设备',
  dealer: '经销商',
  search: '搜索',
  searchDevice: '搜索设备',
  reset: '重置',
  add: '添加',
  confirm: '确认',
  cancel: '取消',
  notice: '提示',
  bindSucceed: '绑定成功',
  bindFailed: '绑定失败',
  unbindSucceed: '解绑成功',
  unbindFailed: '解绑失败',
  createSuccess: '添加成功',
  updateSuccess: '更新成功',
  deleteSuccess: '删除成功',
  updateFailed: '更新失败',
  createFailed: '添加失败',
  deleteFailed: '删除失败',
  sn: '序号',
  filter: '筛选',
  filterDevice: '筛选设备',
  operation: '操作',
  canceled: '已取消!',
  deleteConfirm: '此操作将永久删除此数据，是否继续？',
  close: '关闭',
  select: '选取',
  selectDeviceTile: '选择设备',
  selectDate: '选择日期',
  manage: '管理',
  edit: '编辑',
  delete: '删除',
  reminder: '温馨提示'
}

export const userPage = {
  userNamePlaceholder: '请输入用户名',
  userStatusPlaceholder: '请选择状态',
  userMobilePlaceholder: '请输入手机号码',
  sexPlaceholder: '请选择性别',
  userRolePlaceholder: '请选择用户角色',
  statusPlaceholder: '请选择状态',
  deptPlaceholder: '请选择部门',
  customerPlaceholder: '请选择客户',
  expireDatePlaceholder: '请选择过期日期',
  rules: {
    email: {
      legalEmail: '请输入合法邮箱'
    },
    mobile: {
      legalMobile: '请输入合法手机号码',
      required: '请输入手机号码'
    },
    deptId: {
      required: '请选择部门'
    },
    customerId: {
      required: '请选择客户'
    },
    password: {
      required: '请输入密码',
      length: '密码长度为4-10个字符'
    },
    userName: {
      required: '请输入用户名称',
      length: '用户名称4-10个字符'
    },
    userType: {
      required: '请选择用户类型'
    },
    expireDate: {
      threeMonth: '3个月',
      sixMonth: '半年',
      oneYear: '一年'
    },
    userRole: {
      required: '需要选择一个用户角色'
    }
  }
}

export const deptPage = {
  deptNamePlaceholder: '请输入部门',
  addTitle: '添加部门',
  rules: {
    deptName: {
      required: '请输入部门名称',
      length: '部门名称长度为4-30个字符'
    },
    customerId: {
      required: '请选择公司'
    }
  }
}

export const code = {
  codeName: '代码名称',
  codeClass: '代码类型',
  codeValue: '代码值',
  codeDesc: '代码描述'
}

export const codePage = {
  codeClassPlaceholder: '请输入代码类型',
  codeNamePlaceholder: '请输入代码名称',
  rules: {
    codeClass: {
      required: '请输入代码类型',
      length: '代码类型长度为3-30个字符'
    },
    codeName: {
      required: '请输入代码名称'
    },
    codeValue: {
      required: '请输入代码值'
    }
  }
}

export const customerPage = {
  customerNamePlaceholder: '请输入客户名称',
  customerStatusPlaceholder: '请选择客户状态',
  customerTypePlaceholder: '选择客户类型',
  addDiagTitle: '添加/编辑 客户',
  rules: {
    customerName: {
      required: '请输入客户名称',
      length: '客户名称长度4-30个字符'
    },
    customerType: {
      required: '请选择客户类型'
    },
    quota: {
      required: '请输入设备限额',
      type: '请输入数字',
      quotaMin: '必须大于 0'
    }
  }
}

export const devicePage = {
  deviceImeiPlaceholder: '请输入设备编号',
  bindMobilePlaceholder: '请输入Sim卡号',
  deviceNamePlaceholder: '请输入设备名称',
  organizationPlaceholder: '请输入车队名称',
  deviceTypePlaceholder: '请选择设备类型',
  deptPlaceholder: '选择一个部门',
  addDiagTitle: '添加/修改设备',
  tankDiagTitle: '修改油箱配置',
  realTimeTrack: '跟踪',
  historicalTrack: '轨迹',
  sendCommand: '指令',
  config: '配置',
  configuration: '配置信息',
  getDeviceInfo: '信息',
  flightTraining: '训飞',
  option: {
    title: '操作菜单',
    edit: '编辑',
    config: '输入/输出配置',
    tank: '油箱配置',
    remove: '删除'
  },
  rules: {
    bindMobile: {
      required: 'Sim卡号不能为空'
    },
    deviceImei: {
      required: '设备ID不能为空'
    },
    deviceName: {
      required: '设备名称不能为空'
    },
    deptId: {
      required: '部门不能为空'
    },
    expireDate: {
      threeMonth: '3个月',
      sixMonth: '半年',
      oneYear: '一年'
    },
    timeZone: {
      required: '时区不能为空',
      typeCheck: '时区必须是数字',
      validator: '时区必须在-720到720之间'
    },
    baseMileage: {
      typeCheck: '基础里程必须是数字r',
      validator: '基础里程必须不小于0'
    },
    insert: {
      imeiExists: '设备ID已存在!',
      nameExists: '设备名词已存在!'
    }
  },
  msg: {
    deleteFlightTrainingPrompt: '是否删除此训飞记录'
  }
}

export const portConfigPage = {
  itemName: '配置项',
  portName: '输入输出端口',
  value: '值',
  configType: '配置类型',
  itemNamePlaceholder: '请选择配置项',
  portNamePlaceholder: '请选择输入输出端口',
  configTypePlaceholder: '请选择配置类型',
  addFromTitle: '添加/编辑输入输出配置',
  option: {
    remove: '删除'
  },
  rules: {
    itemName: {
      required: '请选择配置项'
    },
    portName: {
      required: '请选择输入输出端口'
    },
    value: {
      required: '请输入对应的值'
    },
    configType: {
      required: '请选中配置类型'
    }
  },
  msg: {
    checkData: '控制指令必须配置为输出端口，状态必须配置为输入端口'
  }
}

export const userBind = {
  mainControl: '主控',
  mainControlPlaceholder: '是否主控',
  createTime: '绑定时间',
  remark: '备注',
  addFromTitle: '添加用户设备绑定',
  msg: {
    userName: '必须录入用户名',
    deviceImei: '必须录入设备编号'
  }
}

export const history = {
  play: '播放',
  stop: '停止',
  slow: '慢',
  fast: '快',
  pause: '暂停',
  continue: '继续',
  acc: '引擎'
}

export const circularFence = {
  fenceName: '围栏名称',
  radius: '半径',
  inOut: '进/出',
  latitude: '纬度',
  longitude: '经度',
  addFenceTitle: '添加圆形围栏',
  addFence: '添加围栏',
  query: '经纬度查询',
  rules: {
    fenceName: {
      required: '请录入围栏名称'
    },
    radius: {
      required: '请录入围栏半径'
    },
    inOut: {
      required: '请选择进出类型'
    },
    selectPoint: '请在地图上选择一个点',
    latLng: '请输入经纬度',
    lat: '纬度在 -90到 90之间',
    lng: '经度在 -180 到 180之间'
  }
}

export const polygonalFence = {
  fenceName: '围栏名称',
  inOut: '进/出',
  query: '经纬度查询',
  addFence: '添加围栏',
  latitude: '纬度',
  longitude: '经度',
  rules: {
    fenceName: {
      required: '请输入围栏名称'
    },
    inOut: {
      required: '请选择进/出类型'
    }
  }
}

export const mapJs = {
  fenceName: '围栏名称',
  radius: '半径',
  inOut: '进/出'
}

export const reportMain = {
  gpsReport: 'GPS报表',
  odometerItem: '旅程报表',
  alterItem: '警报报表',
  overSpeedItem: '超速报表',
  bikeItem: '单车报表',
  historyItem: '历史报表',
  stopItem: '停车报表',
  oilItem: '油量报表'
}

export const odometerReport = {
  query: {
    deviceImei: '设备IMEI',
    deviceImeiPlaceholder: '请输入设备IMEI',
    startTimePlaceholder: '开始时间',
    endTimePlaceholder: '结束时间'
  },
  reportDate: '报告日期',
  deviceImei: '设备IMEI',
  deviceName: '设备名称',
  tripStartDate: '旅程开始',
  tripEndDate: '旅程结束',
  odometer: '里程',
  oilConsumption: '油耗',
  avgSpeed: '平均速度',
  maxSpeed: '最大速度'
}

export const alterReport = {
  query: {
    deviceImei: '设备IMEI',
    deviceImeiPlaceholder: '请输入设备IMEI',
    startTimePlaceholder: '开始时间',
    endTimePlaceholder: '结束时间'
  },
  alarmTime: '报警时间',
  deviceImei: '设备IMEI',
  deviceName: '设备名称',
  alarmType: '警报类型',
  fenceName: '围栏名称',
  fenceType: '围栏类型',
  alarmValue: '警报阀值',
  currentValue: '报警时值'
}

export const overSpeedReport = {
  query: {
    deviceImei: '设备IMEI',
    deviceImeiPlaceholder: '请输入设备IMEI',
    startTimePlaceholder: '开始时间',
    endTimePlaceholder: '结束时间'
  },
  alarmTime: '报警时间',
  deviceImei: '设备IMEI',
  deviceName: '设备名称',
  alarmValue: '警报速度',
  currentValue: '当时速度'
}

export const historyReport = {
  query: {
    deviceImei: '设备ID',
    deviceImeiPlaceholder: '请输入设备ID',
    startTimePlaceholder: '起始时间',
    endTimePlaceholder: '截止时间'
  },
  gpsTime: '定位时间',
  deviceImei: '设备ID',
  deviceName: '车牌',
  lng: '经度',
  lat: '纬度',
  heading: '方向',
  speed: '速度',
  odometer: '里程',
  ad: '油量',
  accStatus: '引擎状态',
  alarm: '警报',
  temperature: '温度'
}

export const stopReport = {
  query: {
    deviceImei: '设备ID',
    deviceImeiPlaceholder: '请输入设备ID',
    startTimePlaceholder: '起始时间',
    endTimePlaceholder: '截止时间'
  },
  startTime: '开始时间',
  endTime: '结束时间',
  deviceImei: '设备ID',
  deviceName: '车牌',
  lng: '经度',
  lat: '纬度',
  duration: '时长'
}

export const oilReport = {
  query: {
    deviceImei: '设备ID',
    deviceImeiPlaceholder: '请输入设备ID',
    startTimePlaceholder: '起始时间',
    endTimePlaceholder: '截止时间'
  },
  gpsTime: '定位时间',
  deviceImei: '设备ID',
  deviceName: '车牌',
  lng: '经度',
  lat: '纬度',
  heading: '方向',
  speed: '速度',
  odometer: '里程',
  ad: '油量',
  accStatus: '引擎状态',
  alarm: '警报',
  temperature: '温度'
}

export const bikeReport = {
  query: {
    deviceImei: '设备IMEI',
    deviceImeiPlaceholder: '请输入设备IMEI',
    startTimePlaceholder: '开始时间',
    endTimePlaceholder: '结束时间'
  },
  tripDate: '旅行时间',
  deviceImei: '设备IMEI',
  humanRiding: '人力骑行',
  pasRiding: '助力骑行',
  tripOdometer: '里程',
  sectionCalorie: '本次卡路里',
  accumulateCalorie: '累计卡路里'
}

export const unit = {
  second: '秒',
  minute: '分钟',
  hour: '小时',
  meter: '米',
  kilometer: '公里',
  speedPerMinute: '分速',
  speedPerHour: '时速',
  averageSpeedPerMinute: '平均分速',
  averageSpeedPerHour: '平均时速',
  meterPerSecond: '米/秒',
  meterPerMinute: '米/分钟',
  kilometerPerHour: '公里/小时',
  minutePerTime: '分钟/次'
}

export const config = {
  standbyDatetime: '开始待机时间',
  cst: '配置数据修改时间',
  rsut: '设定预约开机时间',
  rgli: '定位频率',
  rdui: '上传频率',
  lpl: '低电量门限',
  lpgli: '低电量模式定位频率',
  lpdui: '低电量模式上传频率',
  nmst: '第二段开始时间',
  nmet: '第二段结束时间',
  ngli: '第二段定位频率',
  ndui: '第二段数据上传频率',
  cgli: '第三段定位频率',
  cdui: '第三段数据上传频率',
  rdut: '数据上传启动时间',
  gddt: '开始下载星历时间',
  rsud: '比赛延迟开始时间'
}

export const flightTraining = {
  record: '训飞记录',
  standbyDatetime: '开始待机时间',
  cst: '配置数据修改时间',
  firstLocationTime: '第一次定位时间',
  endTime: '结束时间',
  validEndTime: '有效结束时间',
  lastLogTime: '最后日志时间',
  pointCount: '点数',
  validPointCount: '有效点数',
  totalLocationDuration: '定位总时长',
  totalStandbyDuration: '待机总时长',
  tip: {
    updateValidEndTime: '修改有效结束时间',
    selectValidEndTime: '请选择有效结束时间'
  }
}

export const locationType = {
  invalid: '无效定位',
  gps: 'GPS定位',
  baseStation: '2G/4G基站定位',
  NBIOT: 'NB基站定位'
}

export const deviceType = {
  vehicle: '车载定位器',
  pigeon: '鸽子定位器',
  studentCard: '学生卡',
  recorder: '行车记录仪'
}

export const errorCode = {
  requestError: '请求失败,请稍后重试', // errorCode: -1
  internalError: '内部错误,请联系管理员', // errorCode: 1000
  tokenExpired: 'Token已过期,请重新登录', // errorCode: 2004
  accountNotExistOrPasswordError: '账号或密码错误', // errorCode: 3000
  userNotExist: '用户不存在', // errorCode: 3001
  deviceNotExist: '设备不存在', // errorCode: 3002
  oldPasswordError: '旧密码错误', // errorCode: 3006
  userExpired: '用户登录已过期', // errorCode: 3007
  deviceImeiExisted: '设备IMEI已存在', // errorCode: 3008
  deviceNameExisted: '设备名称已存在', // errorCode: 3009
  accountExisted: '账号已存在', // errorCode: 3010
  passwordError: '密码错误', // errorCode: 3011
  deviceBound: '该设备已被绑定,不允许重复绑定', // errorCode: 3013
  noAuthorizationToUnbind: '此设备为鸽棚专案,不允许解绑', // errorCode: 3015
  noAuthorizationToOperate: '对不起,您无权操作此设备', // errorCode: 5006
  verifyFailed: '验证码错误', // errorCode: 21000
  authorizationCodeExpired: '验证码已过期,请重新获取' // errorCode: 21001
}
