const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);
let lastChecked;


function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
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
