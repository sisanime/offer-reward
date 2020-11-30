// pages/delivery/delivery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        title:'',
        tag:'',
        time:'',
        context:'',
        photo:'',

        array: ['快递代领', '学习互助', '拼车', '拼单','兼职'],
        objectArray: [
          {
            id: 0,
            name: '快递代领'
          },
          {
            id: 1,
            name: '学习互助'
          },
          {
            id: 2,
            name: '拼车'
          },
          {
            id: 3,
            name: '拼单'
          },
          {
            id:4,
            name:'兼职'
          }
        ],
        index: 0,
  },
titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  timeInput: function (e) {
    this.setData({
      time:e.detail.value
    })
  },

tagChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  contextInput:function(e){
    this.setData({
      context:e.detail.value
    })
  },
  pub: function(){
    const db = wx.cloud.database()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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