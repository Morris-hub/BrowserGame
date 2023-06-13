// Beispiel Player-Klasse
class Player {
    constructor(id, x, y, width, height) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

    }
  
    checkCollision(object) {
      if (
        this.x < object.x + object.width &&
        this.x + this.width > object.x &&
        this.y < object.y + object.height &&
        this.y + this.height > object.y
      ) {
        console.log("Kollision");
        // Kollision erkannt
        return true;
      }
      console.log("Keine Kollision");
      // Keine Kollision
      return false;
    }
  
}

module.exports = Player;
