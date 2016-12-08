/**
 * Created by liyan on 16/12/5.
 */
var fruitObj = function () {
  this.alive =[];
  this.x =[];
  this.y =[];
  this.len =[];
  this.speed =[];
  this.fruitType =[];
  this.orange = new Image();
  this.blue = new Image();
  this.aneNum =[];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
  for(var i = 0 ;i<this.num;i++){
    this.alive[i] =false;
    this.x[i] =0;
    this.y[i] =0;
    this.speed [i] = Math.random() *0.07 +0.02;
    this.born(i);
  }
  this.orange.src = 'src/fruit.png';
  this.blue.src = 'src/blue.png'
}

fruitObj.prototype.draw = function () {// 找ane,grow然后fly
  for(var i =0;i<this.num;i++){
    if(this.alive[i]){
      if(this.fruitType[i] =='blue'){
        var pic = this.blue
      }else{
        var pic = this.orange
      }
      if(this.len[i]<= 14){
        this.x[i] = ane.endx[this.aneNum[i]];
        this.y[i] = ane.endy[this.aneNum[[i]]]
        this.len[i] += 0.01 *deltaTime;

      }else {
        this.y[i] -= this.speed[i]*deltaTime;
        // ctx2.drawImage(pic,this.x[i] -this.orange.width*0.5,this.y[i] - this.orange.height*0.5,this.len[i],this.len[i])
      }
      ctx2.drawImage(pic,this.x[i] -this.orange.width*0.5,this.y[i] - this.orange.height*0.5,this.len[i],this.len[i])

      if(this.y[i]<-10){
        this.alive [i] =false;
      }
    }
  }
}

fruitObj.prototype.born = function (i) {// 找ane,grow然后fly
  this.aneNum[i]= Math.floor(Math.random()*ane.num);//随机找到一个海葵
  this.len[i] = 0;
  this.alive[i] = true;
  if(Math.random() <0.2){
    this.fruitType [i] ='blue'
  }else{
    this.fruitType [i] ='orange'
  }
}

fruitObj.prototype.dead = function (i) {
  this.alive[i] =false
}

function fruitMonitor() {
  var num =0;
  for(var i =0;i<fruit.num;i++){
    if(fruit.alive[i]){
      num ++
    }
  }
  if(num <15){
    sendFruit()
    return ;
  }
}
function sendFruit() {
  for(var i =0;i<fruit.num;i++){
    if(!fruit.alive[i]){
      fruit.born(i);
      return;
    }
  }
}
