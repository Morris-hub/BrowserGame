class UI {

text ="Hello World \n" + "This is a Example for an Multiplayer Game \n";
keyPressCount = null;


 Box() {
    const box = document.createElement("div");
    box.id = "box";
    box.style.width = "250px";
    box.style.height = "500px";
    box.style.right = "50px";
    box.style.bottom = "50px";
    box.style.backgroundColor = "#ed3318";
    box.style.border = "2px solid black";
    box.style.padding = "10px";
    box.style.boxShadow = "-5px 5px 0px black";
    box.style.position = "absolute";
    box.style.transition = "all 0.2s";
    box.style.fontFamily = "'VT323', monospace";
    box.style.color = "#000000";
    document.body.appendChild(box);

    // Textinhalt erstellen und zur Textbox hinzufügen
    var textContent = document.createTextNode(text);
    box.appendChild(textContent);
    return box;
  }


   createPlayer(clientId) {
    var newCube = document.createElement("div");
    newCube.id = clientId;
    newCube.style.width = "30px";
    newCube.style.height = "30px";
    newCube.style.left = "50%";
    newCube.style.top = "50%";
    newCube.style.backgroundColor = "#ed3318";
    newCube.style.border = "2px solid black";
    newCube.style.boxShadow = "-5px 5px 0px black";
    newCube.style.position = "absolute";
    newCube.style.transition = "all 0.2s";
    cube = document.body.appendChild(newCube);
  }

   healthbar(healtstatus = "100",width ="200", height = "30", pos_x ="20",pos_y ="50") {
    var healthbar = document.createElement("div");
    healthbar.id = "healthbar";
    healthbar.style.width = width + "px";
    healthbar.style.height = height + "px";
    healthbar.style.left = pos_x + "px";
    healthbar.style.top = pos_y + "px";
    healthbar.style.zIndex = "1";
    healthbar.style.backgroundColor = "red";
    healthbar.style.borderRadius = "3px";
    healthbar.style.boxShadow = "-5px 5px 0px black";
    healthbar.style.border = "2px solid black";
    healthbar.style.position = "absolute";
    healthbar.style.fontFamily = "'VT323', monospace";
    healthbar.style.color = "#000000";

    var innerbar = document.createElement("div");
    innerbar.id = "innerbar";
    innerbar.style.width = healtstatus + "%";
    innerbar.style.height = "100%";
    innerbar.style.backgroundColor = "green";
    healthbar.appendChild(innerbar);
    document.body.appendChild(healthbar);
    return healthbar;
  }
   displayclientID(clientId) {
    var clientIdElement = document.createElement("div");
    clientIdElement.id = "client-id";
    clientIdElement.textContent = "Client ID: " + clientId;
    clientIdElement.style.fontFamily = "Arial, sans-serif";
    clientIdElement.style.fontSize = "20px";
    clientIdElement.style.color = "black";
    clientIdElement.style.zIndex = "1";
    clientIdElement.style.fontFamily = "'VT323', monospace";
    clientIdElement.style.position = "absolute";
    clientIdElement.style.top = "10px";
    clientIdElement.style.left = "20px";
    document.body.appendChild(clientIdElement);
  }

   textBox(text) {
    var textBox = document.createElement("div");
    textBox.id = "box";
    textBox.style.width = "200px";
    textBox.style.height = "350px";
    textBox.style.right = "10px";
    textBox.style.bottom = "10px";
    textBox.style.backgroundColor = "black";
    textBox.style.border = "4px solid #EDC04E";
    textBox.style.borderRadius = "3px";
    textBox.style.padding = "10px";
    textBox.style.position = "absolute";
    textBox.style.fontFamily = "'VT323', monospace";
    textBox.style.color = "white";
    document.body.appendChild(textBox);

    // Textinhalt erstellen und zur Textbox hinzufügen
    var textContent = document.createTextNode(text);
    textBox.appendChild(textContent);
    return textBox;
  }

   retroBox(text) {
    const box = document.createElement("div");
    box.id = "box";
    box.style.width = "300px";
    box.style.height = "450px";
    box.style.right = "50px";
    box.style.bottom = "50px";
    box.style.padding = "10px";
    box.style.backgroundColor = "#ed3318";
    box.style.border = "2px solid black";
    box.style.boxShadow = "-5px 5px 0px black";
    box.style.position = "absolute";
    box.style.transition = "all 0.2s";
    box.style.fontFamily = "'VT323', monospace";
    box.style.fontSize = "20px";
    box.style.color = "#000000";
    document.body.appendChild(box);

    // Textinhalt erstellen und zur Textbox hinzufügen
    var textContent = document.createTextNode(text);
    box.appendChild(textContent);
    return box;
  }
   inventar(text) {
    const inbox = document.createElement("div");
    box.id = "box";
    box.style.width = "250px";
    box.style.height = "500px";
    box.style.right = "50px";
    box.style.bottom = "50px";
    box.style.padding = "10px";
    box.style.backgroundColor = "#ed3318";
    box.style.border = "2px solid black";
    box.style.boxShadow = "-5px 5px 0px black";
    box.style.position = "absolute";
    box.style.transition = "all 0.2s";
    box.style.fontFamily = "'VT323', monospace";
    box.style.color = "#000000";
    document.body.appendChild(box);

    // Textinhalt erstellen und zur Textbox hinzufügen
    var inventar = document.createElement("div");
    inventar.id = "inventar";
    inventar.style.width = "50px";
    inventar.style.height = "50px";
    inventar.style.border = "2px solid black";
    inventar.style.backgroundColor = "#ed3318";
    box.appendChild(inventar);
    return box;
  }

   hideTextBox() {
    var textBox = document.getElementById("box");
    textBox.style.display = "none";
  }

   body() {
    const body = document.body.style;
    body.backgroundColor = "white";
    body.margin = "0";
    body.padding = "0";
    body.overflow = "hidden";
    body.width = "100%";
    body.height = "1090px";
  }

   button() {
    const button = document.createElement("button");
    button.id = "button";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.right = "50px";
    button.style.bottom = "50px";
    button.style.borderRadius = "100%";
    button.style.padding = "10px";
    button.style.backgroundColor = "#ed3318";
    button.style.border = "2px solid black";
    button.style.boxShadow = "-5px 5px 0px black";
    button.style.position = "absolute";
    button.style.fontFamily = "'VT323', monospace";
    button.style.color = "#000000";
    document.body.appendChild(button);

    // Hinzufügen eines Klick-Eventhandlers zum Button
    button.addEventListener("click", () => {
      alert("Button wurde geklickt!");
    });
  }

   playground(height = 1000, player) {
    const playground = document.createElement("div");
    playground.id = "playground";
    playground.style.width = "100%";
    playground.style.height = height + "px";
    playground.style.backgroundColor = "pink";
    playground.appendChild(player);
    document.body.appendChild(playground);
    //playground = document.body.appendChild(clientIdElement);
    return playground;
  }

  handler(divElement=this.Box) {
    keyPressCount++;

          if (keyPressCount === 1) {
            if (!DivElement) {
              DivElement = divElement();
            } else {
              DivElement.style.display = "block";
            }
          } else if (keyPressCount === 2) {
            if (DivElement) {
              DivElement.style.display = "none";
            }
            keyPressCount = 0;
          }
  }

}

module.exports = UI;
