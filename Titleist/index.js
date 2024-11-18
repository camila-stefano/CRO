function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  waitForElm(".corinne-campaign.Campaign").then((popup) => {
    // Remove the popup from the DOM
    console.log("🚀 ~ waitForElm ~ popup:", popup);

    popup.remove();

    // Remove the popup class from the html element
    timeout = setTimeout(() => {
      document.querySelector("html").classList.remove("om-position-popup");
    }, 500);
  });
});
