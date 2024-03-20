// pages/listshiwu/listshiwu.js
//连接数据库
const DB = wx.cloud.database().collection("shiwuzhaoling_shiwu")
const db = wx.cloud.database()
const $ = db.command.aggregate
Page({
  data: {
    datalist_shiwu: []
  },
  //寻物启事页面跳转
  jump1: function () {
    wx.navigateTo({
      url: '../chakan/chakan',
    })
  },
  cloud_getData_shiwu() {
    var that = this
    wx.cloud.callFunction({
      name: "chaxun_shiwu",
      success(res) {
        console.log("查询数据成功", res.result.data)
        that.setData({
          datalist_shiwu: res.result.data
        })
      },
      fail(res) {
        console.log("查询数据失败", res)
      }
    })
  },
  getData() {
    let len = this.data.datalist.length
    console.log("datalist的长度：", len)
    DB.skip(len).get().then(res => {
        console.log("获取成功", res.data)
        this.setData({
          datalist: this.data.datalist.concat(res.data)
        })
      })
      .catch(res => {
        console.log("获取失败", res)
      })
  },
  //跳转详情页
  gochakan(event){
    console.log("点击获取的数据",event.currentTarget.dataset.item._id)
    wx.navigateTo({
      url: '../chakan/chakan?id=' + event.currentTarget.dataset.item._id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    that.cloud_getData_shiwu();
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
      console.log("加载更多...")
      //this.getData
  },
})