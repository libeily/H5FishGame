
/**
 * Created by liyan on 16/12/5.
 */
var can1,can2,ctx1,ctx2;
var lastTime,deltaTime;
var canWidth,canHeight
var bgPic = new Image();
var ane ,fruit;
var mom, mx,my, momTail =[],momEye =[],momBodyOra =[],momBodyBlue =[];
var baby,babyTail =[],babyEye =[],babyBody =[];
var data;
var wave;
var halo;
var dust,dustPic =[];

document.body.onload = game;
function game() {
  init();
  lastTime = Date.now();
  deltaTime =0;
  gameLoop()
}

function init() {
  can1 = document.getElementById('canvas1'); //交互，鱼，圆圈
  ctx1 = can1.getContext('2d'); //背景，海藻，食物
  ctx1.fillStyle= 'white';
  ctx1.font ='30px Verdana';
  ctx1.textAlign ='center'

  can2 = document.getElementById('canvas2');
  ctx2 = can2.getContext('2d');
  bgPic.src ='src/background.jpg'

  canWidth = can1.width;
  canHeight = can1.height;
  can1.addEventListener('mousemove',onMouseMove,false);
  
  ane = new aneObj();
  ane.init();

  fruit = new fruitObj();
  fruit.init();

  mom = new momObj();
  mom.init();
  mx = canWidth*0.5;
  my = canHeight*0.5;

  for(var i =0;i<8;i++){
    babyTail[i] = new Image();
    babyTail[i].src = 'src/babyTail'+i+'.png'
  }
  for(var i =0;i<2;i++){
    babyEye[i] = new Image();
    babyEye[i].src = 'src/babyEye'+i+'.png'
  }
  for(var i =0;i<20;i++){
    babyBody[i] = new Image();
    babyBody[i].src = 'src/babyFade'+i+'.png'
  }
  baby = new babyObj();
  baby.init();

//Mom 尾巴和眨眼睛
  for (var i = 0; i < 8; i++) {
    momTail[i] = new Image();
    momTail[i].src = 'src/bigTail' + i + '.png'
  }
  for (var i = 0; i < 2; i++) {
    momEye[i] = new Image();
    momEye[i].src = 'src/bigEye' + i + '.png'
  }
  for(var i =0;i<8;i++){
    momBodyOra[i]= new Image()
    momBodyBlue[i] = new Image();
    momBodyOra[i].src = 'src/bigSwim'+i+'.png'
    momBodyBlue[i].src = 'src/bigSwimBlue'+i+'.png'
  }
  data = new dataObj();
  wave = new waveObj();
  wave.init();
  halo = new haloObj();
  
  dust = new dustObj();
  for(var i =0;i<7;i++){
    dustPic[i]= new Image()
    dustPic[i].src = 'src/dust'+i+'.png'
  }
  dust.init()
}



function onMouseMove(e) {
  if(!data.gameOver){
    if(e.offSetX || e.layerX){
      mx = e.offSetX ? e.offSetX:e.layerX;
      my = e.offSetY ? e.offSetY:e.layerY;
    }
  }
}

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  var now = Date.now();
  deltaTime = now-lastTime;
  if(deltaTime >40) deltaTime =40
  lastTime =now;
  drawBackground()
  ane.draw();
  fruitMonitor();
  fruit.draw();
  ctx1.clearRect(0,0,canWidth,canHeight)
  mom.draw();
  momFruitsCollision();
  momBabyCollision()
  baby.draw();
  data.draw();
  wave.draw();
  halo.draw();
  dust.draw();
}
