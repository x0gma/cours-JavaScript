/// Les variables
let num1 = 24;
let num2: number;
let numOrString: number | string;

num2 = 48;


///tableaux 

let arr = ["chien", "chat", "poisson"];

// arr[0] = false;

let tableau: (number | boolean)[] = [];
tableau.push(false);
tableau.push(24)
// tableau.push('string');


////les objets

interface Player {
    id: number,
    name: string,
    jersey?: number,
}

const zidane: Player = {
    id: 0,
    name: "Zidane",
};


///////Les classes

class Singer {
    id: number;
    name: string;
    alive?: boolean

    constructor(id: number, name: string, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}

const prince = new Singer(0, 'Prince')
// console.log(prince);


////les fonctions

const sayMyName = (name?: string) => {
    console.log(`Bonjour ${name}`); 
}

const ageDuCapitaine = (age:number | string, size?:number):void => {
    if (size) {
        console.log(`la taille du capitaine est de ${size}cm et il est agé de : ${age} ans`);
    } else {
        console.log(`Le Capitaine est agé de : ${age} ans`);
    }
}

ageDuCapitaine(16, 185);


//////Enum & Tuple
enum Role {ADMIN, PREMIUM, BASIC}

console.log(Role.ADMIN);


interface User {
    name:string;
    attributes: [number, string];
    role : Role;
}

const user1:User = {
    name: 'Adrien',
    attributes: [182, 'author'],
    role: Role.ADMIN
}

if (user1.role === Role.ADMIN) {
    console.log('connexion spéciale');
    
}