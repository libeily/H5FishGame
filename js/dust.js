/**
 * Created by liyan on 2016/12/7.
 */
var dustObj = function () {
  this.x= [];
  this.y = [];
  this.amp = [];//振幅
  this.num = []; //图片来源
  this.alpha;//正弦函数角度为0
  this.total = 30;
}

dustObj.prototype.init = function () {
  this.alpha = 0;
  for (var i =0;i<this.total;i++) {
    this.x[i] = Math.random() * canWidth
    this.y[i] = Math.random() * canHeight
    this.amp[i] = 20 + Math.random() * 25;
    this.num[i] = Math.floor(Math.random() * 7) //[0,7)
  }
}

dustObj.prototype.draw =function () {
  this.alpha += deltaTime *0.0008;
  var l = Math.sin(this.alpha);
  for(var i =0;i<this.total;i++){
    ctx1.drawImage(dustPic[this.num[i]],this.x[i] + l* this.amp[i],this.y[i]);
  }
  ctx2.restore();
}
