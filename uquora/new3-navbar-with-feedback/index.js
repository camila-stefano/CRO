function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    const element = document.querySelector(selector);

    if (element) {
      callback(element);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

const handleArrowOnHover = (id) => {
  waitForElement(`.dropdown-content.${id}`, (element) => {
    element.onmouseover = () => {
      const arrow = document.querySelector(`.mobileOff.${id} .arrow`);

      if (arrow.classList.contains("active")) return;

      arrow.classList.add("active");
    };

    element.onmouseout = () => {
      const arrow = document.querySelector(`.mobileOff.${id} .arrow`);

      if (!arrow.classList.contains("active")) return;

      arrow.classList.remove("active");
    };
  });
};

handleArrowOnHover("products");
handleArrowOnHover("learning");

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
