var mybackground;
var mytick;
var r;
var cr;
var value=0;
var x;
var y;
var value=0;


function mySecond(x,y,distance,r){
  
  push();
  var s = second();
  translate(distance*cos(s*6),distance*sin(s*6));
  
  noStroke();
  fill(255);
  ellipse(x,y,r);
  
  pop();
  
  	push();
  	rotate(90);
		for(var t=0; t<=second()-1; t+=1) {
						push();
						translate(distance*cos(t*6),distance*sin(t*6));	
						rotate(t*6);
						pop();
			}
	pop();
  
}
function myMinute(x,y,distance){
  
  push();
  var m = minute();
  translate(distance*cos(m*6),distance*sin(m*6));
  
  noStroke();
  fill(255);
  ellipse(x,y,15);
  
  pop();
  
  	push();
		for(var t=0; t<=minute()-1; t+=1) {
						push();	
						translate(distance*cos(t*6),distance*sin(t*6));	
						rotate(t*6);
						pop();
			}
	pop();
  
}

function myHour(x,y,distance){
  
  push();
  var h = hour();
  translate(distance*cos(h*6),distance*sin(h*6));
  
  noStroke();
  fill(255);
  ellipse(x,y,25);
  
  pop();
  
  	push();
		for(var t=0; t<=hour()-1; t+=1) {
						push();	
						translate(distance*cos(t*6),distance*sin(t*6));	
						rotate(t*6);
						
					
						
						pop();
			}
	pop();
  
}
function myCycle(cr,w){


 noFill();
 ellipse(400,300,cr);
 strokeWeight(w);
 stroke(250);

}

function correctime(){
  background(0);
  x=0;
  y=0;
  
    myCycle(160,1);
    myCycle(300,3);
    myCycle(390,1);
  
 
  translate(400,300);
  rotate(-90);
  mySecond(x,y,195,12);
  mySecond(x,y,165,11);
  mySecond(x,y,135,10);
  mySecond(x,y,105,9);
  mySecond(x,y,75,8);
  mySecond(x,y,45,7);
  mySecond(x,y,15,6);
   
  
  myMinute(x,y,150);
  
  
  
  myHour(x,y,75);
}

function randomdot(){
  background(0);
  
  myCycle(300,2);
  myCycle(390,1);
  myCycle(160,1);
  
  x1=800*random(0.2,0.8);
  x2=800*random(0.2,0.8);
  x3=800*random(0.2,0.8);
  x4=800*random(0.2,0.8);
  x5=800*random(0.2,0.8);
  x6=800*random(0.2,0.8);
  x7=800*random(0.2,0.8);
  x8=800*random(0.2,0.8);
  x9=800*random(0.2,0.8);
  
  y1=800*random(0.2,0.8);
  y2=800*random(0.2,0.8);
  y3=800*random(0.2,0.8);
  y4=800*random(0.2,0.8);
  y5=800*random(0.2,0.8);
  y6=800*random(0.2,0.8);
  y7=800*random(0.2,0.8);
  y8=800*random(0.2,0.8);
  y9=800*random(0.2,0.8);
  
  mySecond(x1,y1,random(),12);
  mySecond(x2,y2,random(),11);
  mySecond(x3,y3,random(),10);
  mySecond(x4,y4,random(),9);
  mySecond(x5,y5,random(),8);
  mySecond(x6,y6,random(),7);
  mySecond(x7,y7,random(),6);
   
  
  myMinute(x8,y8,150);
  myHour(x9,y9,75);
  
}
function mouseClicked() {
  if(value==0){
    value=1;
  }else{
  value=0;
  }
}

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(1);
  background(0);
  myCycle(0,2);
  myCycle(390,1);
  myCycle(300,2);
  myCycle(160,1);

}

function draw() {
  
  if(value==0 ){
    randomdot();
  }else{
   correctime();
    
  }

}











