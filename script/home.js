/* BY PIXEL IT COMPANY // www.pixelitcompany.com */

gsap.registerPlugin(ScrollTrigger);


/* home-page-video-view */

let iconsHover = document.querySelectorAll(".home-page-icons-hover");
let svgHover = document.querySelectorAll(".home-page-svg-hover");

for (let i = 0; i < iconsHover.length; i++) {
    iconsHover[i].onmouseover = () => {
        for (let j = 0; j < svgHover.length; j++) {
            svgHover[j].style.animation = "none"
        }
    }
}


/* End home-page-video-view End */


/* home-page-panel-sun */

const windowWidth = window.innerWidth;

if (windowWidth >= 360 && windowWidth <= 744) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".home-page-panel-sun",
            pin: true,
            scrub: .5,
            start: "top 20%",
        }
    })
        .from(".mini-panel", { y: '-190vh', stagger: .4 });
}
else {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".home-page-panel-sun",
            pin: true,
            scrub: .5,
            start: "top 7%",
        }
    })
        .from(".mini-panel", { y: '-190vh', stagger: .4 });
}


/* End home-page-panel-sun End */


/* home-page-parallax-img */

gsap.to(".home-page-parallax-img", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -400,
});

/* End home-page-parallax-img End */

/* home-page-scrollsmoother */

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const scaleImage = () => {
    const image = document.querySelector(".home-page-image-scale__right img");
    const imageWrapper = document.querySelector(".home-page-image-scale__right");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-page-image-scale__section",
            start: "top top",
            pin: true,
            end: "+=1500",
            scrub: true
        }
    });

    tl.to('.home-page-texts-container', {
        y: -3000,
        duration: 100,
        scrub: .1,
    }, 30)

    tl.to(
        imageWrapper,
        {
            xPercent: 50,
            duration: 20,
        },
        0
    )

        .to(
            image,
            {
                xPercent: -40,
                duration: 20,
            },
            0
        )

        .to(
            image,
            {
                transformOrigin: "bottom center",
                scale: 0.9,
                duration: 70,
            },
            30
        )

        .to(
            ".home-page-box--one",
            {
                scaleY: 1,
                duration: 10
            },
            30
        )

        .to(
            ".home-page-box--two",
            {
                scaleX: 1,
                duration: 10
            },
            40
        )

        .to(
            ".home-page-box--three",
            {
                scaleY: 0.7,
                duration: 10
            },
            50
        )

        .to(
            ".home-page-box--four",
            {
                scaleX: 1,
                duration: 10
            },
            60
        );

    return tl;
};

const master = gsap.timeline();

master.add(scaleImage(".home-page-image-scale__right"));


let swiper = new Swiper('.home-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.home-swiper-button-next',
        prevEl: '.home-swiper-button-prev',
    },
});

gsap.to(".home-page-scrollsmoother-mobile-image", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -100,
});

gsap.to(".home-page-scrollsmoother-mobile-image-2", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -30,
});

gsap.to(".home-page-scrollsmoother-mobile-image-3", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -30,
});

/* End home-page-scrollsmoother End */



/* home-page-scroll-horizontal */
let sections = gsap.utils.toArray(".home-page-scrolling");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".home-page-scroll-wrapper",
        pin: true,
        scrub: 0.1,
        start: "top 15%",
        end: "+=4000",
    },
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".home-page-scrolling-text-cont",
        start: "top 20%",
        pin: true,
        end: "+=4000",
        scrub: true,
    }
});

/* End home-page-scroll-horizontal End */



/* home-page-parallax-yellow-section */

gsap.to(".home-page-parallax-yellow-img", {
    scrollTrigger: {
        scrub: 0.5,
    },
    y: -400,
});


/* End home-page-parallax-yellow-section End */


/* home-page-video-section */

let btnItem = document.getElementById('loadMore')
$(document).ready(function () {
    $(".home-page-content").slice(0, 2).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".home-page-content:hidden").slice(0, 2).slideDown();
        if ($(".home-page-content:hidden").length == 0) {
            btnItem.style.display = 'none'
        }
    });
})

/* End home-page-video-section End */


/* home-page-video-rec-open-close */

let homePageVideoView = document.querySelector(".home-page-video-rec-open-close");
let homePageVideo = document.querySelectorAll(".home-page-video-collaj-img-cont");
let homePageVideoOPen = document.querySelector(".home-page-close");
let homePageWebVideo = document.querySelector(".home-page-video-rec-cont");

for (let i = 0; i < homePageVideo.length; i++) {
    homePageVideo[i].onclick = () => {
        homePageVideoView.style.display = "flex";
    }
}

homePageVideoView.onclick = () => {
    homePageVideoView.style.display = "none";
}

homePageVideoOPen.onclick = () => {
    homePageVideoView.style.display = "none";
}

window.onkeydown = (event) => {
    if (event.keyCode == 27) {
        homePageVideoView.style.display = "none";
    }
}

let homePageIframe = document.createElement("iframe");
homePageIframe.setAttribute("src", "https://www.youtube.com/embed/rDdUWDaJzQ8");
homePageIframe.setAttribute("style", "width: 100%; height: 100%");
homePageWebVideo.appendChild(homePageIframe)

/* End home-page-video-rec-open-close End */