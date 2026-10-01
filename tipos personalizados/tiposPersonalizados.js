"use strict";
/*
    Criando interface
    com letra maiuscula
*/
function newProduct(product) {
    return product;
}
const product = newProduct({
    id: 1,
    nam: "Produto x",
});
let id = product.id;
// console.log(id);
let interfaces = function () {
    let student = {
        id: 1,
        name: "Anne",
        age: 360,
        city: "Tobias Barreto",
        street: "Valdivino Malaquias",
        zipCode: 495000,
    };
    let teacher = {
        id: 1,
        name: "Israel",
        subjects: ["JavaScritp", "Typescript", "Html"],
        city: "Tobias Barreto",
        street: "Valdivino Malaquias",
        zipCode: 3500,
        price: 23,
    };
    console.log(teacher.id, teacher.name, teacher.subjects, teacher.city, teacher.id, teacher.zipCode);
    console.log(student.id, student.name, student.age, student.city, student.street, student.zipCode);
};
interfaces();
function newProductt(prod) {
    console.log(prod);
}
newProductt({ id: 1, name: "Produto x", code: 12 });
console.log(newProductt);
let teacher;
let student;
let userResponse = {
    id: 1,
    name: "Avatar",
    avatar: "null",
};
console.log(userResponse.avatar);
console.log(userResponse.id);
console.log(userResponse.name);
const products = {
    category: "eletronica",
    name: "Vendido",
};
// Enums
var Perfile;
(function (Perfile) {
    Perfile[Perfile["Admin"] = 1] = "Admin";
    Perfile[Perfile["Client"] = 2] = "Client";
    Perfile[Perfile["Seller"] = 3] = "Seller";
})(Perfile || (Perfile = {}));
let Selected = Perfile.Admin;
console.log("Retornando o admin", Selected);
// Generic
function useState() {
    let state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get, set };
}
let newState = useState();
newState.get();
newState.set(123);
newState.set("Nome");
/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */
// union
function start() {
    let num;
    function i() {
        return num;
    }
    function sett(newW) {
        num = newW;
    }
    return { i, sett };
}
let retur = start();
retur.i();
retur.sett("Aceita tambe ,");
retur.sett(123);
