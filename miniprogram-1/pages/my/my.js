// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    orderItems: [
      {
        typeId: 0,
        name: '代取订单',
        url: 'bill',
        imageurl: '/image/代取.png',
      },
      {
        typeId: 1,
        name: '跑腿订单',
        url: 'bill',
        imageurl: '/image/跑腿.png',
      },
      {
        typeId: 2,
        name: '失物招领订单',
        url: 'bill',
        imageurl: '/image/招领.png',
      }
    ],
},
  //事件处理函数
  //toOrder :事件监听，跳转到我的订单界面；
  toOrder: function () {

    wx.navigateTo({
      url: '../order/order'
    })
  },
  //toOrder :事件监听，跳转到收获地址界面；
  toAddress: function () {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    const userInfo = wx.getStorageSync('userInfo');
    this.setData({
        hasUserInfo: !!userInfo,
        userInfo: userInfo,
    })
    const openid = wx.getStorageSync('openid');
    if (!openid) {
      wx.cloud.callFunction({
        name: 'UserOpenId',
        success: (res) => {
          const {
            openid
          } = res.result;
          wx.setStorageSync('openid', openid);
        }
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('请求成功',res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync('userInfo', res.userInfo);
      }
    })
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
    this.onLoad();
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