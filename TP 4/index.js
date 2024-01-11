const sideBar = document.getElementById("side-bar");
const veil = document.querySelector(".veil");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("sideBarOut");

  if (sideBar.classList.contains("sideBarOut")) {
    sideBar.style.left = 0;
    veil.style.opacity = 1;
  } else {
    sideBar.style.left = "-230px";
    veil.style.opacity = 0;
  }
});

veil.addEventListener("click", () => {
  if (sideBar.classList.contains("sideBarOut")) {
    sideBar.style.left = "-230px";
    veil.style.opacity = 0;
    sideBar.classList.remove("sideBarOut");
  }
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix
