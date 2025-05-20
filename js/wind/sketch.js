/**
 * Main Program
 *
 * Interactions:
 * 1. While holding the mouse, the particle swarm accelerates
 *    Releasing the mouse restores the original state.
 *
 */


var num = 300; 
// Total number of particles in each swarm
// There are four different types of particle swarms
var particles_a = [];
var particles_b = [];
var particles_c = [];
var particles_d = [];
var fade = 100; // Controls the tail length
var radius = 3; // Particle radius
// Speed for the four types of particle swarms
var speed_a = 0.5;
var speed_b = 0.5;
var speed_c = 0.75;
var speed_d = 0.5;

var noiseScale = 300; // Noise scale
var noiseStrength = 1.2; // Frequency of noise fluctuations

var isPressed = 0; // Whether the mouse is pressed

function setup() {
  // 获取容器宽高
  const container = document.querySelector(".p5-canvas-container");
  const w = container.clientWidth;
  const h = container.clientHeight;  

  // 创建并附加 canvas
  let cnv = createCanvas(w, h);
  cnv.parent("p5-holder");

  init();
}

function draw() {
  // Low opacity background
  background(0, 15);

  // When the mouse is pressed
  if (mouseIsPressed == true) {
    isPressed = 1;
    // Accelerate the particle swarms
    speed_a += 0.025;
    speed_b += 0.025;
    speed_c += 0.05;
    // Generate new red particle swarm
    for (let i = 0; i < num / 2; i++) {
      let loc_d = createVector(random(width / 2 - 255, width / 2 + 255), random(25, height - 175));
      //let loc_d = createVector(random(width), random(height));
      particles_d[i] = new Particle(loc_d, speed_d);
      // Red color
      fill(215, 0, 0, fade);
      particles_d[i].move(speed_d);
      particles_d[i].checkEdges();
      particles_d[i].drawParticle(radius);
    }
  }

  // Particle swarms a, b, c
  for (let i = 0; i < num; i++) {
    // Particle swarm a (white)
    fill(255, 255, 255, fade);
    particles_a[i].move(speed_a);
    particles_a[i].checkEdges();
    particles_a[i].drawParticle(radius);
    // Particle swarm b (blue)
    fill(0, 100, 219, fade);
    particles_b[i].move(speed_b);
    particles_b[i].checkEdges();
    particles_b[i].drawParticle(radius);
    // Particle swarm c (cyan)
    fill(60, 250, 250, fade);
    particles_c[i].move(speed_c);
    particles_c[i].checkEdges();
    particles_c[i].drawParticle(radius);
  }

  // Poster rendering
  //poster();
}

function init() {
  background(0, 15);

  // Initialize particle swarm information
  for (let i = 0; i < num; i++) {
    let loc_a = createVector(random(width / 2 - 255, width / 2 + 255), random(25, height - 175));
    let loc_b = createVector(random(width / 2 - 255, width / 2 + 255), random(25, height - 175));
    let loc_c = createVector(random(width / 2 - 255, width / 2 + 255), random(25, height - 175));
    particles_a[i] = new Particle(loc_a, speed_a);
    particles_b[i] = new Particle(loc_b, speed_b);
    particles_c[i] = new Particle(loc_c, speed_c);
  }
}

// Reset when the mouse is released
function mouseReleased() {
  isPressed = 0;
  speed_a = 0.5;
  speed_b = 0.5;
  speed_c = 0.75;
}

