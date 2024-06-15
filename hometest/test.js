console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=130%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 1.5,
      z: 200,
      transformOrigin: "center bottom",
      ease: "power1.inOut"
    })
    .to(
      ".section.start",
      {
        scale: 1,
        transformOrigin: "center bottom",
        ease: "power1.inOut"
      },
      "<"
    );
});