// Beispiel Player-Klasse
class Player {
  constructor(id, x = "50", y = "50", color) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 30;
    this.height = 30;
  }

  // checkCollision(object) {
  //   if (
  //     this.x < object.x + object.width &&
  //     this.x + this.width > object.x &&
  //     this.y < object.y + object.height &&
  //     this.y + this.height > object.y
  //   ) {
  //     console.log("Kollision");
  //     // Kollision erkannt
  //     return true;
  //   }
  //   console.log("Keine Kollision");
  //   // Keine Kollision
  //   return false;
  // }

  checkCollision() {
    var enemyElements = document.getElementsByClassName('player');
    console.log("enemy" + enemyElement);

    var enemyElement = enemyElements[0];
    var enemyRect = enemyElement.getBoundingClientRect();

    // Die Positionen und Abmessungen des enemy-Elements abrufen
    var enemyTop = enemyRect.top;
    var enemyLeft = enemyRect.left;
    var enemyRight = enemyRect.right;
    var enemyBottom = enemyRect.bottom;
    // Andere Elemente überprüfen
    // Hier kannst du weitere Elemente auswählen und ihre Positionen überprüfen

    // Beispiel: Prüfe, ob enemy mit einem anderen Element mit der ID "obstacle" kollidiert
    var obstacleElement = document.getElementById('enemy');
    console.log("obstacle" + obstacleElement);
    var obstacleRect = obstacleElement.getBoundingClientRect();
    var obstacleTop = obstacleRect.top;
    var obstacleLeft = obstacleRect.left;
    var obstacleRight = obstacleRect.right;
    var obstacleBottom = obstacleRect.bottom;

    // Kollisionsprüfung durchführen
    if (
      enemyBottom >= obstacleTop &&
      enemyTop <= obstacleBottom &&
      enemyRight >= obstacleLeft &&
      enemyLeft <= obstacleRight
    ) {
      // Kollision erkannt!
      console.log('Kollision mit dem Hindernis!');
    }
  }


  createPlayer(clientId = this.id, color = "#ed3318") {
    const player_color_1 = "#A2D2F0";
    const player_color_2 = "#ed3318";
    var newCube = document.createElement("div");
    newCube.id = clientId;
    newCube.style.width = "30px";
    newCube.style.height = "30px";
    newCube.style.left = "20%";
    newCube.style.top = "50%";
    newCube.style.backgroundColor = color;
    newCube.style.border = "2px solid black";
    newCube.style.boxShadow = "-5px 5px 0px black";
    newCube.style.position = "absolute";
    newCube.style.transition = "all 0.2s";
    cube = document.body.appendChild(newCube);
  }



  move() {

    // Funktion, um die aktuelle Position des Cube-Elements zu erhalten
    function getCubePosition() {
      return {
        clientId: clientId,
        x: cube.offsetLeft,
        y: cube.offsetTop,
      };
    }

    document.addEventListener("keydown", function (event) {
      var keyCode = event.keyCode;
      var currentPosition = getCubePosition();
      const speed = 25;

      if (keyCode === 37) {
        // Bewege nach links
        currentPosition.x -= speed;
        player.checkCollision();
      } else if (keyCode === 38) {
        // Bewege nach oben
        currentPosition.y -= speed;
        //checkCollision(enemy);
      } else if (keyCode === 39) {
        // Bewege nach rechts
        currentPosition.x += speed;
        //checkCollision(enemy);
      } else if (keyCode === 40) {
        // Bewege nach unten
        currentPosition.y += speed;
      } else if (keyCode === 49) {
        ui.handler(ui.retroBox);
      }

      // Senden Sie den aktuellen Cube-Status an den Server
      socket.emit("update-cube", currentPosition);
    });
  }


  init() {
    this.createPlayer();
    this.move();
  }

}
module.exports = Player;