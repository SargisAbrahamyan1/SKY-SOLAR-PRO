/* examples-text-img-container */

let s6 = new Swiper('.blog-swiper-container', {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
});

let btnItem = document.getElementById('loadMore')
$(document).ready(function () {
    $(".blog-content").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".blog-content:hidden").slice(0, 2).slideDown();
        if ($(".blog-content:hidden").length == 0) {
            btnItem.style.display = 'none'
        }
    });
})

/* End examples-text-img-container End */