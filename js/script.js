console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      }
    })
    .to("img", {
      scale: 15, // Increase this value to zoom in more
      z: 350,
      transformOrigin: "center 77% ", // Adjust this value to shift the focal point downwards
      
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.7, // Increase this value to zoom in more
        transformOrigin: "center 60%", // Adjust this value to shift the focal point downwards
        ease: "power1.inOut"
      },
      "<"
    );
});

