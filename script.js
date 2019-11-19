const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
var foodMove;

const unit = 20;

// real random food
var random = {
	x: Math.floor(Math.random() * 30) * unit, 
	y: Math.floor(Math.random() * 30) * unit,
};

function randomFood() {
ctx.fillStyle = "rgb(253, 253, 253)"
return ctx.fillRect(random.x, random.y, unit, unit);
};



//snake

var snakeCoordinates = {
	x: 4 * unit,
	y: 4 * unit
};
var firstSnake = true;
if (firstSnake) {
	ctx.fillStyle = "rgb(61, 141, 50)";
	ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit)
};


document.addEventListener('keydown', snakeMove);

function snakeMove(event) {
	firstSnake = false;
	ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	
	var x = event.keyCode;
	
	if (x === 37) {
		snakeCoordinates.x -= unit;
		
		if (foodX === snakeCoordinates.x && foodY === snakeCoordinates.y){
			//randomFoodInSnake(randomFood.x, randomFood.y);
			addFoodX();
		}
		
	} else if (x === 38) {
		snakeCoordinates.y -= unit;	
		if (foodX === snakeCoordinates.x && foodY === snakeCoordinates.y){
			//randomFoodInSnake(randomFood.x, randomFood.y);
			
			addFoodY();
			
		}
		
	} else if (x === 39) {
		snakeCoordinates.x += unit;
		if (foodX === snakeCoordinates.x && foodY === snakeCoordinates.y){
			//randomFoodInSnake(randomFood.x, randomFood.y);
			addFoodXright();

			
			
		}
	} else if (x === 40) {
		snakeCoordinates.y += unit;	
		if (foodX === snakeCoordinates.x && foodY === snakeCoordinates.y){
			//randomFoodInSnake(randomFood.x, randomFood.y);
			addFoodYdown();
	}
	};
		
	ctx.fillStyle = "rgb(61, 141, 50)";
	

	return ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
};



//food in snake
var randomFood = {
	x: Math.floor(Math.random() * 30) * unit, 
	y: Math.floor(Math.random() * 30) * unit,
};

var foodX = randomFood.x;
var foodY = randomFood.y;


var randomFoodInSnake = function(x, y) {

ctx.fillStyle = "rgb(253, 253, 253)"
return ctx.fillRect(x, y, unit, unit);
};

randomFoodInSnake(foodX, foodY);








function addFoodX() {
	
	//if (randomFood.x === snakeCoordinates.x && randomFood.y === snakeCoordinates.y) {
	ctx.clearRect(foodX, foodY, unit, unit);
	//ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	snakeCoordinates.x === foodX;
	foodX -= unit;
	ctx.fillStyle = "rgb(61, 141, 50)"
	ctx.fillRect(foodX, foodY, unit, unit);
	console.log("food", randomFood, foodX);
	console.log("snake", snakeCoordinates);
	};


function addFoodXright() {
	
	//if (randomFood.x === snakeCoordinates.x && randomFood.y === snakeCoordinates.y) {
	ctx.clearRect(foodX, foodY, unit, unit);
	//ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	snakeCoordinates.x === foodX;
	foodX += unit;
	ctx.fillStyle = "rgb(61, 141, 50)"
	ctx.fillRect(foodX, foodY, unit, unit);
	console.log("food", randomFood, foodX);
	console.log("snake", snakeCoordinates);
	};



function addFoodYdown() {
	ctx.clearRect(foodX, foodY, unit, unit);
	//ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	snakeCoordinates.y === foodY;
	foodY += unit;
	ctx.fillStyle = "rgb(61, 141, 50)"
	ctx.fillRect(foodX, foodY, unit, unit);
	console.log("food", randomFood, foodX);
	console.log("snake", snakeCoordinates);
	};




