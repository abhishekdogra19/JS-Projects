const spkbtn = document.querySelector(".speak-btn");
const stpbtn = document.querySelector(".stop-btn");
function speak() {
  const text = document.getElementById("text").value;
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
function stop() {
  window.speechSynthesis.cancel();
  console.log("clicked");
}
spkbtn.addEventListener("click", speak);
stpbtn.addEventListener("click", stop);
