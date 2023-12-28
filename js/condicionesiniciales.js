
        // Generate or retrieve a unique ID for the player
      let uniqueID = localStorage.getItem("uniqueID");
      if (!uniqueID) {
        uniqueID = generateUniqueID();
        localStorage.setItem("uniqueID", uniqueID);
      }
        
      const lienzo = document.getElementById("lienzo");
      const contexto = lienzo.getContext("2d");
      lienzo.width = window.innerWidth;
      lienzo.height = window.innerHeight;
        
      const jugador1 = new Nave(getRandomHexColor());
      jugador1.dibuja();

      var gira1 = 0;
      var avanza1 = false;
      var disparar1 = false;