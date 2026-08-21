// Tipos primitivos
/*
string
number
boolean
any => aceita qualquer coisa
*/

// String pra texto.
let username: string;
username = "Israel";

// Number para números
let total: number;
total = 4;
// Recebe numeros quebrados, no brasil usamos a virgula, mais na programação usamos o ponto
total = 4.1;

// Boolean para verdadeiro ou falso
// Tipagem explicita
let isLoading: boolean;
isLoading = true;
isLoading = false;

// Tipagem explicita define claramente o tipo da variavel
// enquanto a inferência de tipos, TypeScript deduza o tipo com base no valor atribuído.

// inferencia de tipos
// tipagem implicita
let showMessage = "Ola tudo bem??";
let num = 12;

console.log(showMessage);

const message = document.querySelector<HTMLParagraphElement>("#message");

if (message) {
  message.textContent = showMessage;
}

// Quando nao definimos o type ele define altomaticamente
let n: any;
n = "Israel";
n = 12;

