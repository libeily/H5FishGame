/**
 * Created by liyan on 2016/12/7.
 */
var haloObj =function () {
  this.x = [];
  this.y = [];
  this.alive = [];
  this.r =[];
  this.num =10;
}

haloObj.prototype.init = function () {
  for(var i =0;i<this.num;i++){
    this.alive[i] = false;
    this.r[i] = 0
  }
}

haloObj.prototype.draw = function () {
  ctx1.save();
  ctx1.lineWidth = 2;
  ctx1.shadowBlur = 10;
  ctx1.shadowColor ='white'
  for(var i =0;i<this.num;i++){
    if (this.alive[i]){//画圈圈
      this.r[i] +=deltaTime * 0.04;
      if(this.r[i] >100){
        this.alive[i] =false;
        continue;
      }
      var alpha = 1- this.r[i]/100 //完全透明
      ctx1.beginPath();
      ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
      ctx1.closePath();
      ctx1.strokeStyle ='rgba(203,91,0,'+alpha +')';
      ctx1.stroke();
    }
  }
  ctx1.restore();
}

haloObj.prototype.born = function () {
  for(var i =0;i<this.num;i++){
    if (!this.alive[i]){//false 就可以使用
      this.alive[i] = true;
      this.r[i] =10;
      this.x[i] =baby.x;
      this.y[i] =baby.y;
      return;
    }
  }
}