// Patial ?
// Usado pra trabalhar com apenas algumas propriedades

interface User {
  id: number;
  name: String;
  email: String;
  avatar: string;
}

const newUser: User = {
  id: 1,
  name: "Israel",
  email: "ysrael@gmail.com",
  avatar: "true",
};

/*  No exemplo abaixo vemos que, quando usamos o Partial
 */
const updatedUser: Partial<User> = {
  id: 1,
  name: "",
  avatar: "",
  email: "",
};

// O Pick serve para escolher apenas algumas propriedades de uma interface ou type
type location = {
  county: string;
  city: string;
  road: string;
  zipeCode: number;
};

const details: Pick<location, "zipeCode" | "county"> = {
  zipeCode: 123456789,
  county: "Brasil",
};

interface Book {
  title: string;
  page: number;
  outhor: string;
  description: string;
  avatar: string;
}

const book1: Pick<Book, "title" | "page" | "outhor"> = {
  title: "Type-scrrpt",
  outhor: "israel",
  page: 10,
};

// Omit
// O TypeScript pega book5 e remove (omit) as propriedades que você indicar.
interface book5 {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const bookOmint: Omit<book5, "description" | "author"> = {
  title: "Type-scritp",
  pages: 90
  
};
