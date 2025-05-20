var size = 200; //coral size
var corals = []; //coral particle storage
var isPressed = 0; //if mouse is presses

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
    background(0, 5);

    //whe pressed
    if (mouseIsPressed == true) {
        isPressed = 1;
    }

    //coral
    corals.push(new Coral(width / 2, height / 2 + 105, width / 2, height / 2 - 25));
    for (let i = 0; i < corals.length; i++) {
        if (corals[i].size < 0) { //delete r<0 particle
            corals.splice(i, 1);
        }
        corals[i].drawCoral();
        corals[i].move();
    }
}

function init() {
    background(0, 5);
    frameRate(30);
}

//mouse release
function mouseReleased() {
    isPressed = 0;
}