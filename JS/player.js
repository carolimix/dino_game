class Player {
	constructor() {
	    this.width = 50
		this.height = 50
		this.x = 0
		this.y = 800 - this.height
		this.gravity = 0.2
		this.velocity = 0
		this.score = 0
	
    }

        draw() {
			this.velocity += this.gravity
			this.y += this.velocity
         
			if (this.y >= height - this.height) {
				this.y = height - this.height
					}
			image(game.dino, this.x, this.y, this.width, this.height)
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
