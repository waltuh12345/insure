import "../scss/main.scss";
const body = document.querySelector("body");
const loading = document.querySelector(".loading-wrapper");
body.style.overflowY = "hidden";

import("./helper/adding-class"),
  Promise.all([
    import("./components/theme"),
    import("./components/menu"),
    import("./helper/scroll-anim"),
  ]).then(() => {
    body.style.overflowY = "";
    loading.style.display = "none";
  });
