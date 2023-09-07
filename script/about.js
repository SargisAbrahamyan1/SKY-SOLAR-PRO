/* about-swiper-slide-cursor */
follower = document.querySelector(".cursor-follower");

let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });
    }
});

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// let swiper = document.querySelector(".about-swiper-wrapper");

let swiper = document.querySelectorAll(".about-swiper-slide");

for (let i = 0; i < swiper.length; i ++) {
  swiper[i].onmouseover = () => {
        follower.classList.add("drag")
    }
    
    swiper[i].onmouseleave = () => {
        follower.classList.remove("drag")
    }
}

// swiper.onmouseover = () => {
//     follower.classList.add("drag")
// }

// swiper.onmouseleave = () => {
//     follower.classList.remove("drag")
// }

/* End about-swiper-slide-cursor End */

(() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      svg = document.querySelector(".menu-svg"),
      mediaSize = 1240;
    const subMenu = document.querySelector(".sub-menu");
  
    openNavMenu.onclick = () => {
      openNavMenu.style.display = "none"
      closeNavMenu.style.display = "block"
    }
  
    closeNavMenu.onclick = () => {
      closeNavMenu.style.display = "none"
      openNavMenu.style.display = "block"
      if (subMenu.style.maxHeight = subMenu.scrollHeight + "100px") {
        subMenu.style.maxHeight = 0
      }
    }
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
  
    function toggleNav() {
      navMenu.classList.toggle("open");
      document.body.classList.toggle("hidden-scrolling");
    }
  
    svg.onclick = () => {
      svg.style.transform = "rotate(180deg)"
      if (subMenu.style.maxHeight != subMenu.scrollHeight + "px") {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"
        svg.style.top = "3%"
      }
      else {
        subMenu.style.maxHeight = 0
        svg.style.top = "25%"
        svg.style.transform = "rotate(0deg)"
      }
    }
  
    function collapseSubMenu() {
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }
  
    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  })();