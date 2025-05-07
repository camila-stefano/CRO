function toggleSlickSlider() {
  const $targetContainer = $(".product-col-1.product-image-container-outer");
  const $slider = $targetContainer.find(".slider");

  if (window.innerWidth >= 992) {
    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }
  } else {
    if (!$slider.hasClass("slick-initialized")) {
      $slider.slick({
        dots: false,
        arrows: true,
        infinite: true,
      });
    }
  }
}

$(document).ready(function () {
  toggleSlickSlider();
});

$(window).on("resize", function () {
  toggleSlickSlider();
});
