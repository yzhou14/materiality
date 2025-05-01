/**
 * Core Principles:
 * 
 * 1. Visualize Perlin noise and perturb it using the mouse position as input.
 * 
 * 2. Use `createGraphics` to generate a sub-canvas, and apply the "image-in-image" method
 *    with `newGraphics.image(moved oldGraphics)` to create a continuous downward shift.
 *    Alternatively, store the generated points' coordinates in an array and update them
 *    over time — but managing the array can be tricky (you need to add new points and 
 *    remove those that move off-screen).
 * 
 * 3. When the movement speed is not a multiple of 0.5, motion blur appears (discovered
 *    experimentally — the cause is unclear, but it nicely mimics the effect of glacier melting).
 * 
 * 4. When using `translate` and `rotate`, don’t forget to use `push()` and `pop()`.
 *
 */


function glacier() {
    //glacierGraph.background(0); //observe single curve
    glacierGraph.push();
    glacierGraph.image(glacierGraph, 0, speed); //draw previous image beneath
    glacierGraph.translate(0, -85);
  
    //generate noise curve
    let mouseRatio = noise(frameCount / 50, mouseX / 50) * 1.5; 
    //The longer it runs, the louder the noise. The further right, the rougher the sound.
    glacierGraph.strokeWeight(1);
    glacierGraph.noFill();
    glacierGraph.stroke(255, map(sin(frameCount / (20 + (1 - mouseRatio) * 500)), -1, 1, 50, 255));
    glacierGraph.beginShape();
    //run through each line
    for (let x = -5; x < width; x += 5) { 
      // Since the first and last points in curveVertex are only guides and not rendered,
      // x should start from -5 instead of 0 to avoid a gap on the left.
  
      let y =
        mouseRatio * sin(x / 80 + frameCount / 50) * 50 +
        mouseRatio * sin(x / 20 + frameCount / 50) * 20
        + mouseRatio * noise(x / 100, frameCount / 50)
        * noise(x / 500, frameCount / 50)
        * (map(sin(x /
          (10 + noise(x / 2000, frameCount / 500) * 40)
        ), -1, 1, 0, 1))
        * height / 5 + height / 3
        + noise(x / 50, frameCount / 50) * 100;
      glacierGraph.curveVertex(x, y);
  
      // Draw grey dots where values fall below a certain threshold.
      if (y > height * 0.45) {
        glacierGraph.push();
        glacierGraph.noStroke();
        let gray = 160 + sin(x * 0.5 + frameCount / 30) * 30;
        glacierGraph.fill(gray); 
        //rgb(160, 160, 160)
        glacierGraph.ellipse(x + random(-1, 1), y + random(-1, 1), 5);
        glacierGraph.pop();
      }
    }
    glacierGraph.endShape();
    glacierGraph.pop();
  
    image(glacierGraph, 0, 0, width, height); //generate image for this time.
  }
  