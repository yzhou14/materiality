/**
 * Main Program
 *
 * Interactions:
 * 1. Hold the mouse button to blur the glacier and slow its movement.
 *    Release the mouse to restore its original state.
 * 2. Move the mouse to generate noise — the noise curve forms the glacier.
 *
 */


var glacierGraph; 
var speed = 1; 

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
  //when pressed
  if (mouseIsPressed == true) {
    speed = 0.5; // Create motion blur
  }

  glacier();

}

function init() {
  background(0);

  glacierGraph = createGraphics(width, height);
  glacierGraph.background(0);
}

function mouseReleased() {
  speed = 1;
}

function windowResized() {
  const container = document.querySelector(".p5-canvas-container");
  const w = container.clientWidth;
  const h = container.clientHeight;

  resizeCanvas(w, h);
  glacierGraph = createGraphics(w, h);
  glacierGraph.background(0);
}