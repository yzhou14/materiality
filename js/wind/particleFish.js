/**
 *
 * Define ParticleWind class
 *
 * Core Principles:
 * 1. The particle's trailing effect is achieved by reducing the background opacity
 *    and applying a fade effect.
 * 2. The motion equation of the particle is set as: x = cos(a), y = sin(a) - cos(a) * sin(a)
 *
 */

class Particle {
  constructor(l, s) {
    this.loc = l;
    this.dir = createVector(0, 0);
    this.speed = s;
    this.d = 1;
  }

  //particle movements
  move(s) {
    this.speed = s;
    this.angle = noise(this.loc.x / noiseScale, this.loc.y / noiseScale, frameCount / noiseScale) * TWO_PI * noiseStrength;
    this.dir.x = cos(this.angle);
    this.dir.y = sin(this.angle) - cos(this.angle) * sin(this.angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed * this.d);
    this.loc.add(this.vel);
  }

  //position & range 
  checkEdges() {
    if (this.loc.x < (width / 2 - 255) || this.loc.x > (width / 2 + 255) || this.loc.y < 25 || this.loc.y > (height - 175)) {
      this.loc.x = random(width / 2 - 255, width / 2 + 255);
      this.loc.y = random(25, height - 175);
    }
    // if (this.loc.x < 0 || this.loc.x > width || this.loc.y < 0 || this.loc.y > height) {
    //   this.loc.x = random(width * 1.2);
    //   this.loc.y = random(height);
    // }
  }

  //draw particles
  drawParticle(r) {
    noStroke();
    ellipse(this.loc.x, this.loc.y, r);
  }
}

