const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);
let lastChecked;
let inBetween = false;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((e) => {
  e.addEventListener("click", handleCheck);
});
