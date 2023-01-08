const img1 = document.querySelector('.img1');
const btn = document.querySelector('.btn');

/*
gsap.from(img1, {
    autoAlpha: 0,
    rotation: 45,
    scale: 0.5,
    x: 100,
    y: -100,
    duration: 2,
});
*/

btn.addEventListener('click', () => {
    gsap.from(img1, {
        autoAlpha: 0,
        rotation: 45,
        scale: 0.5,
        x: 100,
        y: -100,
        duration: 2,

        // 0 - 1
        // 0 - 0.5
    });
})
