gsap.from('img',
    {
        autoAlpha: 0,
        y: -100,
        ease: 'power4.inOut',
        duration: 2,
        // stagger: 0.2,
        /*
        stagger: {
            each: 0.5,
            // amount: 1,
            // from: 'end',
            // from: 3,
            // from: 'edges',
            // from: 'random',
            from: 'center',
        }
        */
        stagger: (index) => {
            console.log(index);
        }
    },
);
