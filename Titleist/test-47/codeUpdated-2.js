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
      console.log("Path does not match $$$");
      return;
    }

    console.log("URL matches $$$");

    function removeSlideWhenReady() {
      const container = document.querySelector(".slick-track");
      const slider = document.querySelector(
        ".thumbnails-container .slick-slider"
      );

      if (!container || !slider || typeof $(slider).slick !== "function") {
        console.log("Slick not initialized yet, retrying... $$$");
        setTimeout(removeSlideWhenReady, 500);
        return;
      }

      console.log("Slick initialized $$$");

      const elementToRemove = container.querySelector(
        "div[data-slick-index='1']"
      );
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
