
document.getElementById("enviar").onclick = function(){
    usuario = document.getElementById("usuario").value
    document.getElementById("inicio").style.display = "none"
    let temporizador = setTimeout(bucle, 30);
        function bucle() {
          jugador1.gira(gira1);
          if (avanza1) {
            jugador1.avanza();
          }
          jugador1.applyInertia();
           
            
          
          if (disparar1) {
            jugador1.fireProjectile();
          }
          jugador1.dibujaProyectiles();

          // Send player's position, rotation, and projectile positions to the server
          const playerData = {
            position: jugador1.getPosition(),
            rotation: jugador1.getRotation(),
            projectiles: jugador1.getProjectiles(),
              color: jugador1.getColor(),
              puntos: jugador1.getPuntos(),
              id:uniqueID,
              usuario:usuario
          };
           socket.send(JSON.stringify(playerData));

          clearTimeout(temporizador);
          temporizador = setTimeout(bucle, 10);
        }
}

