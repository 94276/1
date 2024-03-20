// pages/new_built/new_built.js
import Util from '../../utils/util.js'
const DB=wx.cloud.database().collection('expressDelivery')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "userName":"",
    "phoneNumber":"",
    "getPrice":"",
    "getSize":"",
    "getTime":"",
    "getNumber":"",
    "getAdress":"",
    "putAdress":"",
},

  bindSubmit:function(res){
    console.log(res)   
    var userName = res.detail.value.userName
    var phoneNumber = res.detail.value.phoneNumber
    var getPrice = res.detail.value.getPrice
    var getSize = res.detail.value.getSize
    var getTime = res.detail.value.getTime
    var getNumber = res.detail.value.getNumber
    var getAddress = res.detail.value.getAddress
    var putAddress = res.detail.value.putAddress

    phoneNumber = Number(phoneNumber)
    getPrice = Number(getPrice)

    wx.showLoading({
      title: '订单发布中...',
      mask: "true"
    }),
    DB.add({
      data: {
        "userName":userName,
        "phoneNumber":phoneNumber,
        "getPrice":getPrice,
        "getSize":getSize,
        "getTime":getTime,
        "getNumber":getNumber,
        "getAddress":getAddress,
        "putAddress":putAddress,
        "createtime": Util.formatTime(new Date())
      },
      success: function(res){
        console.log(res)
        wx.hideLoading()
      }
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