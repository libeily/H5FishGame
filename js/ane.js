/**
 * Created by liyan on 16/12/5.
 */
var aneObj = function () {
  this.startx =[];
  this.x =[];
  this.endx =[];
  this.endy =[];
  this.alpha = 0;
  this.amp =[] //每个海葵的振幅不同
  this.color=[];
  this.colorExample=["#9DDBE8","#E6AD2E","purple","#AAD7FF","#FFD7AA","#D4219E"];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
  for (var i =0;i<this.num;i++){
    this.startx[i] = i* 16 +Math.random()*20 //[0,1)
    this.endx[i] = this.startx[i];
    this.endy[i] = canHeight - 200 + Math.random()*50;
    this.amp[i] = Math.random() *50 +20;
    this.color[i] =this.colorExample[Math.floor(Math.random()*7)] ;
  }
}
aneObj.prototype.draw =function () {
  this.alpha +=deltaTime *0.0008;
  var l =Math.sin(this.alpha)
  ctx2.save();
  ctx2.globalAlpha =0.3;
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.strokeStyle ='#3b154e';
  for(var i =0;i<this.num;i++){
    ctx2.beginPath();
    ctx2.shadowColor=this.color[i];
    ctx2.strokeStyle=this.color[i];
    ctx2.moveTo(this.startx[i],canHeight);
    this.endx[i] =this.startx[i] +l*this.amp[i]
    ctx2.quadraticCurveTo(this.startx[i],canHeight - 100,this.endx[i],this.endy[i])
    ctx2.stroke();
  }
  ctx2.restore();
}

