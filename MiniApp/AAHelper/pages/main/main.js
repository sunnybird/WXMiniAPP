// pages/main/main.js
Page({
  data: {
    peoples: 0
  },

  enterCalc: function (e) {
    if (this.data.peoples > 0) {
      wx.navigateTo({
        url: '../calc/calc?number=' + this.data.peoples
      })
    }else{

      wx.showToast({
        title: 'AA 总人数应大于 0',
        icon:'none'
      })
      wx.vibrateShort({})

    }
  },

  onShow: function () {
    console.log("onShow")
    this.setData({
      "inputvalue": ""
    })

  },

  inputAmount: function (e) {
    var number = e.detail.value
    this.data.peoples = parseInt(number)
  }
})