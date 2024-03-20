// pages/pbulishxunren/publishxunren.js
const DB = wx.cloud.database().collection("shiwuzhaoling_shiwu")
import Util from '../../utils/util.js'
let name1 = ""
let place1 = ""
let contact1 = ""
let note1 = ""
let date_string = ""
let filepath1 = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //读取名字
  handelInput_name(event) {
    console.log(event.detail.value)
    name1 = event.detail.value
  },
  //读取地址
  handelInput_place(event) {
    console.log(event.detail.value)
    place1 = event.detail.value
  },
  //读取联系方式
  handelInput_contact(event) {
    console.log(event.detail.value)
    contact1 = event.detail.value
  },
  //读取备注和描述
  handelInput_note(event) {
    console.log(event.detail.value)
    note1 = event.detail.value
  },
  //读取日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var date1 = new Date(e.detail.value)
    console.log('date1的值为', date1)
    date_string = (date1.getFullYear()) + "-" + (date1.getMonth() + 1) + "-" + (date1.getDate())
    console.log('date_string', date_string)
  },
  //读取图片
  addImage() {
    let that = this;
    console.log("点击了上传")
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(res)
        that.addImage_cloud(res.tempFilePaths[0]);
      }
    })
  },
  //上传图片至云端
  addImage_cloud(fileUrl) {
    wx.cloud.uploadFile({
      cloudPath: 'shiwuzhaoling/' + new Date().getTime() + '.png',
      filePath: fileUrl,
      success: res => {
        console.log("上传成功", res)
        filepath1 = res.fileID;
      },
      fail: console.error
    })
  },
  //增加函数
  addData() {
    let that = this;
    if (that.cheaknull() == true) {
      DB.add({
        data: {
          name: name1,
          place: place1,
          contact: contact1,
          note: note1,
          date: date_string,
          image: filepath1,
          createtime: Util.formatTime(new Date())
        },
        success(res) {
          console.log("添加成功", res)
          wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000 //持续的时间
          })
          setTimeout(() => {
            wx.navigateTo({
              url: '../shiwuzhaoling/shiwuzhaoling',
            })
          }, 2000)
        },
        fail(res) {
          console.log("添加失败", res)
          wx.showToast({
            title: '添加失败',
            icon: 'error',
            duration: 2000 //持续的时间
          })
        }
      })
    }
  },
  //检验各字段是否为空
  cheaknull() {
    //非空：名字非空，拾取地点非空，联系方式非空，描述非空
    //可以没有图片
    if (name1 == "") { //如果名字为空则报错
      wx.showToast({
        title: '请输入名字',
        icon: 'error',
        duration: 2000
      })
      return false;
    } else {
      if (name1.length > 6) { //如果名字长度>6则报错
        wx.showToast({
          title: '名字过长',
          icon: 'error',
          duration: 2000
        })
        return false;
      } else {
        if (contact1 == "") {
          wx.showToast({
            title: '请选择时间',
            icon: 'error',
            duration: 2000
          })
          return false;
        } else {
          if (place1 == "") {
            wx.showToast({
              title: '请输入拾取地点',
              icon: 'error',
              duration: 2000
            })
            return false;
          } else {
            if (contact1 == "") {
              wx.showToast({
                title: '请输入联系方式',
                icon: 'error',
                duration: 2000
              })
              return false;
            } else {
              if (note1 == "") {
                wx.showToast({
                  title: '请输入物品描述',
                  icon: 'error',
                  duration: 2000
                })
                return false;
              }
            }
          }
        }
      }
    }
    if(filepath1 == ""){
      filepath1 = "cloud://env-1gq0e9g75f752102.656e-env-1gq0e9g75f752102-1313619319/d5eeec59a2677bb9d8d7bf8779904f24.jpeg"
    }
    return true;
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