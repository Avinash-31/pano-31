const open = document.querySelector('.nav-container');
const close = document.querySelector('.close');

var tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.set('.bars', { display: 'none' })
        tl.set('.main-logo', { display: 'none' })
        tl.to('nav', { right: 0 })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('nav h2', { opacity: 1 }, '-=1');
    }
});

close.addEventListener('click', () => {
    tl.reverse();
});
