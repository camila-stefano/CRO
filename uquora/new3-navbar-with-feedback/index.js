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
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const dropdownMenu = button.nextElementSibling;
      const toggleArrow = button.querySelector(".nav-link .arrow i");

      if (dropdownMenu) {
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
      }
    });
  });
});
