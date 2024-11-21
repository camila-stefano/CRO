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

function addClassNameListener(selector, callback) {
  var elem = document.querySelector(selector);
  var lastClassName = elem.className;
  window.setInterval(function () {
    var className = elem.className;
    if (className !== lastClassName) {
      callback();
      lastClassName = className;
    }
  }, 10);
}

window.onload = function () {
  waitForElm(".Campaign.CampaignType--popup").then((popup) => {
    // Remove the popup from the DOM

    popup.remove();

    addClassNameListener("html", () => {
      if (document.querySelector(".om-position-popup")) {
        document.querySelector("html").classList.remove("om-position-popup");
      }
    });
  });
};
