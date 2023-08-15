const navAbout = document.querySelector('.nav-about');
const navBlog = document.querySelector('.nav-blog');
const navContact = document.querySelector('.nav-contact');
const navOpen = document.querySelector('.nav-open');
const date = document.querySelector('.cover-date');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut
})
    .to(
        "nav",
        1,
        {
            height: "100",
            ease: Power2.easeOut
        },
        '-= 0.5'
    )
    .to(
        '.cover-date',
        0.5,
        {
            opacity: 0,
            ease: Power2.easeOut
        },
        '-= 1.5'
    )
    .fromTo(
        '.nav-open',
        0.5,
        {
            opacity: 0,
            x: 50,
            ease: Power2.easeOut
        },
        {
            opacity: 1,
            x: 0,
            onComplete: function() {
                navOpen.style.pointerEvents = "auto";
                console.log("Hit it brotha");
            }
        }
    );

navAbout.addEventListener("click", () => {
    if(tl.isActive()){
        e.preventDefault();
        e.stopimmediatePropagation();
        return false;
    }
    toggleTween(tl)
});


function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}