function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutationsList, obs) => {
    const element = document.querySelector(selector);
    if (element) {
      console.log("Container detected $$$");
      obs.disconnect();
      callback(element);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

waitForElement(".thumbnails-container", function () {
  function hideSlidesWhenReady(slides = []) {
    const track = document.querySelector(".slick-track");
    const slider = document.querySelector(
      ".thumbnails-container .slick-slider"
    );

    if (!track || !slider || typeof $(slider).slick !== "function") {
      setTimeout(() => hideSlidesWhenReady(slides), 500);
      return;
    }

    if (!slides.length) return;

    slides.forEach((slide) => {
      // Ocultar elementos en .product-primary-image con visibility: hidden
      document
        .querySelectorAll(
          `.product-primary-image [data-slick-index='${slide}']`
        )
        .forEach((element) => {
          element.style.visibility = "hidden";
        });

      // Ocultar elementos en .product-thumbnails con display: none
      document
        .querySelectorAll(`.product-thumbnails [data-slick-index='${slide}']`)
        .forEach((element) => {
          element.style.display = "none";
        });
    });
  }

  function deleteElement() {
    const currentPath = document.location.pathname.replace(/\/$/, "");
    console.log("$$$ Current Path:", currentPath);

    const validPaths = [
      "/players-4-carbon/25TBSX5",
      "/tour-performance/25THATP",
      "/tour-performance-mesh/25THATPM",
      "/players-5/23TGB06",
      "/santa-cruz/24THSC",
    ];

    if (validPaths.some((path) => currentPath.includes(path))) {
      hideSlidesWhenReady([1]);
      return;
    }

    if (currentPath.includes("/product/laguna/25THALG")) {
      hideSlidesWhenReady([1, 3, 4]);
      return;
    }
  }

  function observeProductImageContainer() {
    const targetNode = document.querySelector(".product-image-container");

    if (!targetNode) {
      console.log(
        "$$$ $$$ .product-image-container no encontrado, esperando..."
      );
      setTimeout(observeProductImageContainer, 500);
      return;
    }

    console.log("$$$ $$$ Observando cambios en .product-image-container");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        deleteElement();
      });
    });

    observer.observe(targetNode, {
      childList: true,
      attributes: true,
      subtree: true,
    });
  }

  observeProductImageContainer();
});
