const themeToggle = document.querySelector(".slider");
const themeHub = document.querySelector(".slider");

// Event Listeners
themeToggle.addEventListener("click", themeSwap);
// Functions
function themeSwap() {
  if (!document.body.dataset.theme) {
    document.body.dataset.theme = "dark-mode";
    themeHub.classList.add("dark");
  } else {
    document.body.dataset.theme = "";
    themeHub.classList.remove("dark");
  }
}
