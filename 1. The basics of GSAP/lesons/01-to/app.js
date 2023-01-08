const img1 = document.querySelector('.img1');

const index = 1;

gsap.to(
    // '.img1',
    // img1,
    `.img${index}`,
    {
        x: 100,
        y: 100,
        duration: 2,
        backgroundColor: "#fff",
        // rotation: 45,
        rotation: "45deg",
    }
)
