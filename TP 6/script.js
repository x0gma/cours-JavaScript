const input = document.querySelector("input");
const list = document.querySelector(".list");

const storage = () => {
  window.localStorage.maBoite = list.innerHTML;
};

const getStorage = () => {
  if (window.localStorage.maBoite) {
    list.innerHTML = window.localStorage.maBoite;
  } else {
    list.innerHTML = `<span><i class="fa-solid fa-star-of-life"></i> Cliquez pour valider, une deuxième fois pour supprimer !</span>`;
  }
};

getStorage();

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const newSpan = document.createElement("span");
    newSpan.innerHTML = `<i class="fa-solid fa-star-of-life"></i> ${input.value}`;
    list.appendChild(newSpan);
    input.value = "";
  }
  storage();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    if (e.target.classList.contains("checked")) {
      e.target.remove();
    } else {
      e.target.innerHTML = `<i class="fa-solid fa-check"></i> ${e.target.textContent}`;
      e.target.classList.add("checked");
    }
  }
  storage();
});
