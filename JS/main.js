const game = new Game ()

function preload() {
	game.preload()
}  

function setup() {
	createCanvas(800, 200);
}

function draw() {	  
	game.draw()		
}
function keyPressed() {

if (keyCode === 32) {
	game.player.jump()
}

if (keyCode === 39) {
	game.player.moveRight()
}

if (keyCode === 37) {
	game.player.moveLeft()
}

if (keyCode === 38) {
	game.player.moveUp()
}

}






