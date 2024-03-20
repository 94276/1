// pages/test/test.js
const db=wx.cloud.database().collection("paotui")
import Util from '../../utils/util.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    typeList:[
      {
        name:'文件',
        tips:'您已选中递送文件，请详细填写以下内容'
      },
      {
        name:'外卖',
        tips:'您已选中递送校内外卖，请详细填写以下内容'
      },
      {
        name:'捎点',
        tips:'您已选中捎点东西，请详细填写以下内容'
      }
    ],
    "typeNow":0,
    "putAdress":"",
    "getAdress":"",
    "require":"",
    "distance":"",
    "remarks":"",
    "time":"",
    "gender":"",
    "addPrice":"",
  },
  bindSubmit:function(res){
    console.log(res)
    var distance = res.detail.value.distance
    var putAdress = res.detail.value.putAdress
    var getAdress = res.detail.value.getAdress
    var require = res.detail.value.require
    var remarks = res.detail.value.remarks
    var time = res.detail.value.time
    var gender = res.detail.value.gender
    var addPrice = res.detail.value.addPrice
 
    addPrice = Number(addPrice)
    distance = Number(distance)
 
    wx.showLoading({
      title: '订单发布中...',
      mask: "true"
    })
    const that = this.data;
    db.add({
      data: {
        "kindDeliver":that.typeList[that.typeNow].name,
        "getAdress":getAdress,
        "putAdress":putAdress,
        "require":require,
        "distance":distance,
        "remarks":remarks,
        "time":time,
        "gender":gender,
        "addPrice":addPrice,
        "money": (distance>3) ? ( 4 * (distance - 3) + 2 + addPrice ) : 2 + addPrice,
        "createtime": Util.formatTime(new Date())
      },
      success: function(res){
        wx.showToast({
          title: '发布成功',
        })
      }
    })
  },

  selectType(e){
    const { id, tip } = e.currentTarget.dataset;
    this.setData({
      typeNow:id
    })
    wx.showToast({
      icon:'none',
      title: tip,
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