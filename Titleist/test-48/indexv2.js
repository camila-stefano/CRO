function toggleSlickSlider() {
  const targetContainer = document.querySelector(
    ".product-col-1.product-image-container-outer"
  );
  if (!targetContainer) return;

  const slider = targetContainer.querySelector(".slider");
  if (!slider) return;

  const isSlickInitialized = slider.classList.contains("slick-initialized");

  if (window.innerWidth >= 992) {
    if (isSlickInitialized && typeof $(slider).slick === "function") {
      $(slider).slick("unslick");
    }
  } else {
    if (!isSlickInitialized && typeof $(slider).slick === "function") {
      $(slider).slick({
        dots: false,
        arrows: true,
        infinite: true,
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", toggleSlickSlider);
window.addEventListener("resize", toggleSlickSlider);
