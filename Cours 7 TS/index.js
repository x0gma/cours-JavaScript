"use strict";
/// Les variables
let num1 = 24;
let num2;
let numOrString;
num2 = 48;
///tableaux 
let arr = ["chien", "chat", "poisson"];
// arr[0] = false;
let tableau = [];
tableau.push(false);
tableau.push(24);
const zidane = {
    id: 0,
    name: "Zidane",
};
///////Les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, 'Prince');
// console.log(prince);
////les fonctions
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`la taille du capitaine est de ${size}cm et il est agé de : ${age} ans`);
    }
    else {
        console.log(`Le Capitaine est agé de : ${age} ans`);
    }
};
ageDuCapitaine(16, 185);
//////Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
const user1 = {
    name: 'Adrien',
    attributes: [182, 'author'],
    role: Role.ADMIN
};
if (user1.role === Role.ADMIN) {
    console.log('connexion spéciale');
}
