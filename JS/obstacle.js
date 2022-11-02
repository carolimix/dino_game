
class Obstacle {
    constructor(image) {
        this.asteroid = image
	    this.x = (Math.random() * width) +100
        this.y = 0
        this.width = 20
        this.height = 20
        this.velocity = 1
        this.energy = 0
      
        /* this.xspeed = 3
        this.yspeed = 3
        this.radio = 25 */
        //this.hitSound = new Audio ("./collision.mp3")
    
        
    }
        draw() {
          
            this.y+= this.velocity
            this.x-= this.velocity
            image(this.asteroid, this.x, this.y , this.width, this.height)
         

          /*  // switch (backgroundimg) {
            let count= 0
            
            if (this.y >= 200 ) {
                console.log("this is Y",this.y)
                count++
                if (count === 1) {
                    game.backgroundimg = game.backgroundimg2
                } else if(count === 2){
                    game.backgroundimg2 = game.backgroundimg3
                } else {
                    game.backgroundimg3 = game.backgroundimg4
                }   
            }  */

            
    
            
            let obstacleX = this.x + this.width / 2
            let obstacleY = this.y + this.height / 2

            let playerX = game.player.x + this.width / 2
		    let playerY = game.player.y + this.height / 2


            if (dist(obstacleX, obstacleY, playerX, playerY) < 25) {
                  this.velocity = -1
                  //game.player.life--
            }
        }

    }
    