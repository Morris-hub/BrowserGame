class Enemy  {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
    }



    walk() {
        console.log('walk');
        currentPos = this.x;
    }

}

module.exports = Enemy;