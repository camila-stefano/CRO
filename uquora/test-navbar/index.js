// Create <link> element to add Font Awesome CDN
const fontAwesomeCDN = document.createElement("link");
fontAwesomeCDN.rel = "stylesheet";
fontAwesomeCDN.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(fontAwesomeCDN);

const productsDropdown = document.querySelector(".products-dropdown");

const floatingMenuContainer = document.querySelector(
  ".floating-menu-container"
);

productsDropdown.addEventListener("mouseover", () => {
  floatingMenuContainer.classList.add("display-block");
});

productsDropdown.addEventListener("mouseout", () => {
  floatingMenuContainer.classList.remove("display-block");
});

floatingMenuContainer.addEventListener("mouseover", () => {
  floatingMenuContainer.classList.add("display-block");
});

floatingMenuContainer.addEventListener("mouseout", () => {
  floatingMenuContainer.classList.remove("display-block");
});
