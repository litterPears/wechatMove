// components/video/video.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String,
        value:""
      },
      urlHref:{
        type:String,
        value:""
      },
    posterImg:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    options:{
      controls:true,
      autoplay:false,
      loop:false,
      muted:false,
      showFullscreenBtn:true,
      showMuteBtn:true,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
