// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.options.id);
    let id = this.options.id;
    let that = this;
    wx.request({
      method: "GET",
      url: 'https://douban.uieee.com/v2/movie/subject/'+id,
      header: {
        "Content-Type": "application/xml" // 默认值
      },
      success(res){
        console.log(res.data);
        that.setData({
          detailList:res.data
        })
      },
      fail(error){
        console.log(error);
      }
    })
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

  },
  //任务详情
  presonMessage(e){
    let ids = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/preson/preson?id='+ids
    })
  }
})