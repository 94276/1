// pages/ADD_address/ADD_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //新建地址时的默认值
    address:{
      id:0,
      name:'',
      mobile:'',
      Address:'',
      isDefault:false,
      checked:false,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    console.log(options)
    this.setData({ 
      address: JSON.parse(options.address)
    })
  },
  //验证地址信息方法
  checkAddress(){
    var address = this.data.address;
    var tipStr = "";
    if(address.name.length==0){
      tipStr="请输入收货人姓名";
    }
    else if(address.mobile.length==0){
      tipStr="请输入收货人手机号";
    }
    else if(address.Address.length==0){
      tipStr="请填写详细地址";
    }
    if(tipStr.length==0){
      return true
    } else{
      wx.showToast({
        icon: 'none',
        title: tipStr,
      })
    }
  },
  //点击事件
  //输入姓名
  inputName(e){
    this.data.address.name = e.detail.value;
    this.setData({
      address: this.data.address
    })
  },
  //输入手机号码
  inputMobile(e){
    this.data.address.mobile = e.detail.value;
    this.setData({
      address: this.data.address
    })
  },
  //输入地址
  inputAddress(e){
    this.data.address.Address = e.detail.value;
    this.setData({
      address: this.data.address
    })
  },
  //默认地址选项
  clickDefault(){
    if(this.data.address.isDefault){
      this.data.address.isDefault=false;
    }else{
      this.data.address.isDefault=true;
    }
    this.setData({
      address: this.data.address
    })
  },
  //保存
  addAddress(){
    if(!this.checkAddress()){
      return
    }
    var addressList = wx.getStorageSync('addressList');
    var address = this.data.address;
    var isAdd = false;//是否为添加地址
    var addressListNew =[];
    var indexDefault = -1;//默认选中地址的索引
    var indexCurrent = -1;//如果是编辑地址，获取当前编辑地址在地址列表中索引

    if(address.id==0){
      isAdd = true;
      address.id = Math.floor(Math.random()*1000 +1);
      if(addressList){
        addressList.forEach(function(v,index){
          if(v.isDefault){
            indexDefault = index;
          }
          //如果当前编辑的地址为默认选中地址，将其他所有地址选中状态清除
          if(address.isDefault){
            v.isDefault = false;
          }
        })
      }
      addressListNew = [address,...addressList];
      indexCurrent = 0;
    } else {
      //编辑地址
      addressList.forEach(function(v,index){
        if(v.isDefault){
          indexDefault = index;
        }
        //如果当前编辑的地址为默认选中地址，将其他所有地址选中状态清除
        if(address.isDefault){
          v.isDefault = false;
        }
        //如果是同一个地址，给旧的地址赋值新地址
        if(address.id == v.id){
          v.name = address.name;
          v.mobile =address.mobile;
          v.Address =address.Address;
          v.isDefault=address.isDefault;
          indexCurrent = index;
        }
      })
      addressListNew = addressList;
    }
    //如果新的地址列表中没有默认选中地址，将当前地址设置为默认选中地址
    if(indexDefault == -1){
      addressListNew[indexCurrent].isDefault = true;
    } else {
      //如果是编辑地址，并且有默认选中地址，并且默认选中地址和当前编辑地址是同一个，那么将当前地址设置为默认选中
      if(indexDefault ==indexCurrent && !isAdd){
        addressListNew[indexCurrent].isDefault = true;
      }
    }
    wx.setStorageSync('addressList', addressListNew);
    wx.showToast({
      icon:'success',
      title: '保存成功!',
      success(){
        wx.navigateBack({
          delta: 1,
        })
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