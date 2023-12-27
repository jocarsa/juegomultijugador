class Nave {
        constructor(color) {
          this.posx = Math.random() * window.innerWidth;
          this.posy = Math.random() * window.innerHeight;
          this.rot = Math.random() * Math.PI * 2;
          this.color = color;
          this.velocityX = 0;
          this.velocityY = 0;
          this.angularVelocity = 0;
          this.acceleration = 0.1;
          this.angularAcceleration = 0.01;
          this.proyectiles = [];
          this.lastProjectileTime = 0;
        }
        dibuja() {
          contexto.save();
          contexto.translate(this.posx, this.posy);
          this.rot += this.angularVelocity;

          // Wrap around on the X-axis
          if (this.posx < 0) {
            this.posx = window.innerWidth;
          } else if (this.posx > window.innerWidth) {
            this.posx = 0;
          }

          // Wrap around on the Y-axis
          if (this.posy < 0) {
            this.posy = window.innerHeight;
          } else if (this.posy > window.innerHeight) {
            this.posy = 0;
          }

          this.posx += this.velocityX;
          this.posy += this.velocityY;
          contexto.rotate(this.rot);
          contexto.fillStyle = this.color;
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
        }
        avanza() {
          this.velocityX += Math.cos(this.rot - Math.PI / 2) * this.acceleration / 5;
          this.velocityY += Math.sin(this.rot - Math.PI / 2) * this.acceleration / 5;
        }
        gira(direction) {
          this.angularVelocity += direction * this.angularAcceleration / 20;
        }
        applyInertia() {
          this.velocityX *= 0.99;
          this.velocityY *= 0.99;
          this.angularVelocity *= 0.99;
        }
        dibujaProyectiles() {
          for (let i = this.proyectiles.length - 1; i >= 0; i--) {
            const proyectil = this.proyectiles[i];
            proyectil.move();
            proyectil.dibuja();

            // Remove projectiles that go out of the canvas
            if (
              proyectil.posx < 0 ||
              proyectil.posx > window.innerWidth ||
              proyectil.posy < 0 ||
              proyectil.posy > window.innerHeight
            ) {
              this.proyectiles.splice(i, 1);
            }
          }
        }
        fireProjectile() {
          const currentTime = Date.now();
          if (currentTime - this.lastProjectileTime >= 500) {
            const velocityX = Math.cos(this.rot - Math.PI / 2);
            const velocityY = Math.sin(this.rot - Math.PI / 2);
            this.proyectiles.push(new Proyectil(this.posx, this.posy, this.rot, velocityX, velocityY, this.color));
            this.lastProjectileTime = currentTime;
          }
        }
    getPosition() {
        return { x: this.posx, y: this.posy };
      }
    getRotation() {
    return this.rot;
  }
    getColor() {
    return this.color;
  }

  getProjectiles() {
    return this.proyectiles;
  }
    // Method to set the position of the ship
  setPosition(x, y) {
    this.posx = x;
    this.posy = y;
  }

  // Method to set the rotation of the ship
  setRotation(rotation) {
    this.rot = rotation;
  }

  // Method to set the projectiles for the ship
  setProjectiles(projectiles) {
    this.proyectiles = projectiles;
  }
}
