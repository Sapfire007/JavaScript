gsap.set(".box",{
    opacity: 0,
    background: "yellow"
});

gsap.to(".box",{
    opacity: 1,
    background: "crimson",
    duration: 3,
    y: -50,
    repeat: -1,
    yoyo: true
});