// components/mainlist/mian.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    },
    dataList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    options:{
      scrollY:true,
      upperThreshold:'50',
      scrollWithAnimation:true
    }
  },
  attached(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    datalists(e){
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
    }
  }
})
