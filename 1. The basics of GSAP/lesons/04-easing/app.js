// https://greensock.com/docs/v3/Eases

const img1 = document.querySelector('.img1');

gsap.from(img1,
    {
        autoAlpha: 0,
        y: -100,
        rotation: 90,
        duration: 2,
        ease: 'power4.inOut',
    },
);
