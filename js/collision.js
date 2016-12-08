/**
 * Created by liyan on 16/12/6.
 */
//大鱼吃果实
function momFruitsCollision(){
  if(!data.gameOver){
    for(var i =0;i<fruit.num;i++){
      if(fruit.alive[i]){
        var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
        if(l<400){
          fruit.dead(i);
          data.fruitNum++;
          mom.momBodyCount++;
          if(mom.momBodyCount >7){
            mom.momBodyCount =7;
          }
          if(fruit.fruitType[i] =='blue'){
            data.double =2;
          }
          wave.born(fruit.x[i],fruit.y[i]);
        }
      }
    }
  }
}
//大鱼喂小鱼
function momBabyCollision() {
  var l = calLength2(mom.x, mom.y, baby.x, baby.y);
  if( data.fruitNum && !data.gameOver ){
    if (l < 400) {
      baby.babyBodyCount =0;
      mom.momBodyCount =0;
      data.addScore();
      halo.born()
    }
  }
  
}
