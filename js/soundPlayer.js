const playBtn = document.getElementById("play-pause");
const playPauseIcon = document.getElementById("playPauseIcon");
const speedSlider = document.getElementById("speedRange");
const speedDisplay = document.getElementById("speedValue");
const audio = document.getElementById("audio"); // 取得audio元素
const progress = document.getElementById("progress");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playPauseIcon.src = "assets/Pause.svg"; // 播放時按鈕變成暫停
  } else {
    audio.pause();
    playPauseIcon.src = "assets/Play.svg" // 暫停時按鈕變成播放
  }
  isPlaying = !isPlaying;
});

speedSlider.addEventListener("input", () => {
  const speed = parseFloat(speedSlider.value);
  speedDisplay.textContent = speed.toFixed(1) + "×";
  audio.playbackRate = speed; // 調整播放速度
});

// 更新進度條
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
  });
  
// 拖動進度條跳播
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
