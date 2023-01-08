// https://greensock.com/docs/v3/GSAP/Tween

// --------------------------
// const tween = gsap.to('.img2', {y: 200, paused: true});
// setTimeout(() => {
//     tween.resume()
// }, 2000)

// --------------------------
// const tween = gsap.to('.img2', {y: 200});
// tween.delay(2)

// --------------------------
// const tween = gsap.to('.img2', {y: 200});
// tween.duration(3)

// --------------------------
// tween.kill()

// --------------------------
// const tween = gsap.to('.img2', {
//     y: 200,
//     duration: 4,
//     paused: true,
// });
//
// setTimeout(() => {
//     tween.resume()
// }, 2000)

// --------------------------
const tween = gsap.to('.img2', {
    y: 200,
    duration: 4,
    paused: true,
});

setTimeout(() => {
    tween.seek(2.5)
    tween.play()
}, 2000)