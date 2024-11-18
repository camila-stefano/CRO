function hideInMobile() {
  const element = document.getElementById("name-container");

  if (window.innerWidth < 768) {
    element.style.display = "none";
  } else {
    element.style.display = "";
  }
}

window.addEventListener("resize", () => {
  hideInMobile("name-container");
});

hideInMobile("name-container");

document.querySelectorAll(".product-grid-item").forEach((item) => {
  item.appendChild(document.createElement("br"));
  item.appendChild(document.createElement("br"));
});

const productTile = document.querySelectorAll(".product-grid-item");
