// const mouse = document.getElementById("mouse");
// const circle1 = document.getElementById("circle1");
// const circle2 = document.getElementById("circle2");

// window.addEventListener("mousemove", (e) => {
//   mouse.style.left = e.pageX + "px";
//   mouse.style.top = e.pageY + "px";
//   circle1.style.left = e.pageX + "px";
//   circle1.style.top = e.pageY + "px";
//   circle2.style.left = e.pageX + "px";
//   circle2.style.top = e.pageY + "px";
// });

const mouses = document.querySelectorAll(".cursor");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
