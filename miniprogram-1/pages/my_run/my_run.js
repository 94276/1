// pages/my_run/my_run.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[
      {
        size:'小件',
        time:'2022年11月3日',
        name:'宋某某',
        num:'356856',
        address1:'菜鸟驿站',
        address2:'凤二',
        phoneNum:'13423457654',
        money:'2元',
        state:'完成'
      },
      {
        size:'中件',
        time:'2022年11月24日',
        name:'赵某某',
        num:'G3-3377',
        address1:'菜鸟驿站',
        address2:'凤二',
        phoneNum:'13234560987',
        money:'4元',
        state:'待完成'
      },
    ]
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