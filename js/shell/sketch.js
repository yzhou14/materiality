/**
 *
 * Ocean系列-海报1
 * Coral Decay
 * 
 * 主程序
 * 
 * 交互内容：
 * 1、鼠标点击改变珊瑚颜色
 * 鼠标松开恢复（连续点击，产生变异效果）
 *
 */


var size = 200; //珊瑚大小，在以(centerX,centerY)为圆心，size为半径的区域生成珊瑚
var corals = []; //存放珊瑚小球
var isPressed = 0; //鼠标是否按住

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

    //当鼠标按住时
    if (mouseIsPressed == true) {
        isPressed = 1;
    }

    //珊瑚
    corals.push(new Coral(width / 2, height / 2 + 105, width / 2, height / 2 - 25));
    for (let i = 0; i < corals.length; i++) {
        if (corals[i].size < 0) { //即时删除r<0的小球
            corals.splice(i, 1);
        }
        corals[i].drawCoral();
        corals[i].move();
        //print(corals.length); //观察到数组的长度动态平衡在200左右
    }
}

function init() {
    background(0, 5);
    frameRate(30); //指定帧率，每秒30帧（30次draw()）
}

//鼠标松开，恢复原状
function mouseReleased() {
    isPressed = 0;
}