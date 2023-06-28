class Enemy {
  constructor() {


  }



  createEnemy() {
    const color_1 = "#A2D2F0";
    const color_2 = "#ed3318";
    var newEnemy = document.createElement("div");
    newEnemy.id = "enemy";
    newEnemy.style.width = "30px";
    newEnemy.style.height = "30px";
    newEnemy.style.left = "50%";
    newEnemy.style.top = "50%";
    newEnemy.style.backgroundColor = color_1;
    newEnemy.style.border = "2px solid black";
    newEnemy.style.boxShadow = "-5px 5px 0px black";
    newEnemy.style.position = "absolute";
    const enemy = document.body.appendChild(newEnemy);
    return enemy;
  }

  moveRandom() {
    var interval = setInterval(function () {
      // Hier kommt der Code für deine Funktion
      var min = getRandomIntInclusive(1, 1920);
      var max = getRandomIntInclusive(1, 1080);
      this.moveDivToCoordinates(div, min, max);
      console.log("Die Funktion wird alle 3 Sekunden aufgerufen.");
    }, 3000);

    // Stoppt das Intervall nach 10 Sekunden
    setTimeout(function () {
      clearInterval(interval);
      console.log("Das Intervall wurde gestoppt.");
    }, 10000);
  }


  moveDivToCoordinates(div, x, y) {
    console.log("moveDivToCoordinates " + x + y);
    const speed = 10; // Geschwindigkeit der Bewegung (in Pixel pro Schritt)
    const interval = 20; // Intervall zwischen den Schritten (in Millisekunden)

    const startX = div.offsetLeft; // Anfangs-X-Position des div
    const startY = div.offsetTop; // Anfangs-Y-Position des div

    const deltaX = x - startX; // Änderung in der X-Richtung
    const deltaY = y - startY; // Änderung in der Y-Richtung

    const steps = Math.max(Math.abs(deltaX), Math.abs(deltaY)) / speed; // Anzahl der Schritte

    let currentStep = 0;

    const moveInterval = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps; // Fortschritt (von 0 bis 1)

      const currentX = startX + deltaX * progress; // Aktuelle X-Position
      const currentY = startY + deltaY * progress; // Aktuelle Y-Position

      div.style.left = currentX + "px";
      div.style.top = currentY + "px";

      if (currentStep >= steps) {
        clearInterval(moveInterval); // Bewegung beenden, wenn alle Schritte abgeschlossen sind
      }
    }, interval);
  }
}

module.exports = Enemy;