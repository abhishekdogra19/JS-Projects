const btn = document.querySelector(".speak-btn");
function speak() {
  const text = document.getElementById("text").value;
  responsiveVoice.speak(text, "Hindi Male");
}
btn.addEventListener("click", speak);
