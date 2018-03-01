// pages/main/main.js
Page({
  data :{
    peoples:0
  },

  enterCalc: function(e){
    wx.navigateTo({
      url: '../calc/calc?number=' + this.data.peoples
    })
  },

  inputAmount: function(e){
    var number = e.detail.value
    this.data.peoples = number
  }
})