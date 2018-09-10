// pages/list/list.js
let heroDetail = require('../../data/detailList.js');
// console.log(heroDetail);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroInfo:{},
    index:0,
  },
  changeImg(event){
    console.log(event);
    // 获取索引
    let index = event.target.dataset.index;
    // 修改数据即可
    this.setData({
      index:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
   let heroInfo = heroDetail.filter(v=>{
      // 返回布尔决定这个数据要不要
      if(v.id==options.id){
        return true;
      }else{
        return false;
      }
    })[0]
    console.log(heroInfo);
    // 设置到deta中
    this.setData({
      heroInfo
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

  }
})