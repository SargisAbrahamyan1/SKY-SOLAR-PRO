gsap.registerPlugin(ScrollTrigger);

/* services-auto-digit */

let a = 0;
$(window).scroll(function () {
    let oTop = $("#services-counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".services-counter").each(function () {
            let $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 5000,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});

/* End services-auto-digit End */


/* services-scroll-horizontal */


let sections = gsap.utils.toArray(".services-scrolling");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".services-scroll-wrapper",
        pin: true,
        scrub: 0.1,
        start: "top 20%",
        end: "+=1000",
    },
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".services-scrolling-text-cont",
        start: "top 20%",
        pin: true,
        end: "+=1000",
        scrub: true,
    }
});


/* End services-scroll-horizontal End */


/* services-scroll-horizontal-2 */


let sections2 = gsap.utils.toArray(".services-scrolling2");

let scrollTween2 = gsap.to(sections2, {
    xPercent: -100 * (sections2.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".services-scroll-wrapper2",
        pin: true,
        scrub: 0.1,
        start: "top 10%",
        end: "+=1000",
    },
})


/* End services-scroll-horizontal-2 End */


/* services-clip-path-section */

gsap.to(".services-path-img", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -400,
});

/* End services-clip-path-section End */