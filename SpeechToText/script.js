const btnEl = document.getElementById("btn");
const textEl = document.getElementById("convert-text");

function converter() {
  console.log("clicked");
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);

    textEl.innerHTML = transcript;
  });

  if (speech == true) {
    recognition.start();
  }
}

btnEl.addEventListener("click", converter);
