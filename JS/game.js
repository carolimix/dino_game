

class Game {
     constructor() {
        this.player = new Player()
        this.background = new Background()
        this.backgroundimg
        this.dino
        this.obstacles = [] 
        this.counter= 0
        this.lifes = 3
  
             
        
     }    
    
    preload() {
      this.backgroundimg = loadImage("./img/backgroundimg/background100.png");
	   this.backgroundimg2 = loadImage("./img/backgroundimg/background75.png");
	   this.backgroundimg3 = loadImage("./img/backgroundimg/background50.png");
	   this.backgroundimg4 = loadImage("./img/backgroundimg/background0.png");
	   this.dino = loadImage("./img/dino/playerimg.gif");
	   this.asteroid = loadImage("./img/asteroide/asteroide.png");
      this.gameOver = loadImage ("./gameover.gif");
             
         }

    draw() {
    
        this.background.draw()
        tema.play()
        this.player.draw()
            if(frameCount % 70 == 0) {
            this.obstacles.push(new Obstacle(this.asteroid))
         }
         this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        
            })
         
         let arr = [
            game.backgroundimg2, game.backgroundimg3, game.backgroundimg4, game.gameOver      
         ]         
       
         this.obstacles= this.obstacles.filter((asteroid) => {
            if(asteroid.y > 180) {
               if (this.counter < 4) {
                  game.backgroundimg = arr[this.counter]
                  this.counter += 1
                  document.querySelector(".life span").innerHTML = this.counter 
                  return false   
               } else {
                  return true
               }     
            } else {
               return true
            }
         })        
         }
      }

