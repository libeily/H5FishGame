/**
 * Created by liyan on 16/12/6.
 */
var momObj = function () {
  this.x;
  this.y;
  // this.bigBody = new Image();
  this.momTailTimer = 0;
  this.momTailCount = 0;
  this.momInterval = 1000;
  this.momEyeTimer = 0;
  this.momEyeCount = 0;
  this.momBodyCount = 0;
}
momObj.prototype.init = function () {
  this.x =canWidth*0.5;
  this.y =canHeight*0.5;
  this.angle =0;
}

momObj.prototype.draw = function () {
  this.x=lerpDistance(mx,this.x,0.97);
  this.y=lerpDistance(my,this.y,0.9);
  var deltaY = my -this.y;
  var deltaX = mx -this.x;
  var beta = Math.atan2(deltaY,deltaX)+Math.PI//鼠标和大鱼之间的角度差
  this.angle = beta;
  this.momTailTimer += deltaTime;
  if(this.momTailTimer >50){
    this.momTailCount = (this.momTailCount+1)%8;
    this.momTailTimer %=50;
  }
  var momTailCount = this.momTailCount;

  this.momEyeTimer += deltaTime;
  if(this.momEyeTimer >this.momInterval){
    this.momEyeCount =(this.momEyeCount +1) %2;
    this.momEyeTimer = 0;
    if(this.momEyeCount ==0){
      this.momInterval = Math.random()*1500+2000;
    }else{
      this.momInterval =200;
    }
  }
  var momEyeCount = this.momEyeCount;
  var momBodyCount = this.momBodyCount;
  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle)
  ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5 +30,-momTail[momTailCount].height*0.5);
  if(data.double ==1){//判断吃到的果实类型
    ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5)
  }else{
    ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5)
  }

  // ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5)
  ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5)
  
  ctx1.restore();
}