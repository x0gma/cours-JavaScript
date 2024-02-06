const body = document.querySelector("body");
const p = document.querySelector("p");
let colorf;

const generator = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;

  body.style.background = color;
  p.textContent = color;
  colorf = color;
};

p.addEventListener("click", () => {
  navigator.clipboard.writeText(colorf);
  p.innerHTML += `<span>Copié !</span>`;
});

generator();
setInterval(generator, 2000);
