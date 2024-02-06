const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-60px";
  }
  lastScroll = currentScroll;
});
