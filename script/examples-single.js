/* examples-single-images-click */

let btnItem = document.getElementById('loadMore')
$(document).ready(function () {
    $(".examples-single-content").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".examples-single-content:hidden").slice(0, 2).slideDown();
        if ($(".examples-single-content:hidden").length == 0) {
            btnItem.style.display = 'none'
        }
    });
})


let examplesImage = document.getElementsByClassName("examples-single-content-img-cont");
let imageOpen = document.getElementsByClassName("examples-single-open-close-cont");
let image = document.getElementsByClassName("examples-single-content-img");
let openImage = document.getElementsByClassName("example-single-image");

for (let i = 0; i < examplesImage.length; i++) {
    examplesImage[i].onclick = () => {
        if (imageOpen[i].style.display != "flex") {
            imageOpen[i].style.display = "flex";
        }
        else {
            imageOpen[i].style.display = "none";
        }
    }
}

window.onkeydown = (event) => {
    if (event.keyCode == 27) {
        for (let j = 0; j < imageOpen.length; j++) {
            imageOpen[j].style.display = "none";
        }
    }
}

/* End examples-single-images-click End */