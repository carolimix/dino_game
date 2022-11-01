class Background {
    constructor() {
        this.backgroundimg
        this.x= 0
        this.y= 0
        this.heigth = 200
        this.width = 800
    }


    draw() {
        image(game.backgroundimg, this.x, this.y, this.width, this.heigth)
    }
}