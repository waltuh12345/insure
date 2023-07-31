const body = document.querySelector("body");

let string = localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDarkMode = (value) => {
  if (!value) {
    body.classList.add("light-mode");
    return;
  }
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
};

isDarkMode(true);

themeToggle.addEventListener("click", (e) => {
  const input = themeToggle.querySelector("input");

  if (input.checked === true) {
    isDarkMode(false);
    string = localStorage.setItem("theme", "light-mode");
  } else {
    string = localStorage.setItem("theme", "dark-mode");
    isDarkMode(true);
  }
});

if (string === "light-mode") {
  const input = themeToggle.querySelector("input");
  input.checked = true;
  isDarkMode(false);
} else {
  isDarkMode(true);
}
