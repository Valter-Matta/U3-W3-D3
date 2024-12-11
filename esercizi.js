// 1
// string
// number
// undefined
// null
// boolean
// any
// 2
var a = "Valter";
var b = 26;
var c = true;
//3
var greet = function (name) {
    return "ciao " + name;
};
console.log(greet(a));
//4
// const sum = (a: number, b: number) => {  return a + b }
// type number
//5
var ivaCalculator = function (price) {
    var iva = price * 0.22;
    return iva + price;
};
console.log(ivaCalculator(10));
//6
var concatString = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(concatString("ei", "ei"));
//7
// una 'TYPE UNION' è una tipologia di tipizzazione che permette di inserire come valori più elementi all'interno della stessa variabile.
var u; //può essere sia un elemento stringa sia un elemento numero
//8
var numBoolUnd;
numBoolUnd = 30;
numBoolUnd = null;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
var numberss = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = [
    "ciao",
    "sono",
    "tupla",
    11,
    66,
];
var arrOfStudent = {
    name: "gianni",
    rate: 10,
    class: "5a",
};
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var car = {
    route: 4,
    modello: "ferrari",
    colore: "giallo",
    optional: ["AutoDrive", "fullsensor"],
};
var bookApi = {
    result: true,
    data: {
        id: 102,
        title: "the little tony",
        price: 10,
        description: "a very beutiful book",
    },
};
