
        // Generate or retrieve a unique ID for the player
      let uniqueID = localStorage.getItem("uniqueID");
      if (!uniqueID) {
        uniqueID = generateUniqueID();
        localStorage.setItem("uniqueID", uniqueID);
      }
        const lienzoestrellas =  document.getElementById("lienzoestrellas")
        const contextoestrellas = lienzoestrellas.getContext("2d")
        lienzoestrellas.width = window.innerWidth;
        lienzoestrellas.height = window.innerHeight;
contextoestrellas.fillStyle = "grey"
    for(let i = 0;i<1000;i++){
        contextoestrellas.fillRect(
            Math.random()*window.innerWidth,
             Math.random()*window.innerHeight,
            1,1
        )
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