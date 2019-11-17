const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');


const unit = 20;

//snake


var snakeCoordinates = {
	x: 4 * unit,
	y: 4 * unit
};
var firstSnake = true;
if (firstSnake) {
	ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit)
};


document.addEventListener('keydown', snakeMove);

function snakeMove(event) {
	firstSnake = false;
	ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	
	var x = event.keyCode;
	
	if (x === 37) {
		snakeCoordinates.x -= unit;	
		if (randomFood.x === snakeCoordinates.x && randomFood.y === snakeCoordinates.y){
			addFoodX();
		}
	} else if (x === 38) {
		snakeCoordinates.y -= unit;	
		
	} else if (x === 39) {
		snakeCoordinates.x += unit;
	} else if (x === 40) {
		snakeCoordinates.y += unit;	
	}
	ctx.fillStyle = "rgb(61, 141, 50)";
	return ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
};




//food
var randomFood = {
	x: Math.floor(Math.random() * 30) * unit, 
	y: Math.floor(Math.random() * 30) * unit,
};

ctx.fillStyle = "rgb(253, 253, 253)"
ctx.fillRect(randomFood.x, randomFood.y, unit, unit);
	
function addFoodX() {
	//if (randomFood.x === snakeCoordinates.x && randomFood.y === snakeCoordinates.y) {
	ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit*2, unit);
	};


function addFoodY() {
	if (randomFood.x === snakeCoordinates.x && randomFood.y === snakeCoordinates.y) {
	ctx.clearRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit);
	return ctx.fillRect(snakeCoordinates.x, snakeCoordinates.y, unit, unit*2);
	};
};



