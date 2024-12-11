// 1
// string
// number
// undefined
// null
// boolean
// any

// 2
const a: string = "Valter";
const b: number = 26;
const c: boolean = true;

//3
const greet = (name: string) => {
	return "ciao " + name;
};
console.log(greet(a));

//4
// const sum = (a: number, b: number) => {  return a + b }
// type number

//5
const ivaCalculator = (price: number) => {
	const iva = price * 0.22;
	return iva + price;
};
console.log(ivaCalculator(10));

//6
const concatString = (str1: string, str2: string) => {
	return (str1 + str2).length;
};
console.log(concatString("ei", "ei"));

//7
// una 'TYPE UNION' è una tipologia di tipizzazione che permette di inserire come valori più elementi all'interno della stessa variabile.

let u: string | number; //può essere sia un elemento stringa sia un elemento numero

//8
let numBoolUnd: number | null | undefined;
numBoolUnd = 30;
numBoolUnd = null;
// numBoolUnd='ciao' errore

//9
type DayofWeek =
	| "Lunedì"
	| "Martedì"
	| "Mercoledì"
	| "Giovedì"
	| "Venerdì"
	| "Sabato"
	| "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers: number[] = [1, 2, 3];
const numberss: [number, number, number] = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: [string, string, string, number, number] = [
	"ciao",
	"sono",
	"tupla",
	11,
	66,
];

// 12) Qual è la differenza tra type e interface?
// interface si usa per definire la forma di un oggetto con le sue propietà

// 13) Definisce un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface user {
	firstname: string;
	lastname: string;
	age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface user {
	email: string;
	phone?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface student {
	name: string;
	rate: number;
	class: string | number;
}
const arrOfStudent: student = {
	name: "gianni",
	rate: 10,
	class: "5a",
};

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
	route: number;
	modello: string;
	manubrio?: boolean;
	colore: string;
}

interface auto extends Veicolo {
	optional: string[];
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const car: auto = {
	route: 4,
	modello: "ferrari",
	colore: "giallo",
	optional: ["AutoDrive", "fullsensor"],
};

// 18) Cosa sono i Generics in TypeScript?
// un generic è un tipologia di dato passato come parametro di un interfaccia

// 19) È possibile avere più tipi generici in una funzione?
// si è possibile, esattamente come i parametri di una funzione si concatenano con la virgola : <T ,U, V>

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResp<T> {
	result: boolean; //ok? si no
	data: T;
	message?: string; //messaggio di errore
	errorCode?: number; //codice errore 400 502 ecc
}

interface libro {
	id: number;
	title: string;
	price: number | string;
	description: string;
}

const bookApi: ApiResp<libro> = {
	result: true,
	data: {
		id: 102,
		title: "the little tony",
		price: 10,
		description: "a very beutiful book",
	},
};
