window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0)";
  } else {
    imgImprovise.style.opacity = 0;
    imgImprovise.style.transform = "translateX(-200px)";
  }
  if (scrollValue > 0.95) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0)";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
