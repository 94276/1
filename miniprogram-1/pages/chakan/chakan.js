// pages/chakan/chakan.js
//连接数据库
const DB = wx.cloud.database().collection("shiwuzhaoling_shiwu")
let name1 = ""
let id = ""
let id1 = ""
let userimage = ""
Page({
  data:{
    datalist: [],
    detail: ''
  },
  //获取用户输入的name
  addName(event){
    name1 = event.detail.value
  },
  //获取用户输入的特定的open_id
  getoneData(event){
    console.log("要查询的open_id",event.detail.value)
    id1 = event.detail.value
  },
  //获取用户输入的删除的ID号
  delDataInput(event){
    console.log("要删除的ID",event.detail.value)
    id = event.detail.value
  },
  //增加数据
  addData(){
    DB.add({
      data:{
        name: name1
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      }
    })
  },
  //删除数据
  delData(){
    DB.doc(id).remove({
      success(res){
        console.log("删除数据成功",res)
      },
      fail(res){
        console.log("删除数据失败",res)
      }
    })
  },
  //查询数据
  getData(){
      //doc(id1)
      let that = this
      DB.get({
        success(res){
          console.log("查询数据成功",res)
          that.setData({
            datalist: res.data
          })
          //console.log("查询数据成功",res.data.name)
        },
        fail(res){
          console.log("查询数据失败",res)
        }
      })
  },
  cloud_getData(){
    let that = this
    wx.cloud.callFunction({
      name: "chaxun",
      success(res){
        console.log("查询数据成功",res)
        that.setData({
          datalist: res.data
        })
        //console.log("查询数据成功",res.data.name)
      },
      fail(res){
        console.log("查询数据失败",res)
      }
    })
  },
  

  onLoad(options){
    console.log("详情页接受的id",options.id)
    DB.doc(options.id).get().then(res=>{
      console.log("详情页打印成功",res.data)
      this.setData({
        detail: res.data
      })
    })
    .catch(res=>{
      console.log("详情页打印失败",res)
    })
  }
})