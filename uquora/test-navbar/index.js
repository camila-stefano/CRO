function handleDropdownHover(triggerSelector, menuSelector) {
  const triggerElement = document.querySelector(triggerSelector);
  const menuElement = document.querySelector(menuSelector);

  if (triggerElement && menuElement) {
    menuElement.classList.add("display-none");

    triggerElement.addEventListener("mouseover", () => {
      menuElement.classList.remove("display-none");
      menuElement.classList.add("display-flex");
    });

    triggerElement.addEventListener("mouseout", () => {
      menuElement.classList.remove("display-flex");
      menuElement.classList.add("display-none");
    });

    menuElement.addEventListener("mouseover", () => {
      menuElement.classList.remove("display-none");
      menuElement.classList.add("display-flex");
    });

    menuElement.addEventListener("mouseout", () => {
      menuElement.classList.remove("display-flex");
      menuElement.classList.add("display-none");
    });
  }
}

handleDropdownHover(".products-dropdown", ".floating-menu-container");
handleDropdownHover(
  ".learning-dropdown",
  ".floating-learning-center-container"
);
