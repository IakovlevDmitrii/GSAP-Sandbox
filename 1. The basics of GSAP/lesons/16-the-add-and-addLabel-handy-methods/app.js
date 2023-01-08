// const TL = gsap.timeline({
//     defaults: {
//         duration: 1,
//         ease: "power4.out",
//     },
//     paused: true,
//     onComplete: () => console.log("COMPLETE"),
//     onStart: () => console.log("START"),
// });
//
// TL
//     .from('.img1', {autoAlpha: 0, y: -50})
//     .from('.img2', {autoAlpha: 0, y: -50})
//     .from('.img3', {autoAlpha: 0, y: -50})
//     .from('h1', {autoAlpha: 0, y: -50})
//     .addLabel('endAnim')
//     .from('p', {autoAlpha: 0, y: -50, ease: 'power4.in'})
//
// setTimeout(() => {
//     TL.seek("endAnim")
//     TL.play()
// },1000)

// ---------------------------
// const TL = gsap.timeline({
//     defaults: {
//         duration: 1,
//         ease: "power4.out",
//     },
//     paused: true,
//     onComplete: () => console.log("COMPLETE"),
//     onStart: () => console.log("START"),
// });
//
// TL
//     .from('.img1', {autoAlpha: 0, y: -50})
//     .from('.img2', {autoAlpha: 0, y: -50})
//     .from('.img3', {autoAlpha: 0, y: -50})
//     .from('h1', {autoAlpha: 0, y: -50})
//     .add('endAnim', '-=2')
//     .from('p', {autoAlpha: 0, y: -50, ease: 'power4.in'})
//
// setTimeout(() => {
//     TL.seek("endAnim")
//     TL.play()
// },1000)

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
    .add(() => {
        console.log("END OF THE TIMELINE");
    })
    .from('p', {autoAlpha: 0, y: -50, ease: 'power4.in'})
