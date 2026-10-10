console.log("Exemples de tipus bàsics en TypeScript");

// --- BOOLEAN ---
let mybool: boolean = true;

// --- NUMBER ---
// Opció 1: Tipat explícit (enters o decimals)
let num: number = 2;
let decimal: number = 3.14;

// Opció 2: Inferència automàtica (el compilador detecta que és number)
let num2 = 2;

// --- STRING ---
let string1: string = "Cadena";
let salutacio: string = `Hola, el número és ${num}`; // Template literal

// --- NULL i UNDEFINED ---
let variableSenseDefinir: undefined = undefined;
let valorBuit: null = null;

// --- ARRAYS ---
// Array d'unió de tipus (inferit automàticament): accepta number, string o boolean
let arrayclassic = [25, 'classic', true];

// Array de tipus fix (només de strings)
let arrayfix: string[] = ['Super Mario', 'WoW', 'Tetris'];

// Array d'unió explícit inicialitzat buit
let caixa: (number | string | boolean)[] = [];
caixa.push("Hola");
caixa.push(100);

// --- TUPLES ---
// Array de mida i posició de tipus fixos: [posició 0: string, posició 1: number]
let persona: [string, number] = ["Maria", 28];
// persona[0] = 50; // Error! La primera posició ha de ser un string

// --- ANY ---
// Permet qualsevol valor, desactiva les comprovacions de TS i l'autocompletat
let cosa: any = "Hola";
cosa = 1;
cosa = true;

// --- UNKNOWN ---
// Més segur que 'any'. S'ha de comprovar el tipus abans de fer-lo servir
let valorDesconegut: unknown = "Hola món";

if (typeof valorDesconegut === "string") {
    // Dins d'aquest 'if', TypeScript ja sap automàticament que és un string
    console.log(valorDesconegut.toUpperCase());
}