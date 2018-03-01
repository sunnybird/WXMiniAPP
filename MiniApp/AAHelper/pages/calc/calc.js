// pages/calc/calc.js

const paymodel = require('payment.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberlist : [],
    amount : 0,
    totalpayCost: 0.0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.data.amount = options['number']
    // console.log(this.data.number)
    // add a head 
    var headmodule = new paymodel.paymentModel()
    headmodule.id = 0
    this.data.numberlist.push(headmodule)
    // this.data.amount = 5;
    for (var i = 1; i <= this.data.amount ; i++){
      var paymodule = new paymodel.paymentModel()
      paymodule.id = i
      this.data.numberlist.push(paymodule);
    }

    // add a foot
    var footmodel = new paymodel.paymentModel()
    footmodel.id = -1
    this.data.numberlist.push(footmodel)

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
    var index = parseInt(e.target.dataset.index)
    var costamount = e.detail.value
    console.log("index  ==" + index)
    console.log("costamount ==" + costamount)
    this.data.numberlist[index].costamunt = parseFloat(costamount)
    console.log(this.data.numberlist)

  },


  calc : function(e){
    var allcost = this.sumAllCost()
    console.log("allcost ==" + allcost)
    if (this.data.totalpayCost > 0){
      for (var i = 1; i <= this.data.amount; i++){

        var rate = this.data.numberlist[i].costamunt / allcost
        var payment =  rate * this.data.totalpayCost
        var paymentFormate = parseFloat(payment.toFixed(2))

        var param = {};
        var target = "numberlist[" + i + "].payamount"
        param[target] = paymentFormate;
        this.setData(param)
      }
    }
  },


  inoutSum : function(e){
    var sum = e.detail.value > 0 ? e.detail.value : 0;
    this.data.totalpayCost = parseFloat(sum)
    console.log("totalpayCost ==" + this.data.totalpayCost)
  },


   sumAllCost: function(){
   var allcost = 0.0
   for (var i = 1; i <= this.data.amount; i++){
     allcost += parseFloat(this.data.numberlist[i].costamunt)
   }
   return allcost
  }
})