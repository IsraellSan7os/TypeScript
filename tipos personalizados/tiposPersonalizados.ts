/*
    Criando interface
    com letra maiuscula
*/

interface Product {
  id: number;
  nam: string;
}

function newProduct(product: Product) {
  return product;
}

const product = newProduct({
  id: 1,
  nam: "Produto x",
});

let id = product.id;
// console.log(id);

let interfaces = function () {
  interface Utils {
    city: string;
    street: string;
    zipCode: number;
  }

  interface Teacher extends Utils {
    id: number;
    name: string;
    subjects: string[];
  }

  interface Student extends Utils {
    id: number;
    name: string;
    age: number;
  }

  let teacher: Teacher = {
    id: 1,
    name: "Israel",
    subjects: ["JavaScritp", "Typescript", "Html"],
    city: "Tobias Barreto",
    street: "Valdivino Malaquias",
    zipCode: 3500,
  };
  console.log(
    teacher.id,
    teacher.name,
    teacher.subjects,
    teacher.city,
    teacher.id,
    teacher.zipCode,
  );
};

interfaces();
