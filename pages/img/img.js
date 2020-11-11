// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:'张三'
      },
      {
        id:1,
        name:'李四'
      },
      {
        id:2,
        name:'王五'
      }
    ],
    checkedList:[]
  },
  hodelClick(e){
    const checkedList=e.detail.value
    this.setData({
      checkedList,
    })
  }

})