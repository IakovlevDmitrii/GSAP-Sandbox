// const TL = gsap.timeline({
//     defaults: {
//         duration: 1,
//         ease: "power4.out",
//     },
//     repeat: -1,
//     yoyo: true,
//     paused: true,
// });
//
// TL
//     .from('.img1', {autoAlpha: 0, y: -50})
//     .from('.img2', {autoAlpha: 0, y: -50})
//     .from('.img3', {autoAlpha: 0, y: -50})
//     .from('h1', {autoAlpha: 0, y: -50})
//     .from('p', {autoAlpha: 0, y: -50, ease: 'power4.in'})
//
// setTimeout(() => {
//     TL.play()
// }, 3500)

// ---------------------------

const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power4.out",
    },
    onComplete: () => console.log("COMPLETE"),
    onStart: () => console.log("START"),
});

TL
    .from('.img1', {autoAlpha: 0, y: -50})
    .from('.img2', {autoAlpha: 0, y: -50})
    .from('.img3', {autoAlpha: 0, y: -50})
    .from('h1', {autoAlpha: 0, y: -50})
    .from('p', {autoAlpha: 0, y: -50, ease: 'power4.in'})

setTimeout(() => {
    TL.restart()
},7000)