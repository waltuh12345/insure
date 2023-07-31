import { animate, isAnimating } from "../helper/animation";
import "animate.css";

const menuToggle = document.querySelector(".header-menu-toggle");
const body = document.querySelector("body");

console.log(menuToggle);

const isScrollable = (value) => {
  if (!value) {
    body.classList.add("disable-scroll");
    return;
  }

  body.classList.remove("disable-scroll");
};

function menuHandler(e) {
  if (isAnimating) return;

  this.classList.toggle("active");
  const arg = this.classList.contains("active");
  const hiddenContent = this.nextElementSibling;
  const container = hiddenContent.querySelector(".header-menu-overlay");

  if (arg) {
    isScrollable(false);
    hiddenContent.style.display = "block";
    container.style.display = "none";
    animate(hiddenContent, "fadeIn").then(() => {
      container.style.display = "";
      return animate(container, "fadeInRight", "faster");
    });
  } else {
    animate(container, "fadeOutRight", "fast")
      .then(() => {
        container.style.display = "none";
        return animate(hiddenContent, "fadeOut", "faster");
      })
      .then(() => {
        container.style.display = "";
        hiddenContent.style.display = "";
        isScrollable(true);
      });
  }
}

function handleMenuAppearance() {
  const arg = window.innerWidth;

  if (arg >= 860) {
    menuToggle.style.display = "none";
    isScrollable(true);
  } else {
    menuToggle.style.display = "";
  }

  if (menuToggle.classList.contains("active") && arg <= 860) {
    isScrollable(false);
  }
}

handleMenuAppearance();
menuToggle.addEventListener("click", menuHandler);
window.addEventListener("resize", handleMenuAppearance);
