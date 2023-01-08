const img1 = document.querySelector(".img1");

gsap.registerEffect({
    name: 'imgAnimation',
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: 200,
            scale: 1.4,
            rotation: 360,
        })
    },
    defaults: {duration: 2},
})

// gsap.effects.imgAnimation(img1)
gsap.effects.imgAnimation(img1, {duration: 2})
gsap.effects.imgAnimation(".img2", {duration: 3})
gsap.effects.imgAnimation(".img3", {duration: 4})