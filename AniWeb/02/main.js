let tl = gsap.timeline();
tl.from("#lowest", {
  opacity: 0,
  y: 300,
  duration: 0.7,
})
  .to("#lowest", {
    opacity: 0,
    y: -100,
    duration: 0.7,
  })
  .from("#second-lowest", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: "-0.5",
  })
  .to("#second-lowest", {
    opacity: 0,
    y: -100,
    duration: 0.7,
  })
  .from("#second-top", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: "-0.7",
  })
  .to("#second-top", {
    opacity: 0,
    y: -100,
    duration: 0.7,
  })
  .from("#top", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: "-0.7",
  })
  .to("#topScreen", {
    top: "-100%",
    duration: 1.2,
    ease: "Power4.ease",
  })
  .from("#nav", {
    opacity: 0,
    y: 20,
  })
  .from(["#head1", "#head2"], {
    opacity: 0,
    x: -100,
    duration: 1,
  })
  .from("#image-div", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: "-1",
  });
let date = document.getElementById("date");
let time = new Date();
date.innerText = time.getFullYear();
let btn = document.getElementById("hi");
btn.addEventListener("click", () => {
  tl.timeScale(2);
  tl.reverse();
});
