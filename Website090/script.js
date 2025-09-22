// from: In from method you don't have to specify the initial state, (it will figure out by itself)

// fromTo: In fromTo method you HAVE to specify the default value, and also the new animation state.

gsap.from(".box1",{
    y: -50,
    duration: 2,
    ease: 'linear',
    repeat: -1,
    yoyo: true
});

gsap.fromTo(".box2",{
    y: 50,
    opacity: 0
},{
    opacity: 1,
    y: -50,
    ease: 'linear',
    duration: 2,
    borderRadius: 0,
    repeat: -1,
    yoyo: true
});