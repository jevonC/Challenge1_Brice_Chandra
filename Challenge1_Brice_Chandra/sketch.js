//aim: code to draw shapes based on mouse click points, for now only up to 3 points
//(it doesn't work though...)

var verticesX = []; //array for X values of shape vertices
var verticesY = []; //array for Y values of shape vertices

function setup() {
  createCanvas(500, 500);
  background(255);
}


function draw() {
  //whenever mouse is clicked, mouseX and mouseY of click location is appended to verticesX and verticesY array respectively
  if (mouseIsPressed == true) {
    append(verticesX, mouseX);
    append(verticesY, mouseY);
  }
  shape(); //call shape function
}


function shape() { 

  strokeWeight(4);
  stroke(0);
  fill(0);

//for now, we split the commands based on length of each array i.e. number of vertices chosen by mouse clicks
  
  if (verticesX.length == 1) { //if only 1 point chosen
    vertex(verticesX[verticesX.length - 1], verticesY[verticesY.length - 1]);
  }

  if (verticesX.length == 2) { //if only 2 points chosen
    beginShape();
    vertex(verticesX[verticesX.length - 1], verticesY[verticesY.length - 1]);
    vertex(verticesX[verticesX.length - 2], verticesY[verticesY.length - 2]);
    endShape();
  }

  if (verticesX.length == 3) { //if only 3 points chosen
    beginShape();
    vertex(verticesX[verticesX.length - 1], verticesY[verticesY.length - 1]);
    vertex(verticesX[verticesX.length - 2], verticesY[verticesY.length - 2]);
    vertex(verticesX[verticesX.length - 3], verticesY[verticesY.length - 3]);
    endShape();
  }
  
}