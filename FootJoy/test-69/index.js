console.log("🚀 SCRIPT LOADED");

const plpActions = document.querySelector(".plp-actions");
const select = document.querySelector("#grid-sort-header");

if (select && select.firstElementChild) {
  select.firstElementChild.textContent = "Sort";
  console.log(
    "🚀 Primer hijo del select modificado:",
    select.firstElementChild.textContent
  );
}

console.log(plpActions);
function handleScroll() {
  const plpActionsTop = window.scrollY;

  if (plpActionsTop <= 320) {
    console.log("🚀 MENOR A 320");
    plpActions.classList.remove("fixed");
  } else {
    console.log("🚀 MAYOR A 320");
    plpActions.classList.add("fixed");
  }
}

window.addEventListener("scroll", handleScroll);
