let tl = gsap.timeline();
tl.from("#nav1", {
  opacity: 0,
  y: 20,
  delay: "1",
  duration: 1,
})
  .from("#nav2", {
    opacity: 0,
    y: 20,
  })
  .from("#content p", {
    opacity: 0,
    y: 20,
    scale: 1.3,
  })
  .from("#content button", {
    y: 20,
    opacity: 0,
  })
  .from(["#sunglass", "#bag"], {
    x: -100,
    scale: 1.6,
    opacity: 0,
    duration: 1,
  })
  .from(["#shoe", "#watch"], {
    x: 100,
    scale: 1.6,
    opacity: 0,
    duration: 1,
    delay: "-1",
  })
  .from("#arrow", {
    scale: 0.1,
    opacity: 0,
  })
  .to("#arrow", {
    y: 20,
    yoyo: "true",
    repeat: -1,
  });
