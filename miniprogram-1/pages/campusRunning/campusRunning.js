// pages/campusRunning/campusRunning.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    runningConfig:[
      {
        icon: '../../image/deliver.png',
        text: '帮我送'
      },
      {
        icon: '../../image/print.png',
        text: '打印服务'
      }
    ]
  },

  toDetail(e){
    console.log(e);
    if(e.currentTarget.dataset.name === '帮我送'){
      wx.navigateTo({
        url:'../deliver/deliver',
      })
    }else if(e.currentTarget.dataset.name === '打印服务')
    {
      wx.navigateTo({
        url:'../print/print',
      })
    }
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