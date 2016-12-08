/**
 * Created by liyan on 2016/12/7.
 */
var waveObj = function () {
  this.x = [];
  this.y = [];
  this.alive = [];
  this.r =[];
  this.num =10;
  // this.alpha =[]
}
// waveObj.prototype.num =10;
waveObj.prototype.init = function () {
  for(var i =0;i<this.num;i++){
    this.alive[i] =false;
    this.r[i] = 0
  }
}

waveObj.prototype.draw = function () {
  ctx1.save();
  ctx1.lineWidth = 2;
  ctx1.shadowBlur = 10;
  ctx1.shadowColor ='white'
  for(var i =0;i<this.num;i++){
    if (this.alive[i]){//画圈圈
      this.r[i] +=deltaTime * 0.04;
      if(this.r[i] >50){
        this.alive[i] =false;
        continue;
      }
      var alpha = 1- this.r[i]/50 //完全透明
      ctx1.beginPath();
      ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
      ctx1.closePath();
      ctx1.strokeStyle ='rgba(255,255,255,'+alpha +')';
      ctx1.stroke();
    }
  }
  ctx1.restore();
}

waveObj.prototype.born = function (x,y) {
  for(var i =0;i<this.num;i++){
    if (!this.alive[i]){//false 就可以使用
      this.alive[i] = true;
      this.r[i] =10;
      this.x[i] =x;
      this.y[i] =y;
      return;
    }
  }
}