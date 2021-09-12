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

  noStroke();
  }

function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
function mousePressed(){
    fill(col_list[col])
    ellipse(mouseX, mouseY,size*1.05,size*1.05)
    size = 100
    col = col +1
    if ( col > 4) {
       col = 0
    }



}

function mouseDragged(){
    fill(col_list[col+1])
    ellipse(mouseX, mouseY,size,size)
}

function mouseReleased(){
    fill(col_list[col])
    ellipse(mouseX, mouseY,size,size)
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  size += event.delta/20;
  //uncomment to block page scrolling
  //return false;
}
