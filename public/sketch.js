//BUILDING WEB-BASED DRAWING INSTRUMENTS TEMPLATE
//BY GALO CANIZARES
//by JESSE BASSETT

var egg = 2;
var ArcStorage = [];
var ClickCoordsX = [0,0,0]
var ClickCoordsY = [0,0,0]
var n = -1
var sssss = 0

var tempX = 0
var tempY = 0
var tempX2 = 0
var tempY2 = 0
var tempX3 = 0
var tempY3 = 0


function setup() {
  createCanvas(window.windowWidth, window.windowHeight);
  console.log(n)
  noFill();
}



function draw() {
  background(220);

  for(var i = 0; i < ArcStorage.length; i++) {
    ArcStorage[i].render();
  }




  if ( n == -1){
    ellipse(mouseX, mouseY, 10, 10);

  }

  if ( n == 0){
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(tempX, tempY, 10, 10);
    sssss =2 *  dist(tempX, tempY, mouseX, mouseY)
    arc(tempX, tempY, sssss, sssss , 0, TWO_PI)

    console.log(n)

  }

  if ( n == 1){

    ellipse(tempX2, tempY2, 20, 20);
    ellipse(tempX, tempY, 10, 10);


    let v1 = createVector(1, 0);
    let v2 = createVector(tempX-tempX2, tempY-tempY2);
    angle1 = v1.angleBetween(v2);

    v2 = createVector(-tempX2+mouseX, -tempY2+mouseY);
    angle2 = v1.angleBetween(v2);


    arc(tempX2, tempY2, sssss, sssss , angle1, angle2)


  }



  if ( n == 2){

  //solve line eqn for net point
  M = (  (tempY3-tempY)/(tempX3-tempX)  );
  M2 = ( - (tempX3-tempX)/(tempY3-tempY)  );

    B = tempY3 - M *tempX3;
    B2 = mouseY - mouseX * M2;

    noyX = (B2 - B)/(M - M2 );
    noyY = M2 * noyX + B2;

    ellipse(noyX, noyY, 10, 10);



    nuyX = sssss/2 * cos(angle2) + tempX3
    nuyY = sssss/2 * sin(angle2) + tempY3



    ellipse(nuyX, nuyY, 10, 10);


    sss = 2 * dist(noyX, noyY,nuyX, nuyY)

   arc(noyX, noyY, sss, sss , 0, TWO_PI)

  }




  if (n ==3){

    ellipse(noyX, noyY, 10, 10);
    ellipse(nuyX, nuyY, 10, 10);

    let v1 = createVector(1, 0);
    let v2 = createVector(nuyX-noyX, nuyY-noyY);
    angle1 = v1.angleBetween(v2);

    v2 = createVector(-noyX+mouseX, -noyY+mouseY);
    angle2 = v1.angleBetween(v2);

    arc(noyX, noyY, sss, sss , angle2, angle1)
  }

}



function mousePressed() {

  tempX4 = tempX3;
  tempY4 = tempY3;

  tempX3 = tempX2;
  tempY3 = tempY2;

  tempX2 = tempX;
  tempY2 = tempY;

  tempX = mouseX;
  tempY = mouseY;


  n = n+1
  if (n > 3){
    n = 0
  }

  //console.log(tempX,tempY)
  //console.log(n)

}

function mouseReleased() {

   if (n ==2){
     ArcStorage.push(new myArc (tempX3, tempY3, sssss , angle1, angle2)   );

  }



   if (n ==3){
      ArcStorage.push(new myArc(noyX, noyY, sss , angle2, angle1)   );



  }



}


function myArc(startX, startY, scaleZ, start,end ) {
  this.x1 = startX;
  this.y1 = startY;
  this.s1 = scaleZ;
  this.st = start;
  this.sp = end;

  this.render = function() {
    arc(this.x1, this.y1, this.s1, this.s1,this.st ,this.sp );
  }
}




function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}

function jeb() {
  arc(100,100, 100, 100, -4, HALF_PI);
  noFill();
  arc(mouseX, mouseY, 60, 60, HALF_PI, PI);
  //arc(x, y, w, h, start, stop, [mode], [detail])
  }
