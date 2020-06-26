var s;
var scl = 10;
var food;
var UpDown = true;
var LeftRight = true;

function setup(){

	createCanvas(500  , 500);
	frameRate(5);
	s = new snake();
	foodLocation();
	
}

function  foodLocation(){

	var col = random(50);
	var row = random(50);
	// if(row <= 4){
	// 	print(row);
	// 	print("no not there ");
	// 	foodLocation();
	// }
	food = createVector(floor(col)*10 , floor(row)*10); 

	for (var i = 0 ; i < s.obj.length ; i++){
		if( dist( s.obj[i].x , s.obj[i].y , food.x , food.y)<10){
				print("on Body");
				foodLocation();
			}
	}
}     


function draw(){
	
	background(190);
	s.update();
	s.move();
	s.hit();
	s.score();

	if(s.eat(food)){
		foodLocation();
	}

	noStroke();
	fill(255, 238, 54);
	rect(food.x , food.y , scl ,scl );

}

function touchStarted() {
	loop();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		if(UpDown){
			s.dir(0 , 1 );
			UpDown = false;
			LeftRight = true;
		}
	}
	
	if(keyCode === UP_ARROW){
		if(UpDown){
			s.dir(0 , -1 );
			UpDown = false;
			LeftRight = true;
		}
	}
	
	if(keyCode === LEFT_ARROW){
		if(LeftRight){
			s.dir(-1  , 0);
			LeftRight = false;
			UpDown = true;
		}
	}

	if(keyCode === RIGHT_ARROW){
		if(LeftRight){
			s.dir(1  , 0);
			LeftRight = false;
			UpDown = true;
		}
	}
}