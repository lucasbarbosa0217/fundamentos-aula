console.log("Hello World");

// Função deve ser chamada após a declaração ou como expressão de função
function teste(variavel: string): string {
    let mensagem = `Esta é sua variável ${variavel}`;
    return mensagem;
}

let variavel = "teste";
let mensagem: string = teste(variavel);
console.log(mensagem);

interface IPessoa {
    nome: string;
    idade: number;
}

let p1: IPessoa = { nome: "Lucas", idade: 15 };
let p2: IPessoa = { nome: "teste", idade: 17 };

// Usando o operador spread para desestruturar e imprimir um tuple
const usuario: [string, number] = ['Márcia da Silva', 30];
console.log(...usuario); // Expande o tuple em seus elementos
console.log(usuario);   // Imprime o tuple como está

// Usando o operador spread para copiar um array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(moreNumbers);

// Usando o operador spread para combinar arrays
const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'kiwi'];
const allFruits = [...fruits1, ...fruits2]; // ['apple', 'banana', 'orange', 'kiwi']
console.log(allFruits);

// Usando o operador spread para copiar um objeto
const person1 = { name: 'John', age: 30 };
const updatedPerson = { ...person1, age: 31 }; // { name: 'John', age: 31 }
console.log(updatedPerson);

// Usando o operador spread para combinar objetos
const address = { city: 'New York', zip: '10001' };
const contact = { phone: '123-456-7890', ...address }; // { phone: '123-456-7890', city: 'New York', zip: '10001' }
console.log(contact);

// Usando o operador rest para capturar parâmetros em uma função
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10));     // 15

// Usando rest para desestruturar arrays
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// Usando rest para desestruturar objetos
const person2 = { namer: 'John', age: 30, city: 'New York' };
const { namer, ...otherDetails } = person2;
console.log(name);         // 'John'
console.log(otherDetails); // { age: 30, city: 'New York' }
