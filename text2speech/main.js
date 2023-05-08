const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
function speak() {
  const text = document.getElementById("text").value;
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
function stop() {
  window.speechSynthesis.cancel();
}
startBtn.addEventListener("click", speak);
stopBtn.addEventListener("click", stop);
