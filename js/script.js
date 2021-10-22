const themeToggle = document.querySelector(".slider");

// Event Listeners
themeToggle.addEventListener("click", themeSwap);
// Functions
function themeSwap() {
  if (!document.body.dataset.theme) {
    document.body.dataset.theme = "dark-mode";
    themeToggle.classList.add("dark");
  } else {
    document.body.dataset.theme = "";
    themeToggle.classList.remove("dark");
  }
}
