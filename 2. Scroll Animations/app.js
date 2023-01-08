// https://greensock.com/docs/v3

gsap.from('.b2 h2', {
    duration: 1,
    autoAlpha: 0,
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        trigger: '.b2 h2',
        // markers: true,
    //  Trigger Scroller
    //  start: 'top bottom', // default
    //  start: 'top bottom-=200',
    //  start: 'top 50%',
    //  start: 'top center+=100',
    //  end: 'bottom top', // default
        start: 'top 80%',
        end: 'bottom+=20% top',
        // onEnter onLeave onEnterBack onLeaveBack
        toggleAction: 'play pause reverse reset',
        // play pause resume reset restart complete reverse none
        onEnter: () => console.log('ENTER'),
        onLeave: () => console.log('LEAVE'),
        onEnterBack: () => console.log('ENTERBACK'),
        onLeaveBack: () => console.log('LEAVEBACK'),
        // scrub: true,
        scrub: 0.5,
    }
})

ScrollTrigger.create({
    trigger: '.b2',
    pin: true,
    markers: true,
    // trigger scroller
    end: 'bottom 50%',
})