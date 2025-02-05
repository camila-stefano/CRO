function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".dropdown-btn", function () {
  document.querySelector(".dropdown-btn").addEventListener("click", () => {
    const dropdownMenu = document.querySelector(".products-mobile-container");
    const toggleArrow = document.querySelector(
      ".dropdown-btn .nav-link .arrow i"
    );

    const isCollapsed = dropdownMenu.classList.contains("display-none");

    if (isCollapsed) {
      dropdownMenu.classList.add("display-block");
      dropdownMenu.classList.remove("display-none");
      toggleArrow.classList.add("rotated");
    } else {
      dropdownMenu.classList.remove("display-block");
      dropdownMenu.classList.add("display-none");
      toggleArrow.classList.remove("rotated");
    }
  });
});
