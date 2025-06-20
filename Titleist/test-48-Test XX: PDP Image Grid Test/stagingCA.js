function runTest() {
  // Inyecta los estilos si no están presentes
  if (!document.getElementById("test-101-css")) {
    const style = document.createElement("style");
    style.id = "test-101-css";
    style.textContent = `
        .regular.slider {
          display: block;
        }
        div#wrapper {
          overflow-x: visible;
        }
        div#pdpMain {
          overflow: visible;
        }
        .product-col-2.product-detail {
          position: sticky;
          top: 0px;
        }
        body {
          overflow-x: hidden;
        }
  
        @media (min-width: 992px) {
          .thumbnails-container {
            display: none !important;
          }
          #pdpMain .product-core-info .breadcrumb {
            position: relative !important;
            margin: 16px 0 8px 20px !important;
          }
          .regular.slider {
            display: grid;
            grid-template-columns: auto auto;
            gap: 8px;
            max-height: 100% !important;
          }
          #pdpMain .product-core-info {
            padding: 0px 48px;
          }
          #pdpMain
            .product-core-info
            .product-image-container
            .product-primary-image
            .regular.slider {
            background-color: transparent !important;
          }
          .thumb {
            background-color: #f0f0f0;
          }
          #pdpMain .product-core-info .product-col-2 {
            padding-top: 39px !important;
          }
          #pdpMain .product-core-info + .product-info {
            margin-top: 0;
          }
          #pdpMain .product-content .product-content-item,
          #pdpMain .product-content .club-pdp-compare {
            position: static;
          }
          #pdpMain .product-core-info .product-image-container.sticky {
            position: static;
            width: 100%;
          }
          .product-primary-image .glass-icon {
            display: none;
          }
        }
  
        @media only screen and (min-width: 1441px) {
          #pdpMain .product-core-info .product-col-2 {
            max-width: 475px !important;
          }
        }
      `;
    document.head.appendChild(style);
  }

  // Manejo del slider
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

  // Elimina el elemento no deseado si está presente
  const $badElements = document.querySelectorAll(
    ".product-image-container-height"
  );
  $badElements.forEach((el) => el.remove());
}

// Observa si se elimina el popup de login
function waitForMembersDialogRemoval(callback) {
  const observer = new MutationObserver(() => {
    const dialog = document.querySelector(".members-only-dialog");
    if (!dialog) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

$(document).ready(() => {
  // Espera que se elimine el popup antes de ejecutar
  waitForMembersDialogRemoval(() => {
    runTest();
    // Observador para mantener el test activo si hay cambios dinámicos
    const observer = new MutationObserver(runTest);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    $(window).on("resize", runTest);
  });
});
// Ejecutar al inicio y en resize
$(document).ready(runTest);
$(window).on("resize", runTest);
