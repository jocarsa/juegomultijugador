// WebSocket connection
      const socket = new WebSocket("ws://192.168.1.38:3000");

      socket.addEventListener("open", (event) => {
        console.log("WebSocket connection opened");
      });

      socket.addEventListener("error", (event) => {
        console.error("WebSocket error:", event);
      });

      socket.addEventListener("message", (event) => {
        // Handle incoming WebSocket messages here
        const data = JSON.parse(event.data);
        // Process data from the server
        let  datos = JSON.parse(event.data)
        
        
        if(document.getElementById(datos.color.replace("#",""))){
                  //console.log("existe")
                    document.getElementById(datos.color.replace("#","")).innerHTML = datos.puntos
                }else{
                    console.log("no existe")
                    let elemento = document.createElement("div")
                    elemento.id = datos.color.replace("#","")
                    elemento.style.color = datos.color
                    //console.log(datos.color)
                    document.getElementById("jugadores").appendChild(elemento)
                }
        
        //console.log(datos);
          //contexto.clearRect(0, 0, window.innerWidth, window.innerHeight)
          contexto.fillStyle = "rgba(0,0,0,0.1)"
          contexto.fillRect(0, 0, window.innerWidth, window.innerHeight)
          jugador1.dibuja();
          if(datos.position.x != jugador1.posx ){
             
              
                contexto.save();
                contexto.translate(datos.position.x, datos.position.y);
              contexto.rotate(datos.rotation);
          contexto.fillStyle = datos.color;
          contexto.beginPath();

          const x1 = 0;
          const y1 = -10;
          const x2 = -5;
          const y2 = 5;
          const x3 = 5;
          const y3 = 5;

          contexto.moveTo(x1, y1);
          contexto.lineTo(x2, y2);
          contexto.lineTo(x3, y3);
          contexto.closePath();
          contexto.fill();
          contexto.fillStyle = "white";
          contexto.beginPath();
          contexto.arc(0, 0, 2, 0, Math.PI * 2, true);
          contexto.closePath();
          contexto.fill();

          contexto.restore();
              
              
              
              //console.log(datos.projectiles)
              for(let i = 0;i<datos.projectiles.length;i++){
                  //console.log("bala")
                  contexto.fillStyle = datos.color
                  contexto.beginPath()
                  contexto.arc(
                      datos.projectiles[i].posx,
                      datos.projectiles[i].posy,
                      3,0,Math.PI*2,true)
                contexto.fill()
                   
                  if (checkPlayerProjectileCollision(jugador1, datos.projectiles[i]) && jugador1.color != datos.projectiles[i].color) {
                    // Collision detected, handle it here
                        console.log("Collision detected between player and projectile");
                           //window.location = window.location
                      jugador1.puntos--
                      console.log(jugador1.puntos)
                      jugador1.posx = Math.random() * window.innerWidth;
                        jugador1.posy = Math.random() * window.innerHeight;
                  }
              }
        }
          
          
      });