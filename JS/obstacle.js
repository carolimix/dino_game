class Obstacle {
    constructor(image) {
        this.asteroid = image
	    this.x = (Math.random() * width) +100
        this.y = 0
        this.width = 20
        this.height = 20
    
        
    }
 
        draw() {
            this.y++
            this.x--
            image(this.asteroid, this.x, this.y, this.width, this.height)
            if (this.y > 200 ) {
                game.backgroundimg = game.backgroundimg2
            }
            console.log(this.x)
            console.log(game.player.x)
        }

        collision(playerInfo) {
            let obstacleX = this.x + this.width / 2
            let obstacleY = this.y + this.height / 2
    
            let playerX = playerInfo.x + playerInfo.width / 2
		    let playerY = playerInfo.y + playerInfo.height / 2

            if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
              return false;
            } else {
            
                game.player.score++
                return true
            }

     }
}