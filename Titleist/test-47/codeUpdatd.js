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
  function deleteElement() {
    const currentPath = document.location.pathname.replace(/\/$/, "");
    console.log("Current Path:", currentPath);

    if (!currentPath.includes("/product/players-4-carbon/25TBSX5")) {
      return;
    } else if (currentPath.includes("/product/tour-performance/25THATP")) {
      return;
    } else if (currentPath.includes("product/tour-performance-mesh/25THATPM")) {
      return;
    } else if (currentPath.includes("/product/laguna/25THALG")) {
      return;
    } else if (currentPath.includes("/product/players-5/23TGB06")) {
      return;
    } else if (currentPath.includes("/product/santa-cruz/24THSC")) {
      return;
    }

    function removeSlideWhenReady() {
      const track = document.querySelector(".slick-track");
      const slider = document.querySelector(
        ".thumbnails-container .slick-slider"
      );

      if (!track || !slider || typeof $(slider).slick !== "function") {
        console.log("Slick not initialized yet, retrying... $$$");
        setTimeout(removeSlideWhenReady, 500);
        return;
      }

      console.log("Slick initialized $$$");

      const elementToRemove = track.querySelector("div[data-slick-index='1']");
      if (!elementToRemove) {
        console.log("Element not found, retrying... $$$");
        setTimeout(removeSlideWhenReady, 500);
        return;
      }

      console.log("Element found $$$");

      $(slider).slick("slickRemove", 1);
      console.log("Element removed via slickRemove $$$");
    }

    removeSlideWhenReady();
  }

  deleteElement();
});
