var light, death_note,L,chief, bg, column_1, column_2, column_3,invisible, coin_1, coin_2,coin_3,coin_4,coin_5,coin_6,coin_7,coin_8,score


function preload() {
  lighty = loadImage("Light yagami.png");
  death = loadImage("Death Note.png")
  bg1 = loadImage ("bg_!.jpg")
  l = loadImage ("L.png")
  soichiro = loadImage("soichiro yagami.png")
  column = loadImage("Road.png")
  column_4 = loadImage("Road.png")
  coin = loadImage("yen.png")
}
function setup() {
  createCanvas(1000,600);

light = createSprite(40,40)
light.addImage (lighty);
light.scale = 0.4;
light.x = 60;
light.y = 200;

death_note = createSprite (900,500,40,40)
death_note.addImage(death);
death_note.scale = 0.5

L = createSprite(600,300,20,20)
L.addImage (l)
L.scale = 0.3
L.velocityX = 5;
L.velocityY = 0;

chief = createSprite(353,500,20,20);
chief.addImage(soichiro);
chief.scale = 0.4
chief.velocityX = 5;
chief.velocityY = 0;

column_1 = createSprite(265,320,1900,10);
column_1.addImage(column)
column_1.scale = 1.3

column_2 = createSprite(790,500,1900,10);
column_2.addImage(column);
column_2.scale = 1.3

column_3 = createSprite(545,695,1000,10);
column_3.addImage(column_4);
column_3.scale = 1.3

invisible = createSprite(680,430,230,10);

coin_1 = createSprite(215,160,20,20);
coin_1.addImage(coin);
coin_1.scale = 0.1;

coin_2 = createSprite(355,160,20,20);
coin_2.addImage(coin);
coin_2.scale = 0.1;

coin_3 = createSprite(595,350,20,20);
coin_3.addImage(coin);
coin_3.scale = 0.1;

coin_4 = createSprite(835,350,20,20);
coin_4.addImage(coin);
coin_4.scale = 0.1;

coin_5 = createSprite(100,540,20,20);
coin_5.addImage(coin);
coin_5.scale = 0.1;

coin_6 = createSprite(300,540,20,20);
coin_6.addImage(coin);
coin_6.scale = 0.1;

coin_7 = createSprite(500,540,20,20);
coin_7.addImage(coin);
coin_7.scale = 0.1;

coin_8 = createSprite(700,540,20,20);
coin_8.addImage(coin);
coin_8.scale = 0.1;

score = 0;

}

function draw() {
  edges = createEdgeSprites();

background(bg1); 

textSize(20);
fill("black")
text("Score: "+ score,890,40);

move();
light.collide(column_1);
light.collide(column_2);
light.collide(column_3);
light.collide(edges[0]);
light.collide(edges[1]);
light.collide(edges[2]);
light.collide(edges[3]);



L.bounceOff(edges[0]);
L.bounceOff(edges[1]);
L.bounceOff(edges[2]);
L.bounceOff(edges[3]);
L.bounceOff(column_1);
chief.bounceOff(edges[0]);
chief.bounceOff(edges[1]);
chief.bounceOff(edges[2]);
chief.bounceOff(edges[3]);
chief.bounceOff(invisible);


column_1.setCollider('rectangle',-13,-85,380,15);
column_2.setCollider('rectangle',0,-80,400,20);
column_3.setCollider('rectangle',0,45,1250,290);
death_note.setCollider('circle',00,0,100)

column_4.resize(1250,290);
//column_1.debug = true;
//light.debug = true;
//chief.debug = true;
//L.debug = true;


light.depth = light.depth+1
chief.depth = chief.depth +1;
//death_note.debug = true;
invisible.visible = false;

scoreboard();
destroy();
reset();
win();
drawSprites();
}





function move (){

  if (keyDown (RIGHT_ARROW)){
    light.x = light.x+15;
  }
  
  if(keyDown (LEFT_ARROW)){
    light.x = light.x -15;
  }
  
  if (keyDown (UP_ARROW)){
    light.y = light.y - 15;
  }
  
  if (keyDown (DOWN_ARROW)){
    light. y =light.y + 15;
  }
}



function scoreboard() {
  if (light.isTouching(coin_1)){
score = score +10
  }

  if (light.isTouching(coin_2)){
    score = score +10
      }

      if (light.isTouching(coin_3)){
        score = score +10
          }

          if (light.isTouching(coin_4)){
            score = score +10
              }

              if (light.isTouching(coin_5)){
                score = score +10
                  }

                  if (light.isTouching(coin_6)){
                    score = score +10
                      }

                      if (light.isTouching(coin_7)){
                        score = score +10
                          }

                          if (light.isTouching(coin_8)){
                            score = score +10
                              }
                              if (light.isTouching(death_note)){
                                score = score + 120
                                  }
                            }




function destroy() {
if (light.isTouching(coin_1)){
    coin_1.destroy();
     }
   if (light.isTouching(coin_2)){
    coin_2.destroy();
      }

      if (light.isTouching(coin_2)){
        coin_2.destroy();
          }

          if (light.isTouching(coin_3)){
            coin_3.destroy();
              }


              if (light.isTouching(coin_4)){
                coin_4.destroy();
                  }

                  if (light.isTouching(coin_5)){
                    coin_5.destroy();
                      }

                      if (light.isTouching(coin_6)){
                        coin_6.destroy();
                          }

                          if (light.isTouching(coin_7)){
                            coin_7.destroy();
                              }

                              if (light.isTouching(coin_8)){
                                coin_8.destroy();
                                  }

                                  if(light.isTouching(death_note)){
                                    death_note.destroy();
                                  }
                                    }

function reset() {
if (light.isTouching(L)){
light.x=60;
light.y=100;
score = score - 10
}

if (light.isTouching(chief)) {
light.x=60;
light.y=100;
score = score - 10
}
}

function win(){
if (score >= 150) {
  textSize(40);
fill("black")
text("I Will Be The God Of This New World!",170,300);
L.velocityX=0;
L.velocityY=0;
L.x = 900;
L.y = 290;
chief.velocityY=0
chief.velocityX=0;
light.x=60;
light.y=100;
}
}
