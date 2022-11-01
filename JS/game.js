

class Game {
     constructor() {
        this.player = new Player()
        this.background = new Background()
        this.backgroundimg
        this.dino
        this.obstacles = [] 
      
    
     }    
    
    preload() {
      this.backgroundimg = loadImage("./img/backgroundimg/background100.png");
	   this.backgroundimg2 = loadImage("./img/backgroundimg/background75.png");
	   this.backgroundimg3 = loadImage("./img/backgroundimg/background50.png");
	   this.backgroundimg4 = loadImage("./img/backgroundimg/background0.png");
	   this.dino = loadImage("./img/dino/playerimg.gif");
	   this.asteroid = loadImage("./img/asteroide/asteroide.png");
         }

    draw() {
       // clear()
        this.background.draw()
        this.player.draw()
     
         if(frameCount % 140 == 0) {
            this.obstacles.push(new Obstacle(this.asteroid))
         }
         this.obstacles.forEach(function (obstacle) {
            obstacle.draw()

         })
         this.obstacles = this.obstacles.filter(obstacle => {
             if (obstacle.collision(this.player)) {
               return false
                      }   else {
                        return true
                      }
            
         })
      }

    }



