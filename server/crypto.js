class Crypto {
    constructor() {
      // Konstruktorcode hier
    }
  
 // Funktion zum Generieren einer zufälligen Client-ID
     generateClientId() {
    return Math.random().toString(36).substring(7);
  }

   getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  }
  
  module.exports = Crypto;
  