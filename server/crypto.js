class Crypto {
    constructor() {
      // Konstruktorcode hier
    }
  
 // Funktion zum Generieren einer zufälligen Client-ID
     generateClientId() {
    return Math.random().toString(36).substring(7);
  }
  }
  
  module.exports = Crypto;
  