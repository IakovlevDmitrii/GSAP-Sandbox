const img1 = document.querySelector('.img1');

gsap.from(img1,
    {
        autoAlpha: 0,
        y: -100,
        rotation: 90,
        duration: 2,
        ease: 'power4.inOut',
        delay: 0.5,
        // repeat: -1,
        repeat: 2,
        repeatDelay: 0.2,
        yoyo: true,
        // paused: true,
    },
);
