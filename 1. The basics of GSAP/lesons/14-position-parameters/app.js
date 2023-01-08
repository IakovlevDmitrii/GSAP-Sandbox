const TL = gsap.timeline();

// ---------------------------
// TL
//     .from('.img1', {autoAlpha: 0, y: -50, duration: 1})
//     .from('.img2', {autoAlpha: 0, y: -50, duration: 1}, '-=0.75')
//     .from('.img3', {autoAlpha: 0, y: -50, duration: 1}, '-=0.75')
//     .from('h1', {autoAlpha: 0, y: -50, duration: 1}, '-=0.75')
//     .from('p', {autoAlpha: 0, y: -50, duration: 1}, '-=0.75')

// ---------------------------
// TL
//     .from('.img1', {autoAlpha: 0, y: -50, duration: 1})
//     .from('.img2', {autoAlpha: 0, y: -50, duration: 1}, '+=0.75')
//     .from('.img3', {autoAlpha: 0, y: -50, duration: 1}, '+=0.75')
//     .from('h1', {autoAlpha: 0, y: -50, duration: 1}, '+=0.75')
//     .from('p', {autoAlpha: 0, y: -50, duration: 1}, '+=0.75')

// ---------------------------
// TL
//     .from('.img1', {autoAlpha: 0, y: -50, duration: 1})
//     .from('.img2', {autoAlpha: 0, y: -50, duration: 1}, 3)
//     .from('.img3', {autoAlpha: 0, y: -50, duration: 1})
//     .from('h1', {autoAlpha: 0, y: -50, duration: 1})
//     .from('p', {autoAlpha: 0, y: -50, duration: 1})

// ---------------------------
TL
    .from('.img1', {autoAlpha: 0, y: -50, duration: 1})
    .from('.img2', {autoAlpha: 0, y: -50, duration: 1}, "<")
    .from('.img3', {autoAlpha: 0, y: -50, duration: 1})
    .from('h1', {autoAlpha: 0, y: -50, duration: 1}, ">")
    .from('p', {autoAlpha: 0, y: -50, duration: 1})