/*
    Criando interface
    com letra maiuscula
*/

interface Product {
  id: number | string;
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
    city: string | number;
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

  interface Teacher {
    price: number;
  }

  let student: Student = {
    id: 1,
    name: "Anne",
    age: 360,
    city: "Tobias Barreto",
    street: "Valdivino Malaquias",
    zipCode: 495000,
  };

  let teacher: Teacher = {
    id: 1,
    name: "Israel",
    subjects: ["JavaScritp", "Typescript", "Html"],
    city: "Tobias Barreto",
    street: "Valdivino Malaquias",
    zipCode: 3500,
    price: 23,
  };
  console.log(
    teacher.id,
    teacher.name,
    teacher.subjects,
    teacher.city,
    teacher.id,
    teacher.zipCode,
  );

  console.log(
    student.id,
    student.name,
    student.age,
    student.city,
    student.street,
    student.zipCode,
  );
};

interfaces();

// Type
// União de type

type Productor = {
  id: number;
  name: string;
  code: number;
};

function newProductt(prod: Productor) {
  console.log(prod);
}

newProductt({ id: 1, name: "Produto x", code: 12 });
console.log(newProductt);

// Intersecção de tipos

type Person = {
  id: number | string;
  name: string | number;
};

type Teacher = Person & {
  subjects: string;
};

type Student = Person & {
  age: Number;
};

let teacher: Teacher;
let student: Student;

type TypeString = string;

// Asserção de tipos
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};

let userResponse = {
  id: 1,
  name: "Avatar",
  avatar: "null",
} as UserResponse;

console.log(userResponse.avatar);
console.log(userResponse.id);
console.log(userResponse.name);

// Restringindo valores
interface Producutos {
  name: string;
  category: "eletronica" | "roupa" | "alimento";
}

const products: Producutos = {
  category: "roupa",
  name: "Lojão",
};

// Enums
enum Perfile {
  Admin = 1,
  Client = 2,
  Seller = 3,
}

let admin: number = Perfile.Admin;
let client: number = Perfile.Client;
let seller: number = Perfile.Seller;

console.log(`Administrador ${admin}`);
console.log(`Cliente ${client}`);
console.log(`Vendedor ${seller}`);

// Generic
function useState() {
  let state: number | string;

  function get() {
    return state;
  }

  function set(newValue: number | string) {
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
function start<T extends number | string>() {
  let num: T;

  function i() {
    return num;
  }

  function sett(newW: T) {
    num = newW;
  }

  return { i, sett };
}

let retur = start();
retur.i();
retur.sett("Aceita tambe ,");
retur.sett(123);
