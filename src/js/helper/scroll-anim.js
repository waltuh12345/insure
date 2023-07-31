const body = document.querySelector("body");
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    entry.target.style.opacity = "0";

    entry.target.addEventListener("animationstart", (e) => {
      entry.target.style.opacity = "1";
    });

    if (entry.isIntersecting) {
      // If the element is intersecting, show it
      entry.target.classList.add("animated");
    } else {
      entry.target.classList.remove("animated");
      // If the element is not intersecting, hide it
    }
  });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Get the element to observe
const elementToObserve = document.querySelectorAll(".anim");

// Start observing the element
elementToObserve.forEach((elem) => observer.observe(elem));
