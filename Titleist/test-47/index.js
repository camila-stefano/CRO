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
    console.log("Current Path:", document.location.pathname);

    if (document.location.pathname !== "/product/players-4-carbon/25TBSX5") {
      console.log("Path does not match $$$");
      return;
    }

    console.log("URL matches $$$");

    const track = document.querySelector(".slick-track");
    if (!track) {
      console.log("Track NOT found $$$");
      return;
    }
    console.log("Track detected $$$");

    const elements = track.querySelectorAll("div[data-slick-index='1']");
    console.log("Elements found:", elements.length);

    if (elements.length > 0) {
      elements.forEach((el) => el.remove());
      console.log("Element deleted $$$");
    } else {
      console.log("No elements to delete $$$");
    }
  }

  deleteElement();
});
