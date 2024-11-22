console.log("🚀 SCRIPT LOADED");

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function observeHtmlClass() {
  const htmlElement = document.querySelector("html");

  if (!htmlElement) {
    console.error("The <html> element was not found.");
    return;
  }

  const htmlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        console.log("🚀 ~ Updated Class in <html>: ", htmlElement.className);

        // Si la clase "om-position-popup" está presente, se elimina antes de que afecte el diseño
        if (htmlElement.classList.contains("om-position-popup")) {
          console.log("🚀 ~ Deleting class 'om-position-popup'...");
          htmlElement.classList.remove("om-position-popup");
        }
      }
    });
  });

  // Observe changes in attributes of the <html> element
  htmlObserver.observe(htmlElement, { attributes: true });
}

// Start the observer immediately
observeHtmlClass();

// Wait for the popup to appear and remove it
waitForElm(".Campaign.CampaignType--popup").then((popup) => {
  console.log("🚀 ~ Popup found:", popup);

  // Remove the popup from the DOM
  popup.remove();
  console.log("🚀 ~ Popup deleted");
});
