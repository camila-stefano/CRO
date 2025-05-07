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

//obsrva el cambio por el scroll para evitar que se cree el elemento height
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (
        node.nodeType === 1 && // Asegura que sea un elemento HTML
        node.classList.contains("product-image-container-height")
      ) {
        node.remove();
      }
      // Si el nuevo nodo tiene hijos donde podría estar el target
      if (node.querySelectorAll) {
        const nested = node.querySelectorAll(".product-image-container-height");
        nested.forEach((el) => el.remove());
      }
    });
  });
});

// Empieza a observar el body en busca de nuevos elementos añadidos al DOM
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
