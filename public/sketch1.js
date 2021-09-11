//BUILDING WEB-BASED DRAWING INSTRUMENTS TEMPLATE
//BY GALO CANIZARES
//by JESSE BASSETT


let detailX;
var myvar = "wowwwy wow"
var size = 100
var x = 0
var y =0
var col = 0
var col_list = ['#528047','#54CCC9','#7BCC68','#2E807E','#CD665E','#ffffff']

function setup() {

  pixelDensity(1);

  canvasIMG = createCanvas(window.windowWidth, window.windowHeight);
  //background(bgr, bgg, bgb, alph);
  background(205, 102, 94);

}

function draw() {
  ellipse(mouseX, mouseY, 3, 300);
  ellipse(mouseX, mouseY, 300, 3);
  ellipse(mouseX-50, mouseY-50, 50, 50);
  ellipse(mouseX+50, mouseY-50, 50, 50);
  ellipse(mouseX-50, mouseY+50, 50, 50);
  ellipse(mouseX+50, mouseY+50, 50, 50);

  ellipseMode(CORNER);
  fill(255);
  ellipse(25, 25, 50, 50); // Outer white ellipse
  ellipseMode(CORNERS);
  fill(100);
  ellipse(25, 25, 50, 50); // Inner gray ellipse
  }

function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
