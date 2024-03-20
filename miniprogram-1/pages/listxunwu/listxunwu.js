// pages/listxunwu/listxunwu.js
//连接数据库
const DB = wx.cloud.database().collection("shiwuzhaoling_xunwu")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist_xunwu: []
  },

  cloud_getData_xunwu() {
    var that = this
    wx.cloud.callFunction({
      name: "chaxun_xunwu",
      success(res) {
        console.log("查询数据成功", res.result.data)
        that.setData({
          datalist_xunwu: res.result.data
        })
      },
      fail(res) {
        console.log("查询数据失败", res)
      }
    })
  },

  goxunwuxq(event){
    console.log("点击获取的数据",event.currentTarget.dataset.item._id)
    wx.navigateTo({
      url: '../xunwuxq/xunwuxq?id=' + event.currentTarget.dataset.item._id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    that.cloud_getData_xunwu();
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