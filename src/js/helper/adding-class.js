document
  .querySelector(".main")
  .querySelector(".row1")
  .querySelector("h2")
  .classList.add("anim");

Array.from(
  document.querySelector("main").querySelector(".row1-flex").children
).forEach((box) => {
  box.classList.add("anim");
});

document.querySelector("main").querySelector(".row2").classList.add("anim");
