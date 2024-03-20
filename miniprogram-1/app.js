// app.js
App({
  onLaunch: function(){
    //云开发环境初始化
    wx.cloud.init({
      env:"env-1gq0e9g75f752102",
      traceUser: true
    })
    this.globalData = {}
  }
})
