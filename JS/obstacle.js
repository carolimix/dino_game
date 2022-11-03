class Obstacle {
    constructor(image) {
        this.asteroid = image
	    this.x = (Math.random() * width) +100
        this.y = 0
        this.width = 20
        this.height = 20
        this.velocity = 1
        this.energy = 0
        this.score = 0
    
                
    }
        draw() {
          
            this.y+= this.velocity
            this.x-= this.velocity
            image(this.asteroid, this.x, this.y , this.width, this.height)
                     
    
            
            let obstacleX = this.x + this.width / 2
            let obstacleY = this.y + this.height / 2

            let playerX = game.player.x + this.width / 2
		    let playerY = game.player.y + this.height / 2

            if (game.counter < 4) {
            if (dist(obstacleX, obstacleY, playerX, playerY) < 25) {  
               /*  this.score += 1     */
          /*       document.querySelector(".points").innerText = this.score */
                hit.play()
                this.velocity = -1
                }}
                
        }


    }
    