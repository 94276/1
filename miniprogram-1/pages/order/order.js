// pages/order/order.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['全部', '代取订单', '跑腿订单', '失物招领订单'],
    tabNow: 0,
    orderList: [],
    daiquOrder: [],
    paotuiOrder: [],
    shiwuzhaolingOrder: [],
    xunwuOrder:[],
    printOrder:[],
    openid: '',
    canReceive: false,
    avatarUrl:''
  },
  selectTab(e) {
    const {
      id
    } = e.currentTarget.dataset;
    this.setData({
      tabNow: id,
    })
    if (id === 0) {
      this.getDaiquOrder();
      this.getPaotuiOrder();
      this.getPaotuiOrder();
      this.getPrintOrder();
      this.getShiwuzhaolingOrder();
      this.getXunwuOrder();
    } else if (id === 1) {
      this.getDaiquOrder();
    } else if (id === 2) {
      this.getPaotuiOrder();
      this.getPrintOrder();
    } else if (id === 3) {
      this.getShiwuzhaolingOrder();
      this.getXunwuOrder();
    }
  },
  
 // 删除快递代取订单
 deleteDaiquOrder(e) {
  const {
    id
  } = e.currentTarget.dataset;
  wx.cloud.callFunction({
    name: 'deleteDaiquOrder',
    data: {
      _id: id
    },
    success: () => {
      wx.showToast({
        title: '删除成功',
      })
      this.getDaiquOrder(); 
    },
    fail: () => {
      wx.showToast({
        icon: 'none',
        title: '删除失败',
      })
    }
  })
},
   // 删除跑腿——帮我送订单
   deletePaotuiOrder(e) {
    const {
      id
    } = e.currentTarget.dataset;
    wx.cloud.callFunction({
      name: 'deletePaotuiOrder',
      data: {
        _id: id
      },
      success: () => {
        wx.showToast({
          title: '删除成功',
        })
        this.getPaotuiOrder();
      },
      fail: () => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
      }
    })
  },
 // 删除跑腿——打印订单
 deletePrintOrder(e) {
  const {
    id
  } = e.currentTarget.dataset;
  wx.cloud.callFunction({
    name: 'deletePrintOrder',
    data: {
      _id: id
    },
    success: () => {
      wx.showToast({
        title: '删除成功',
      })
      this.getPrintOrder();
    },
    fail: () => {
      wx.showToast({
        icon: 'none',
        title: '删除失败',
      })
    }
  })
},
    // 删除失物招领订单
    deleteShiwuOrder(e) {
      const {
        id
      } = e.currentTarget.dataset;
      wx.cloud.callFunction({
        name: 'deleteShiwuOrder',
        data: {
          _id: id
        },
        success: () => {
          wx.showToast({
            title: '删除成功',
          })
          this.getShiwuzhaolingOrder();
        },
        fail: () => {
          wx.showToast({
            icon: 'none',
            title: '删除失败',
          })
        }
      })
    },

  // 删除寻物启事订单
  deleteXunwuOrder(e) {
    const {
      id
    } = e.currentTarget.dataset;
    wx.cloud.callFunction({
      name: 'deleteXunwuOrder',
      data: {
        _id: id
      },
      success: () => {
        wx.showToast({
          title: '删除成功',
        })
        this.getXunwuOrder();
      },
      fail: () => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
      }
    })
  },

// 获取快递代取订单信息
  getDaiquOrder() {
    wx.showLoading({
      title: '加载中',
    })
    const userinfo = wx.getStorageSync('userInfo')
    this.setData({
      avatarUrl : userinfo.avatarUrl,
    })
    //失物招领
    db.collection('expressDelivery').where({
      _openid: this.data.openid,
    }).get({
      success: (res) => {
        console.log('请求成功',res)
        const {
          data
        } = res;
        this.setData({
          daiquOrder: data,
        })
        wx.hideLoading();
      }
    })
  },
  // 获取跑腿——帮我送订单信息 
  getPaotuiOrder() {
    wx.showLoading({
      title: '加载中',
    })
    const userinfo = wx.getStorageSync('userInfo')
    this.setData({
      avatarUrl : userinfo.avatarUrl,
    })
    //跑腿
    db.collection('paotui').where({
      _openid: this.data.openid,
    }).get({
      success: (res) => {
        console.log('请求成功',res)
        const {
          data
        } = res;
        this.setData({
          paotuiOrder: data,
        })
        wx.hideLoading();
      }
    })
  },

// 获取跑腿——打印订单信息 
getPrintOrder() {
  wx.showLoading({
    title: '加载中',
  })
  const userinfo = wx.getStorageSync('userInfo')
  this.setData({
    avatarUrl : userinfo.avatarUrl,
  })
  //打印
  db.collection('print').where({
    _openid: this.data.openid,
  }).get({
    success: (res) => {
      console.log('请求成功',res)
      const {
        data
      } = res;
      this.setData({
        printOrder: data,
      })
      wx.hideLoading();
    }
  })
},
  // 获取失物招领的订单信息
  getShiwuzhaolingOrder() {
    wx.showLoading({
      title: '加载中',
    })
    const userinfo = wx.getStorageSync('userInfo')
    this.setData({
      avatarUrl : userinfo.avatarUrl,
    })
    //失物招领
    db.collection('shiwuzhaoling_shiwu').where({
      _openid: this.data.openid,
    }).get({
      success: (res) => {
        console.log('请求成功',res)
        const {
          data
        } = res;
        this.setData({
          shiwuzhaolingOrder: data,
        })
        wx.hideLoading();
      }
    })
  },
  
   // 获取寻物启事的订单信息
   getXunwuOrder() {
    wx.showLoading({
      title: '加载中',
    })
    const userinfo = wx.getStorageSync('userInfo')
    this.setData({
      avatarUrl : userinfo.avatarUrl,
    })
    //寻物启事
    db.collection('shiwuzhaoling_xunwu').where({
      _openid: this.data.openid,
    }).get({
      success: (res) => {
        console.log('请求成功',res)
        const {
          data
        } = res;
        this.setData({
          xunwuOrder: data,
        })
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      openid: wx.getStorageSync('openid')
    })
    this.getDaiquOrder();
    this.getPaotuiOrder();
    this.getPaotuiOrder();
    this.getPrintOrder();
    this.getShiwuzhaolingOrder();
    this.getXunwuOrder();
    wx.hideLoading();
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
    this.onLoad();
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
   * 页面下拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
        icon: 'none',
        title: '无更多信息',
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})