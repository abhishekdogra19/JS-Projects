gsap.to("#box1", {
  scrollTrigger: {
    trigger: "#box1",
    scroller: "body",
    start: "top 10%",
    end: "bottom 30%",
    markers: true,
    scrub: 5,
  },
  width: "100%",
  height: "100%",
  duration: 1,
});
gsap.to("#box2", {
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    start: "top 80%",
    end: "bottom 90%",
    scrub: 5,
  },
  scale: 1.5,
  rotate: 360,
  duration: 2,
});
gsap.from("#line", {
  scrollTrigger: {
    trigger: "#line",
    scroller: "body",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 5,
  },
  width: "0px",
  duration: 2,
});
