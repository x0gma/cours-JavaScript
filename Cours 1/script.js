// alert("Salut JS");

/*Commenter
plusieurs 
lignes */

console.log("Coucou");

// KamelCase
let maSuperVariable = "Hello";
console.log(maSuperVariable);

// **Les variables **

var unTexte = "voici un texte";

// const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voilà c'était le contenu";

// Concatenation avec guillements altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voilà c'était le contenu`;

//******TYPES DE DONNEES***

let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;

//Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

//Objet : accolades {}

// let object = {
//     prénom : "audray"
//     age : 33,
//     ville : "bordeaux"
// }

let arbre;

arbre = "sapin";

//*****Les opérateurs *********/

console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
//puissance
console.log(4 ** 5);

//***Opérateurs d'affectations */

let total = 0;

//++ = +1, --=-1,  +=5 = total +5 etc
total++;
total += 5;
total -= 4;
total *= 2;

//*****Structures de contrôle ********/
let x = 2;
let y = 5;

if (x > y) {
  alert("Yes x plus gros que y");
} else if (y > x) {
  alert("Y plus grand!");
} else {
  alert("ILS SONT EGAUX");
}

//On teste si la variable est true
if (x) {
  // console.log("x existe");
}

// === test l'égalité en type et valeur

let a = 2;
let b = "2";

if (a === b) {
  console.log("Ils sont égaux");
} else {
  console.log("pas égaux");
}

// ==teste l'égalité de valeur sans prendre en compte le type

if (a == b) {
  console.log("Ils sont égaux");
} else {
  console.log("pas égaux");
}

/// || ou
/// && et

if (x < y || x > 1) {
  console.log("UI");
}

// && il faut que toutes les conditions soit réuines
// || il faut que soit l'une soit l'autre soit rempli

//***Les fonctions */

function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("calcul terminé !");
}

//Il faut impérativement appeler la fonction pour qu'elle se joue
faireQuelqueChose();

//fonction flêchée

const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);

// ***La portée des variables

function add2() {
  let num = 4;
  console.log(num + 2);
}

console.log(num);
