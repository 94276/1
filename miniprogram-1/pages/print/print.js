// pages/test1/test1.js
const db=wx.cloud.database().collection("print")
import Util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "printImg":"",
    "getAdress":"",
    "pageNum":"",
    "remarks":"",
    "time":"",
    "colorPrint": "",
    "twoSided": "",
  },

  bindSubmit:function(res){
    console.log(res)
    var printImg = res.detail.value.printImg
    var getAdress = res.detail.value.getAdress
    var pageNum = res.detail.value.pageNum
    var remarks = res.detail.value.remarks
    var time = res.detail.value.time
    var colorPrint = res.detail.value.colorPrint
    var twoSided = res.detail.value.twoSided
    var money = res.detail.value.money
 
    pageNum = Number(pageNum)
    colorPrint = Number(colorPrint)
    twoSided = Number(twoSided)
    money = Number(money)

    wx.showLoading({
      title: '订单发布中...',
      mask: "true"
    })
    db.add({
      data: {
        "printImg":printImg,
        "getAdress":getAdress,
        "pageNum":pageNum,
        "remarks":remarks,
        "time":time,
        "colorPrint":colorPrint,
        "twoSided":twoSided,
        "money": colorPrint ? ( 2 * pageNum + 3 ) : ( 0.5 * pageNum + 3 ),
        "createtime": Util.formatTime(new Date()),
      },
      success: function(res){
        wx.showToast({
          title: '发布成功',
        })
      }
    })
  },

  getImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        wx.showLoading({
          title: '加载中',
        })
        const random = Math.floor(Math.random() * 1000);
        wx.cloud.uploadFile({
          cloudPath: `print/${random}.png`,
          filePath: res.tempFilePaths[0],
          success: (res) => {
            let fileID = res.fileID;
            this.setData({
              printImg: fileID,
            })
            wx.hideLoading();
          }
        })
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