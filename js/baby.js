/**
 * Created by liyan on 16/12/6.
 */
var babyObj = function () {
  this.x;
  this.y;
  this.angle ;
  this.babyBody = new Image();
  this.babyTailTimer = 0;
  this.babyTailCount = 0;
  this.babyEyeTimer = 0;
  this.babyEyeCount = 0;
  this.babyInterval = 1000;
  this.babyBodyTimer = 0;
  this.babyBodyCount = 0;
}
babyObj.prototype.init = function () {
  this.x =canWidth*0.5 -50;
  this.y =canHeight*0.5 +50;
  this.angle =0;
  this.babyBody.src ='src//babyFade0.png'
}

babyObj.prototype.draw = function () {
  this.x=lerpDistance(mom.x,this.x,0.98);
  this.y=lerpDistance(mom.y,this.y,0.98);
  var deltaY = mom.y -this.y;
  var deltaX =mom.x -this.x;
  var beta = Math.atan2(deltaY,deltaX)+Math.PI//鼠标和大鱼之间的角度差
  this.angle = beta;

  //baby tail count
  this.babyTailTimer += deltaTime;
  if(this.babyTailTimer >50){
    this.babyTailCount = (this.babyTailCount+1)%8;
    this.babyTailTimer %=50;
  }
  var babyTailCount = this.babyTailCount

  //baby blink count

  this.babyEyeTimer += deltaTime;
  if(this.babyEyeTimer >this.babyInterval){
    this.babyEyeCount =(this.babyEyeCount +1) %2;
    this.babyEyeTimer = 0;
    if(this.babyEyeCount ==0){
      this.babyInterval = Math.random()*1500+2000;
    }else{
      this.babyInterval =200;
    }
  }
  var babyEyeCount = this.babyEyeCount;

  //baby body fade

  this.babyBodyTimer += deltaTime;
  if(this.babyBodyTimer >300){
    this.babyBodyCount =this.babyBodyCount +1;
    if(this.babyBodyCount >19){//  当小鱼的身体颜色完全变白时,游戏结束
      this.babyBodyCount =19;
      data.gameOver = true;
    }
    this.babyBodyTimer = 0;
  }
  var babyBodyCount = this.babyBodyCount;

  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle)
  ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5 +24,-babyTail[babyTailCount].height*0.5);
  ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5)
  ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width *0.5, -babyEye[babyEyeCount].height *0.5)
  ctx1.restore();


}