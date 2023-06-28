
document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 0;
  var menuItems = createMenuItems(); // Menüpunkte programmgesteuert erstellen

  // Fügt die aktive Klasse zum Startpunkt hinzu
  menuItems[currentIndex].classList.add('active');

  document.addEventListener('keydown', function (event) {
    // Entfernt die aktive Klasse von dem aktuellen Punkt
    menuItems[currentIndex].classList.remove('active');

    // Pfeiltaste nach unten
    if (event.keyCode === 40) {
      currentIndex = (currentIndex + 1) % menuItems.length;
      playSound("./sound/menu_select.mp3"); // Spielt den Ton ab

    }
    // Pfeiltaste nach oben
    else if (event.keyCode === 38) {
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      playSound("../sound/menu_select.mp3"); // Spielt den Ton ab

    }
    // Enter-Taste
    else if (event.keyCode === 13) {
      redirectToNextWindow();
      playSound("../sound/confirm_select.mp3"); // Spielt den Ton ab

    }

    // Fügt die aktive Klasse zum ausgewählten Punkt hinzu
    menuItems[currentIndex].classList.add('active');
    //playSound("./sound/menu_select.mp3"); // Spielt den Ton ab

  });

  function playSound(sound = "") {
    // Audiowiedergabelogik hier einfügen
    // Erstellen Sie ein Audio-Element und spielen Sie den Ton ab
    // Beispiel: var audio = new Audio('sound.mp3');
    //          audio.play();

    var audio = new Audio(sound);
    audio.play();
  }

  function createMenuItems() {
    var menu = document.createElement('ul');
    menu.id = 'menu';

    var menuOptions = ['Start Game', 'Story-Mode', 'Settings'];

    for (var i = 0; i < menuOptions.length; i++) {
      var menuItem = document.createElement('li');
      menuItem.textContent = menuOptions[i];
      menuItem.id = menuOptions[i].toLowerCase();

      menu.appendChild(menuItem);
    }

    document.body.appendChild(menu);

    return document.querySelectorAll('#menu li');
  }

  function redirectToNextWindow() {
    var selectedItem = menuItems[currentIndex].id;

    // Weiterleitungslogik basierend auf dem ausgewählten Punkt
    if (selectedItem === 'Start Game') {
      return window.location.href = '/start'; // Hier wird zu "start.html" weitergeleitet
    } else if (selectedItem === 'Settings') {
      window.location.href = 'settings.html'; // Hier wird zu "settings.html" weitergeleitet
    } else if (selectedItem === 'Story-Mode') {
      window.location.href = 'story.html'; // Hier wird zu "story.html" weitergeleitet
    }
  }
  // function createScreen() {
  //   // Body erstellen und stylen
  // var body = document.body.style;
  // body.fontFamily = '"VT323", monospace';
  // body.backgroundColor = "#ed3318";

  // // Liste (ul) erstellen und stylen
  // var ul = document.createElement("ul");
  // ul.style.textAlign = "center";
  // ul.style.position = "absolute";
  // ul.style.left = "50%";
  // ul.style.top = "50%";
  // ul.style.transform = "translate(-50%, -50%)";
  // ul.style.width = "35rem";
  // ul.style.listStyle = "none";
  // ul.id = "menu";
  // //body.appendChild(ul);

  // // Listenpunkt (li) erstellen und stylen
  // var li = document.createElement("li");
  // li.style.fontSize = "30px";
  // ul.appendChild(li);
  // document.body.appendChild(ul);


  // // H1 erstellen und stylen
  // var h1 = document.createElement("h1");
  // h1.style.textAlign = "center";
  // //body.appendChild(h1);
  // document.body.appendChild(h1);


  // // Aktives Element erstellen und stylen
  // var activeElement = document.createElement("div");
  // activeElement.style.width = "35rem";
  // activeElement.style.backgroundColor = "white";
  // activeElement.style.border = "2px solid black";
  // activeElement.style.boxShadow = "-5px 5px 0px black";
  //  //body.appendChild(activeElement);
  // document.body.appendChild(activeElement);



  // }

});
