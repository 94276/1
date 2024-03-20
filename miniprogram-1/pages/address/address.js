// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[],
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    /**
     * id
     * name 收货人姓名
     * mobile 电话号
     * address 收货地址
     * isDefault 默认选中
     * checked 选中哪个地址
     */
    const addressList = wx.getStorageSync('addressList');
    this.setData({
      addressList,
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
    var addressList = wx.getStorageSync('addressList');
    var address = null;//获取默认选中地址
    if(addressList && addressList.length>0){
      addressList.forEach(function(v,index){
        if(v.isDefault){
          address = addressList.splice(index,1)[0];
        }
      })
      this.setData({
        addressList: [address,...addressList]
      })
    } else {
      this.setData({
        addressList: []
      })
    }
  },
  //选中地址
  selectAddress(e) {
    var index= e.currentTarget.dataset.index;
    var address = this.data.addressList[index];
    const url = wx.getStorageSync('urlNow')
    wx.setStorageSync('addressNow', address);
    wx.navigateBack({
      delta: 0,
    })
  },
  //默认地址选中点击事件
  clickDefault(e){
    var index= e.currentTarget.dataset.index;
    this.data.addressList.forEach(function(v){
      v.isDefault =false;
    })
    this.data.addressList[index].isDefault =true;
    //将默认选中的地址放到第一个位置
    var address = this.data.addressList.splice(index,1)[0];
    this.data.addressList =[address, ...this.data.addressList];
    this.setData({
      addressList: this.data.addressList
    })
  },
  //删除
  clickDelete(e){
    var index= e.currentTarget.dataset.index;
    var addressList = this.data.addressList
    addressList.splice(index,1);
    wx.setStorageSync('addressList', addressList);
    wx.showToast({
      title: '删除成功',
    })
    this.onLoad();
  },
  //编辑
  clickEdit(e){
    var index= e.currentTarget.dataset.index;
    var address = this.data.addressList[index];
    wx.navigateTo({
      url: '../ADD_address/ADD_address?address='+JSON.stringify(address),
    })
  },
  //新增
  addAddress(e){
    wx.navigateTo({
      url: "../ADD_address/ADD_address",
    })
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