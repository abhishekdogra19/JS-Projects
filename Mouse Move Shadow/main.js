const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;
function changeShadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;
  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  let xWalk = Math.round((x / width) * walk - walk / 2);
  let yWalk = Math.round((y / height) * walk - walk / 2);
  text.style.textShadow = `${xWalk}px ${yWalk}px 0px  rgba(0, 0, 0, 1),
  ${-xWalk}px ${-yWalk}px 0px  rgba(0, 0, 0, 1)
  `;
}
hero.addEventListener("mousemove", changeShadow);
