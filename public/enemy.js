class Enemy  {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
    }



    walk() {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        console.log('walk');
        currentPos = this.x;
    }

     updateCubePosition(position) {
        cube.style.left = position.x + "px";
        cube.style.top = position.y + "px";
      }


}

module.exports = Enemy;