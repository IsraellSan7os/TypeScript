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
    let teacher = {
        id: 1,
        name: "Israel",
        subjects: ["JavaScritp", "Typescript", "Html"],
        city: "Tobias Barreto",
        street: "Valdivino Malaquias",
        zipCode: 3500,
    };
    console.log(teacher.id, teacher.name, teacher.subjects, teacher.city, teacher.id, teacher.zipCode);
};
interfaces();
