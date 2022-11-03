class Player {
	constructor() {
	    this.width = 50
		this.height = 50
		this.x = 400
		this.y = 800 - this.height
		this.gravity = 0.2
		this.velocity = 1
		this.life = 3
		
	
    }

        draw() {
			if (game.counter < 4) {
			this.velocity += this.gravity
			this.y += this.velocity
         
			if (this.y >= height - this.height) {
				this.y = height - this.height
					}
			image(game.dino, this.x, this.y, this.width, this.height)
		}
		}
    
	jump() {
			if (this.y < 800 - this.height -10) {
			this.velocity = -5 
		}
			
	} 

	moveLeft() {
        if (this.x >= 0) {
        this.x -= 50
        }
	}	
    
    moveRight() {
        if (this.x < 800) {
        this.x += 50
        }
	}
 
}
