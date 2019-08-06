// components/swipers/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    options: {
      indicatorDots: true,
      indicatorColor: '#eee',
      indicatorActiveColor: "#FFBE00",
      autoplay: true,
      interval: '5000',
      duration: "200",
      circular: true
    },
    listPages: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  //在组件布局完成后执行
  ready(){
    let that = this;
    wx.request({
      method:"GET",
      url: 'https://douban.uieee.com/v2/movie/weekly',
      header: {
        "Content-Type": "application/xml" // 默认值
      },
      success(res) {
        //console.log(res);
        that.setData({
          listPages: res.data.subjects
        })
      },
      fail(error) {
        console.log(error);
      }
    })
  }
})
