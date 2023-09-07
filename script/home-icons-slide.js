let mentorsSlider = new Swiper(".home-page-student-slider", {
    slidesPerView: 'auto',
    speed: 1000,
});



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