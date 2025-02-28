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

    const validPaths = [
      "/product/players-4-carbon/25TBSX5",
      "/product/tour-performance/25THATP",
      "/product/tour-performance-mesh/25THATPM",
      "/product/laguna/25THALG",
      "/product/players-5/23TGB06",
      "/product/santa-cruz/24THSC",
    ];

    if (!validPaths.some((path) => currentPath.includes(path))) {
      console.log("No matching path found $$$");
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

      const elementToRemove = document.querySelector(
        "#thumbnails div[data-slick-index='1']"
      );

      if (!elementToRemove) {
        console.log("Element not found, retrying... $$$");
        setTimeout(removeSlideWhenReady, 500);
        return;
      }

      elementToRemove.style.display = "none";
      console.log("Element removed via slickRemove $$$");
    }

    removeSlideWhenReady();
  }

  deleteElement();
});
