document.addEventListener("DOMContentLoaded", () => {
  // Navbar mobile functionality

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#mainNavbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    console.log(
      "🚀 ~ navbarToggler.addEventListener ~ isExpanded:",
      isExpanded
    );

    navbarToggler.setAttribute("aria-expanded", !isExpanded);
  });

  const productsLink = document.querySelector(".products-content-mobile");
  const productsContainer = document.querySelector(
    ".products-mobile-container"
  );

  if (productsLink && productsContainer) {
    const link = productsLink.querySelector("a");
    console.log("🚀 ~: link", link);

    const productButton = document.createElement("button");

    productButton.setAttribute("class", link.getAttribute("class"));
    productButton.innerHTML = link.innerHTML;
    console.log("🚀 ~: productButton", productButton);

    productsLink.insertBefore(productButton, link);
    link.remove();

    productsLink.addEventListener("click", (event) => {
      event.preventDefault();
      productsContainer.classList.toggle("display-block");
    });

    document.addEventListener("click", (event) => {
      if (
        !productsContainer.contains(event.target) &&
        !productsLink.contains(event.target)
      ) {
        productsContainer.classList.remove("display-block");
      }
    });
  }
});
