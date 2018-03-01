// pages/calc/calc.js

const paymodel = require('payment.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberlist : [],
    amount : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.data.amount = options['number']
    // console.log(this.data.number)
    // add a head 
    this.data.numberlist.push(new paymodel.paymentModel())


    this.data.amount = 5;
    for (var i = 0; i < this.data.amount ; i++){
      this.data.numberlist.push(new paymodel.paymentModel());
    }
    // add a foot
    this.data.numberlist.push(new paymodel.paymentModel())

    console.log(this.data.numberlist)

    this.setData({
      numberlist: this.data.numberlist
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

  inputCostAmount:function(e){
    console.log(e)
    var index = e.target.dataset.index
    var costamount = e.detail.value
    console.log("index  ==" + index)
    console.log("costamount ==" + costamount)
    this.data.numberlist[index].costamunt = costamount
    console.log(this.data.numberlist)

  },


  calc : function(e){



  },

  inoutSum : function(e){


    
  }
})