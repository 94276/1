// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //通过编程式导航跳转到快递代取页面
  gotoExpress_collection (){
    wx.navigateTo({
     url: "../first/first",
    })
  },
  //通过编程式导航跳转到校园跑腿页面
  gotoCampus_running(){
    wx.navigateTo({
      url: "../campusRunning/campusRunning",
    })
  },
  //通过编程式导航跳转到失物招领页面
  gotoLost_and_Found(){
    wx.navigateTo({
      url: "../shiwuzhaoling/shiwuzhaoling",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})