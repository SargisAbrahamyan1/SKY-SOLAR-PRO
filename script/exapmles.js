/* examples-text-img-container */

let s6 = new Swiper('.examples-swiper-container', {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
});
const swiperSlides = document.getElementsByClassName('examples-swiper-slide');
s6.on('examples-slideChange', function () {
    const otherSlides = swiperSlides
    for (let index = 0; index < swiperSlides.length; index++) {
        const element = swiperSlides[index];
    }
});


let btnItem = document.getElementById('loadMore')
$(document).ready(function () {
    $(".examples-content").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".examples-content:hidden").slice(0, 2).slideDown();
        if ($(".examples-content:hidden").length == 0) {
            btnItem.style.display = 'none'
        }
    });
})

/* End examples-text-img-container End */