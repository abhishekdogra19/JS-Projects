const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
function speak() {
  const text = document.getElementById("text").value;
  responsiveVoice.speak(text, "Hindi Male");
}
function stop() {
  responsiveVoice.cancel();
}
startBtn.addEventListener("click", speak);
stopBtn.addEventListener("click", stop);
