const learningDropdown = document.querySelector(".learning-dropdown");
const floatingLearningCenterContainer = document.querySelector(
  ".floating-learning-center-container"
);
if (learningDropdown && floatingLearningCenterContainer) {
  learningDropdown.addEventListener("mouseover", () => {
    floatingLearningCenterContainer.classList.remove("display-none");
    floatingLearningCenterContainer.classList.add("display-block");
  });
  learningDropdown.addEventListener("mouseout", () => {
    floatingLearningCenterContainer.classList.remove("display-block");
    floatingLearningCenterContainer.classList.add("display-none");
  });
  floatingLearningCenterContainer.addEventListener("mouseover", () => {
    floatingLearningCenterContainer.classList.remove("display-none");
    floatingLearningCenterContainer.classList.add("display-block");
  });
  floatingLearningCenterContainer.addEventListener("mouseout", () => {
    floatingLearningCenterContainer.classList.remove("display-block");
    floatingLearningCenterContainer.classList.add("display-none");
  });
}
