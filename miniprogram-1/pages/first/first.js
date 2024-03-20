// pages/first/first.js
const DB=wx.cloud.database().collection('expressDelivery')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      {
        page:'',
        name:'代取快递'
      },
      {
        page:'../new_built/new_built',
        name:'我要发布'
      },
    ],
    tabNow:0,
  },
  selectTab(e){
    this.setData({
      tabNow: e.currentTarget.dataset.id
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    DB.get({
      success: res=>{
        console.log('请求成功',res)//res.data包含该记录的数据
        this.setData({
          List: res.data
        })
      },
      fail(err){
        console.log('请求失败',err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})