//***********************************Selecteurs**********************************************

//document.querySelector("n'importe quelle balise HTML") permet de pointer une balise HTML
// document.querySelector("h4").style.background = "yellow";
// le .background peut être remplacé par n'importe quel attribut CSS (margin, padding, display...)

// const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "rgb(21, 150, 185)";

//*************************************CLICK************************************************ */

// Lorsque vous créé une variable, loggé là dans la console pour être sur qu'elle a bien été pointé.
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

//les attributs Css doivent être écris en kamelCase.
// questionContainer.style.borderRadius = "150px";

//le addEventListener a deux paramètres définit dans ses parenthèse (Un évènement , une fonction)
// questionContainer.addEventListener("click", () => {
//   console.log("Click !");
// });

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
  //   On met question-clicked et non .question-clicked car avec classList on sait déjà que nous cherchons une classe
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// L' ordre de priorité peuvent poser problème si vous injectez une classe à un id  <div> > #id > .class > baliseHTML

//****************************************Mouse Events************************************************* */

//les variables doivent toujours être déclaré en haut de la page ici il s'agit d'un exercie
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  //le (e) renferme tout un tas de données de l'évènement en l'occurence ici il renferme, entre autres, le positionnement de la souris
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// *****************************************KEYPRESS EVENTS*********************************************

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  if (e.key === "z") ring(e.key);
});

// *******************************************SCROLL EVENTS ************************************************

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//************************************************Form EVENTS*************************************** */

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language;
// ou let pseudo;

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // JavaScript connait déjà les id des checkbox et des bouttons donc pas besoin de les déclarer en ammont
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language préféré : ${language} </h4>
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
});

//**********************************************Load EVENTS********************************************** */

window.addEventListener("load", () => {
  //   console.log("Document chargé !");
});

//**************************************** ***********************************/

// ne fonctionne que lorsque plusieurs éléments ont la même classe getElementsssssssssssByClassName
// const boxes = document.getElementsByClassName("box") d'après FromScratch fonctionne de manière capricieuse donc préférer querySelectorAll;

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//***************************************************addEventListener VS onlick*********************** */

// document.body.onclick = () => {
//   console.log("Click !");
// };

// document.body.onclick = () => {
//   console.log("bou !");
// };

//le dernier évènement onclick écrase les autres, alors que les addEventListener se font tous.

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    // console.log("click 1");
  },
  false
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    // console.log("click 2");
  },
  true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//**************************************Stop propagation **********************************/

// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

//removeEventListener existe pour enlever un évènement

//********************************************LE BOM ***************************************/

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

//********Evènements adossés à window************

//alert("hello");

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
//le 2000 correspond à un temps en miliseconde avant d'être executé

// let interval = setInterval(() => {
//   document.body.innerHTML +=
//     "<div class= 'box'> <h2>Nouvelle boite !</h2> </div> ";
// }, 1000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
// //   clearInterval(interval);
// });

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pahtname);
// console.log(location.search);

// location.replace("http://google.com");

// window.onload = () => {
//   location.href = "https://google.com";
// };

//Navigator
// console.log(navigator.userAgent);

//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

//History
// window.history.back();
//history.go(-2);

//***************************************************Set property************************************/

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
