export const login = {
  btn: {
    login: 'Login',
    experience: 'Experience'
  },
  loginMode: {
    userName: 'User',
    deviceImei: 'Device'
  },
  msg: {
    rules: {
      userName: {
        required: 'Please input user name',
        length: 'The length is between 4 and 12 characters'
      },
      password: {
        required: 'Please input password',
        length: 'The length is between 6 and 18 characters'
      }
    },
    login: {
      success: 'Login Success!'
    }
  }
}

export const home = {
  page: {
    head: {
      menu: {
        home: 'Home',
        mapCenter: 'Map Center',
        deviceTitle: 'Gps Device',
        deviceList: 'Device List',
        userBind: 'User Device Bind',
        reportTitle: 'Statistic Report',
        reportMain: 'Gps Report',
        systemMain: 'System Manage',
        systemTitle: 'System Manage',
        users: 'System User',
        dept: 'Dept Manage',
        code: 'Code Manage',
        customer: 'Customer Manage',
        competitionManage: 'Competition Manage'
      },
      welcome: 'Welcome!',
      changePasswd: 'Change Password',
      logout: 'Logout'
    },
    diagTitle: 'Change Password',
    changePasswordForm: {
      oldPassword: 'Old Password',
      newPassword1: 'New Password',
      newPassword2: 'Password Again'
    },
    pwdBtnConfirm: 'Confirm',
    pwdBtnCancel: 'Cancel'
  },
  rules: {
    oldPassword: {
      required: 'Please input old password'
    },
    newPassword1: {
      required: 'Please input new password'
    },
    newPassword2: {
      required: 'Please input new password again!'
    }
  },
  msg: {
    pwdDiff: 'The two new passwords are different',
    changedSuccess: 'Password changed!'
  }
}

export const welcome = {
  page: {
    left: {
      deviceTotal: 'Total:',
      deviceOffline: 'Offline:',
      deviceOnline: 'Online:',
      deviceRun: 'Run:',
      searchPlaceholder: 'Please Input Device IMEI',
      labelAll: 'ALL',
      labelOnline: 'Online',
      labelOffline: 'Offline',
      realTimeTracking: 'Real time tracking',
      more: 'More',
      historicalTrack: 'Historical track',
      sendCommand: 'Send Command',
      circularFence: 'Circular Fence',
      polygonalFence: 'Polygonal Fence',
      detailList: 'Detail Info',
      operation: 'Operation',
      flightTraining: '训飞'
    },
    main: {
      refreshPre: 'Refresh in ',
      refreshNext: 'seconds'
    },
    sendCommand: {
      title: 'Send Command',
      stop: 'Stop',
      resume: 'Resume',
      openDoor: 'Open Door',
      closeDoor: 'Close Door',
      start: 'Start',
      stopAfter: 'Stop(After 10km)',
      photograph: 'Photograph',
      timeInterval: 'Set Time Interval',
      timeIntervalPlaceholder: 'time interval',
      timeZone: 'Time Zone',
      timeZonePlaceholder: 'Time Zone',
      setAngle: 'Set Angle',
      setAnglePlaceholder: 'Set Angle',
      setDistance: 'Set Distance',
      setDistancePlaceholder: 'Set Distance',
      setWiretapping: 'Set Wiretapping',
      setWiretappingPlaceholder: 'Wiretapping Phone',
      setSpeed: 'Set Speed Limit',
      setSpeedPlaceholder: 'Speed Limit',
      movementAlert: 'Set Movement Alert',
      movementAlertPlaceholder: 'Movement Alert',
      authorizedPhone: 'Authorized Phone',
      authorizedPhonePlaceholder: 'select button',
      phoneSMSPlaceholder: 'Phone For SMS',
      phoneCALLPlaceholder: 'Phone For CALL',
      setRFID: 'Set RFID',
      sendMessage: 'Send Message',
      closeBtn: 'Close'
    },
    deviceInfo: {
      title: 'Device Info'
    }
  },
  msg: {
    sendCmdSuccess: 'Send Command Success!'
  }
}

export const competition = {
  name: 'Competition Name',
  date: 'Competition Date',
  createTime: 'Created Name',
  searchCompetition: 'Search Competition',
  createCompetition: 'Create Competition',
  expiryDate: '有效日期',
  pigeonHouseNo: '鸽舍号',
  startLat: '起点经度',
  startLon: '起点纬度',
  endLat: '终点经度',
  endLon: '终点纬度',
  msg: {
    inputNamePrompt: 'Please enter the name of competition',
    selectDate: 'Please select the start date of the competition',
    createSucceed: 'Succeessfully created the competition',
    deleteTip: 'Please confirm whether to delete the competition'
  },
  btns: {
    search: 'Search',
    create: 'Create'
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
  searchShow:'warning',
  searchShowMess:'The data does not exist',
  createTime: 'Activation Time',
  deviceImei: 'IMEI',
  deviceName: 'Plate Number',
  nickname: 'Nickname',
  organization: 'Team',
  deptId: 'Department',
  deviceType: 'Device Type',
  bindMobile: 'Sim No.',
  version: 'Version',
  timeFromPreviousPoint: 'Time from previous point',
  distanceFromPreviousPoint: 'Distance from previous point',
  deviceShortNumber: 'Short Number',
  deviceFamilyNumber: 'Family Number',
  deviceRemark: 'Remark',
  lastLongitude: 'Longitude',
  lastLatitude: 'Latitude',
  weather: 'Weather',
  lastLocationTime: 'Gps Time',
  lastLocationType: 'Loc Type',
  lastSpeed: 'Speed',
  lastMotionStatus: 'Motion Status',
  lastDeviceVol: 'Device Vol',
  heading: 'Heading',
  odometer: 'Odometer',
  onlineStatus: 'Online Status',
  accStatus: 'Acc Status',
  expireDate: 'Expire Date',
  lastDeviceSms: 'Device SMS',
  lastPositionDesc: 'Position Desc',
  plate: 'Plate',
  timeZone: 'Time Zone',
  baseMileage: 'Base Mileage',
  deviceColour: 'Colour',
  deviceStatus: 'Device Status',
  positioningTime: 'Positioning Time',
  uploadTime: 'Upload Time',
  altitude: 'Altitude',
  locationPoints: 'Location Points',
  lost: 'Lost',
  available: 'Available',
  ad1: 'Tank1 Quart',
  ad1Max: 'Tank1 Max Ad',
  ad1Min: 'Tank1 Min Ad',
  ad2: 'Tank2 Quart',
  ad2Max: 'Tank2 Max Ad',
  ad2Min: 'Tank2 Min Ad',
  ad3: 'Tank3 Quart',
  ad3Max: 'Tank3 Max Ad',
  ad3Min: 'Tank3 Min Ad',
  ad4: 'Tank4 Quart',
  ad4Max: 'Tank4 Max Ad',
  ad4Min: 'Tank4 Min Ad',
  fuel: 'Fuel',
  address: 'Address',
  temperature: 'Temperature',
  displayedStatus: 'Status',
  alarm: 'Alarm',
  deviceStatusEnum: {
    online: 'Online',
    offline: 'Offline'
  },
  deviceTypeEnum: {
    vehicleMountedLocator: 'Vehicle Mounted Locator',
    pigeonLocator: 'Pigeon Locator',
    studentCard: 'Student Card',
    drivingRecorder: 'Driving Recorder'
  },
  msg: {
    inputImei: 'Please enter the IMEI number of the device',
    unbindTip: 'Please confirm whether to unbind the device',
    imeiRule: 'The IMEI number of the device is combination of 15 - 17 digits,please enter all IMEI numbers or enter last six digits of the IMEI number'
  }
}

export const user = {
  userName: 'User Name',
  email: 'Email',
  mobile: 'Mobile',
  sex: 'Sex',
  userRole: 'User Role',
  status: 'Status',
  createTime: 'Create Time',
  expireDate: 'Expire Date',
  password: 'Password'
}

export const dept = {
  deptName: 'Department Name',
  createTime: 'Create Time'
}

export const customer = {
  customerName: 'Customer Name',
  contactPhone: 'Contact Phone',
  contactUser: 'Contact User',
  customerType: 'Customer Type',
  address: 'Address',
  delFlag: 'Delete Flag',
  quota: 'Quota',
  createTime: 'Create Time',
  pCustomerName: 'Parent company'
}

export const breadCrumb = {
  mainPage: 'Main Page',
  sysUser: 'System User',
  userList: 'System User List',
  sysDept: 'Sys Dept',
  deptList: 'Dept. List',
  gpsDevice: 'Gps Device',
  deviceList: 'Device List',
  inOutConfig: 'In/Out Config',
  sysManage: 'System Manage',
  codeManage: 'Code Manage',
  customer: 'Customer',
  customerList: 'Customer List',
  userDeviceBind: 'User Device Bind',
  reportMain: 'Report Main',
  reportAlter: 'Alter Report',
  reportBike: 'Bike Report',
  reportOdometer: 'Trip Report',
  reportSpeed: 'Speed Report',
  historyReport: 'History Report'
}

export const common = {
  bind: 'Bind',
  unbind: 'Unbind',
  bindDevice: 'Bind device',
  unbindDevice: 'Unbind device',
  dealer: 'Dealer',
  search: 'Search',
  searchDevice: 'Search device',
  reset: 'Reset',
  add: 'Add',
  confirm: 'Confirm',
  cancel: 'Cancel',
  notice: 'Notice',
  bindSucceed: 'Bind succeed',
  bindFailed: 'Bind failed',
  unbindSucceed: 'Unbind succeed',
  unbindFailed: 'Unbind failed',
  createSuccess: 'Created successfully',
  updateSuccess: 'Updated successfully',
  deleteSuccess: 'Deleted successfully',
  updateFailed: 'Update failed',
  createFailed: 'Created failed',
  deleteFailed: 'Deleted failed',
  sn: 'SN.',
  filter: 'Filter',
  filterDevice: 'Filter device',
  operation: 'Operation',
  canceled: 'Canceled!',
  deleteConfirm: 'This operation will permanently delete the user. Do you want to continue?',
  close: 'Close',
  select: 'Select',
  selectDeviceTile: 'Select Device',
  selectDate: 'Select date',
  manage: 'Manage',
  edit: 'Edit',
  delete: 'Delete',
  reminder: 'Reminder'
}

export const userPage = {
  userNamePlaceholder: 'Input User Name',
  userStatusPlaceholder: 'Please select status',
  userMobilePlaceholder: 'Input User Mobile',
  sexPlaceholder: 'Please select sex',
  userRolePlaceholder: 'Please select user role',
  statusPlaceholder: 'Please select status',
  deptPlaceholder: 'Please select Dept.',
  customerPlaceholder: 'Please select customer',
  expireDatePlaceholder: 'Please select expire date',
  rules: {
    email: {
      legalEmail: 'Please input legal email'
    },
    mobile: {
      legalMobile: 'Please input legal mobile',
      required: 'please input your mobile'
    },
    deptId: {
      required: 'Please select Department!'
    },
    customerId: {
      required: 'Please select customer!'
    },
    password: {
      required: 'please input password',
      length: 'The length of password is 4-10 characters'
    },
    userName: {
      required: 'please input user name',
      length: 'The length of user name is 4-10 characters'
    },
    userType: {
      required: 'please select user type'
    },
    expireDate: {
      threeMonth: 'Three month',
      sixMonth: 'Half a year',
      oneYear: 'One year'
    },
    userRole: {
      required: 'You need to select a user role'
    }
  }
}

export const deptPage = {
  deptNamePlaceholder: 'Please input the dept.',
  addTitle: 'Add Department',
  rules: {
    deptName: {
      required: 'please input department',
      length: 'The length of the department name is 4-30 words'
    },
    customerId: {
      required: 'please select customer'
    }
  }
}

export const code = {
  codeName: 'Code Name',
  codeClass: 'Code Class',
  codeValue: 'Code Value',
  codeDesc: 'Code Desc'
}

export const codePage = {
  codeClassPlaceholder: 'Input Code Class',
  codeNamePlaceholder: 'Input Code Name',
  rules: {
    codeClass: {
      required: 'Please input code class',
      length: 'The code class length is 3 - 30'
    },
    codeName: {
      required: 'Please input code name'
    },
    codeValue: {
      required: 'Please input code value'
    }
  }
}

export const customerPage = {
  customerNamePlaceholder: 'Please input customer name',
  customerStatusPlaceholder: 'Select Customer Status',
  customerTypePlaceholder: 'Select Customer Type',
  addDiagTitle: 'Add/Edit Customer',
  rules: {
    customerName: {
      required: 'please input customer name',
      length: 'The length of the customer name is 4-30 words'
    },
    customerType: {
      required: 'please select customer type'
    },
    quota: {
      required: 'Please input quota',
      type: 'Please input number',
      quotaMin: 'Must be greater than 0'
    }
  }
}

export const devicePage = {
  deviceImeiPlaceholder: 'Input Device Imei',
  bindMobilePlaceholder: 'Input Sim No.',
  deviceNamePlaceholder: 'Input Device Name',
  organizationPlaceholder: 'Input Team Name',
  deviceTypePlaceholder: 'Select device type',
  deptPlaceholder: 'Select a department',
  addDiagTitle: 'Add/Edit Device',
  tankDiagTitle: 'Edit Tank Config',
  realTimeTrack: 'Live track',
  historicalTrack: 'Playback',
  sendCommand: 'Command',
  config: 'config',
  configuration: 'Configuration',
  getDeviceInfo: 'Info',
  flightTraining: 'Flight training',
  option: {
    title: 'Operation Menu',
    edit: 'Edit',
    config: 'In/Out config',
    tank: 'Tank Config',
    remove: 'Remove'
  },
  rules: {
    bindMobile: {
      required: 'Sim No. cannot be null'
    },
    deviceImei: {
      required: 'Device ID cannot be null'
    },
    deviceName: {
      required: 'Device Name cannot be null'
    },
    deptId: {
      required: 'Department cannot be null'
    },
    expireDate: {
      threeMonth: 'Three month',
      sixMonth: 'Half a year',
      oneYear: 'One year'
    },
    timeZone: {
      required: 'Time zone cannot be null',
      typeCheck: 'Time zone must be a number',
      validator: 'Time zone must be between -720 and 720'
    },
    baseMileage: {
      typeCheck: 'Base Mileage must be a number',
      validator: 'Base Mileage must be great or equal 0'
    },
    insert: {
      imeiExists: 'Device ID exist!',
      nameExists: 'Device Name exist!'
    }
  },
  msg: {
    deleteFlightTrainingPrompt: 'Whether to delete this flight training record'
  }
}

export const portConfigPage = {
  itemName: 'Config Item',
  portName: 'Port Name',
  value: 'Value',
  configType: 'Config Type',
  itemNamePlaceholder: 'select config Item',
  portNamePlaceholder: 'select port Name',
  configTypePlaceholder: 'select config type',
  addFromTitle: 'Add/Edit Port Config',
  option: {
    remove: 'Remove'
  },
  rules: {
    itemName: {
      required: 'Please select config item'
    },
    portName: {
      required: 'Please select port name'
    },
    value: {
      required: 'Please input value'
    },
    configType: {
      required: 'Please select config type'
    }
  },
  msg: {
    checkData: 'The control command must be configured as an output port and the status must be configured as an input port'
  }
}

export const userBind = {
  mainControl: 'Main Control',
  mainControlPlaceholder: 'Master or not',
  createTime: 'Bind Time',
  remark: 'Remark',
  addFromTitle: 'Add User Device Bind',
  msg: {
    userName: 'User name is required',
    deviceImei: 'Device IMEI is required'
  }
}

export const history = {
  play: 'Play',
  stop: 'Stop',
  slow: 'Slow',
  fast: 'Fast',
  pause: 'Pause',
  continue: 'Continue',
  acc: 'Engine'
}

export const circularFence = {
  fenceName: 'Fence Name',
  radius: 'Radius',
  inOut: 'In/Out',
  latitude: 'Latitude',
  longitude: 'Longitude',
  addFenceTitle: 'Add Circular Fence',
  addFence: 'Add fence',
  query: 'Lng & lat query',
  rules: {
    fenceName: {
      required: 'Please input fence name'
    },
    radius: {
      required: 'Please input radius'
    },
    inOut: {
      required: 'Please select For In/Out'
    },
    selectPoint: 'Please select a point on the map first',
    latLng: 'please input latitude and longitude',
    lat: 'The Latitude are between - 90 and 90',
    lng: 'The Latitude are between - 180 and 180'
  }
}

export const polygonalFence = {
  fenceName: 'Fence Name',
  inOut: 'In/Out',
  query: 'Lng & lat query',
  addFence: 'Add fence',
  latitude: 'Latitude',
  longitude: 'Longitude',
  rules: {
    fenceName: {
      required: 'Please input fence name'
    },
    inOut: {
      required: 'Please select For In/Out'
    }
  }
}

export const mapJs = {
  fenceName: 'Fence Name',
  radius: 'Radius',
  inOut: 'In/Out'
}

export const reportMain = {
  gpsReport: 'GPS Report',
  odometerItem: 'Trip Report',
  alterItem: 'Alert Report',
  overSpeedItem: 'Over Speed Report',
  bikeItem: 'Bike Report',
  historyItem: 'History Report',
  stopItem: 'Stop Report',
  oilItem: 'Oil Report'
}

export const odometerReport = {
  query: {
    deviceImei: 'Device Imei',
    deviceImeiPlaceholder: 'Input Device Imei',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  reportDate: 'Report Date',
  deviceImei: 'Device IMEI',
  deviceName: 'Device Name',
  tripStartDate: 'Trip Start',
  tripEndDate: 'Trip End',
  odometer: 'Odometer',
  oilConsumption: 'Oil Consumption',
  avgSpeed: 'Avg Speed',
  maxSpeed: 'Max Speed'
}

export const alterReport = {
  query: {
    deviceImei: 'Device Imei',
    deviceImeiPlaceholder: 'Input Device Imei',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  alarmTime: 'Alarm Date',
  deviceImei: 'Device IMEI',
  deviceName: 'Device Name',
  alarmType: 'Alarm Type',
  fenceName: 'Fence Name',
  fenceType: 'Fence Type',
  alarmValue: 'Alarm Value',
  currentValue: 'Current Value'
}

export const overSpeedReport = {
  query: {
    deviceImei: 'Device Imei',
    deviceImeiPlaceholder: 'Input Device Imei',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  alarmTime: 'Alarm Date',
  deviceImei: 'Device IMEI',
  deviceName: 'Device Name',
  alarmValue: 'Alarm Speed',
  currentValue: 'Current Speed'
}

export const historyReport = {
  query: {
    deviceImei: 'Device ID',
    deviceImeiPlaceholder: 'Input Plate',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  gpsTime: 'Location Time',
  deviceImei: 'Device ID',
  deviceName: 'Plate',
  lng: 'Longitude',
  lat: 'Latitude',
  heading: 'Direction',
  speed: 'Speed',
  odometer: 'Odometer',
  ad: 'Oil Capacity',
  accStatus: 'Engine Status',
  alarm: 'Alarm',
  temperature: 'Temperature'
}

export const stopReport = {
  query: {
    deviceImei: 'Device ID',
    deviceImeiPlaceholder: 'Input Plate',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  startTime: 'Start Time',
  endTime: 'End Time',
  deviceImei: 'Device ID',
  deviceName: 'Plate',
  lng: 'Longitude',
  lat: 'Latitude',
  duration: 'Duration'
}

export const oilReport = {
  query: {
    deviceImei: 'Device ID',
    deviceImeiPlaceholder: 'Input Plate',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  gpsTime: 'Location Time',
  deviceImei: 'Device ID',
  deviceName: 'Plate',
  lng: 'Longitude',
  lat: 'Latitude',
  heading: 'Direction',
  speed: 'Speed',
  odometer: 'Odometer',
  ad: 'Oil Capacity',
  accStatus: 'Engine Status',
  alarm: 'Alarm',
  temperature: 'Temperature'
}

export const bikeReport = {
  query: {
    deviceImei: 'Device Imei',
    deviceImeiPlaceholder: 'Input Device Imei',
    startTimePlaceholder: 'Start Time',
    endTimePlaceholder: 'End Time'
  },
  tripDate: 'Trip Date',
  deviceImei: 'Device IMEI',
  humanRiding: 'Human Riding',
  pasRiding: 'PAS Riding',
  tripOdometer: 'Odometer',
  sectionCalorie: 'Section Calorie',
  accumulateCalorie: 'Accumulate Calorie'
}

export const unit = {
  second: 's',
  minute: 'min',
  hour: 'h',
  meter: 'm',
  kilometer: 'km',
  speedPerMinute: 'Speed per minute',
  speedPerHour: 'Speed per hour',
  averageSpeedPerMinute: 'Average speed per minute',
  averageSpeedPerHour: 'Average speed per hour',
  meterPerSecond: 'm/s',
  meterPerMinute: 'm/min',
  kilometerPerHour: 'km/h',
  minutePerTime: 'min/time'
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
  record: 'Flight Training Record',
  standbyDatetime: 'Start standby time',
  cst: 'Configuration modification time',
  firstLocationTime: 'First location time',
  endTime: 'End time',
  validEndTime: 'Valid end time',
  lastLogTime: 'Last log time',
  pointCount: 'Ponits',
  validPointCount: 'Valid points',
  totalLocationDuration: 'Total location duration',
  totalStandbyDuration: 'Total standby duration',
  tip: {
    updateValidEndTime: 'Update the valid end time',
    selectValidEndTime: 'Please select the valid end time'
  }
}

export const locationType = {
  invalid: 'Invalid location',
  gps: 'GPS location',
  baseStation: '2G/4G Base Station',
  NBIOT: 'BN-IOT Base Station'
}

export const deviceType = {
  vehicle: 'Vehicle Positioner',
  pigeon: 'Pigeon positioner',
  studentCard: 'Student Card',
  recorder: 'Driving Recorder'
}

export const errorCode = {
  requestError: 'request failed,please retry later', // errorCode: -1
  internalError: 'Internal error, please concat adminitrator', // errorCode: 1000
  tokenExpired: 'The token has expired, please login again', // errorCode: 2004
  accountNotExistOrPasswordError: 'Account not exist or password error', // errorCode: 3000
  userNotExist: 'User not exist', // errorCode: 3001
  deviceNotExist: 'Device not exist', // errorCode: 3002
  oldPasswordError: 'The old password error', // errorCode: 3006
  userExpired: 'User login is expired', // errorCode: 3007
  deviceImeiExisted: 'Device IMEI is existed', // errorCode: 3008
  deviceNameExisted: 'Device name is existed', // errorCode: 3009
  accountExisted: 'Account existed', // errorCode: 3010
  passwordError: 'Password error', // errorCode: 3011
  deviceBound: 'This device is already been bound, and repeated binding is not allowed', // errorCode: 3013
  noAuthorizationToUnbind: 'This device is a dovecote project, and it is not allowed to unbind', // errorCode: 3015
  noAuthorizationToOperate: 'Sorry, you do not have permission to operate this device', // errorCode: 5006
  verifyFailed: 'Verification code is incorrect', // errorCode: 21000
  authorizationCodeExpired: 'Authorization code expired,please reacquire' // errorCode: 21001
}
