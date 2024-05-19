const { innerHeight } = window;

gsap.from("#text h1 ", {
    scale: 50,
    stager:0.25,
    duration:2,
    ScrollTrigger: {
        trigger: "#text",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

gsap.to("#zoom-in ", {
    scale: 50,
    stager:0.25,
    duration:2,
    ScrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})


