const body = document.querySelector("body");
let isAnimating = false;

const animate = (el, name, duration = "fast") => {
  return new Promise((resolve, reject) => {
    if (isAnimating) return;

    function handleAnimation(e) {
      e.stopPropagation();
      isAnimating = false;
      el.classList.remove(
        `animate__animated`,
        `animate__${name}`,
        `animate__${duration}`
      );
      resolve("animation end");
    }

    isAnimating = true;
    el.classList.add(
      `animate__animated`,
      `animate__${name}`,
      `animate__${duration}`
    );
    el.addEventListener("animationend", handleAnimation, { once: true });
  });
};

export { animate, isAnimating };
