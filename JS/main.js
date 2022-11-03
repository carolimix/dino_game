/* let MENU = 0 */
const game = new Game ()

function preload() {
	game.preload()
}  

function setup() {
	/* mode= 0; */
	createCanvas(800, 200);
		/* 	reset(); */
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




