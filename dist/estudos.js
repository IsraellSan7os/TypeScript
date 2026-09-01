"use strict";
// Tipos primitivos
/*
string
number
boolean
any => aceita qualquer coisa

// Tipagem em arrys
// Tipagem de funções
// Tipagem de Objeto
*/
// String pra texto.
let username;
username = "Israel";
// Number para números
let total;
total = 4;
// Recebe numeros quebrados, no brasil usamos a virgula, mais na programação usamos o ponto
total = 4.1;
// Boolean para verdadeiro ou falso
// Tipagem explicita
let isLoading;
isLoading = true;
isLoading = false;
// Tipagem explicita define claramente o tipo da variavel
// enquanto a inferência de tipos, TypeScript deduza o tipo com base no valor atribuído.
// inferencia de tipos
// tipagem implicita
let showMessage = "Ola tudo bem??";
let num = 12;
console.log(showMessage);
const message = document.querySelector("#message");
if (message) {
    message.textContent = showMessage;
}
// Quando nao definimos o type ele define altomaticamente
let n;
n = "Israel";
n = 12;
//Tipagem de array, Tipagem explicita. "Comum Anotação de tipos(type Annotation"
let names = ["Israel", "Mayk", "Anne"];
let numbers = [1, 2, 3, 4, 5];
if (numbers.length > 4) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
else {
    console.log("Falso");
}
let res = names.includes("Mayk");
let position = names.indexOf("Mayk");
let i = names.indexOf("Anne");
for (let p = 0; p < names.length; p++) {
    console.log(names[p]);
}
if (res) {
    console.log("sim");
}
console.log("Posição do Mayk:", position);
// Tipagem de funções
function sun(x, y) {
    const result = x + y;
    console.log("Resultado", result);
    return result;
}
const result = sun(7, 9);
const showMessagee = (name, sobrenome) => {
    const messagee = "Ola " + name + sobrenome;
    return messagee;
};
showMessagee("Israel", "Santos");
const r = showMessagee("israel ", "santos");
console.log(r);
// Tipagem de Objeto
let user = {
    name: "Israel",
    age: 12,
    rua: false,
};
console.log(user.name, user.age, user.rua);
function signIn({ email, password, avatar, }) {
    const res = console.log(email, password, avatar);
    return res;
}
signIn({ email: "Israel@gmaial.com", password: 123, avatar: true });
