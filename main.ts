// * BASIC TYPE

//string
let username: string;

username = "Hung";

console.log(username);

//number

let count: number;

count = 5;

//boolean

let isLogin: boolean;

isLogin = true;
isLogin = false;

//null , undefined

let nullVariable: null;
let undefinedVariable: undefined;

nullVariable = undefined;
nullVariable = null;

undefinedVariable = null;
undefinedVariable = undefined;

// * ANY TYPE

let something: any;

something = "Cybersoft";
something = 5;
something = true;

//Object type

let personObject: { name: string; age?: number } = {
  name: "Cybersoft",
};

// * ARRAY TYPE

//string

let stringArray: string[] = ["Man", 5];

//number
let numberArray: number[] = [1, 2, "hello"];

//boolean
let booleanArray: boolean[] = [false, true, false, 5];

//object

let objectArray: { name: string; description?: string }[] = [
  { name: "Hung", description: "Pro", number: 5 },
];

//any

let anyArray: any[] = [123, "string", { name: "" }];

// * FUNCTION TYPE
//Function return value
let sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(99, 5));

// Function non return value
let onReset = (): void => {};

// * UNION TYPE - ENUM TYPE
// UNION TYPE
let result: string | number | boolean;

//ENUM (kiểu danh sách liệt kê)

enum Status {
  Active = "Active",
  Inactive = "Inactive",
}

let userStatus: Status = Status.Active;

userStatus = Status.Inactive;

console.log(Status);
console.log(userStatus);

// * INTERFACE TYPE
interface Person {
  name: string;
  age: number;
  description: string;
}

interface Singer extends Person {
  title: string;
}

let singer: Singer;
let actor: Person;

// singer.title;

// * GENERIC TYPE

const callApi = <D>(dto: D) => {
  return dto;
};

interface ISignUpDto {
  firstName: string;
  lastName: string;
}

interface ISignInDto {
  username: string;
  password: string;
}

const signUpDto: ISignUpDto = {
  firstName: "Hung",
  lastName: "Duong",
};

const signInDto: ISignInDto = {
  username: "hung@gmail.com",
  password: "123456",
};

callApi<ISignInDto>(signInDto);
callApi<ISignUpDto>(signUpDto);

callApi<ISignInDto>(signUpDto); // phải truyền vào ISignUpDto thì mới match (body với kiểu dữ liệu phải giống nhau)

// * CLASS

class Book {
  //mặc đỊnh sẽ là public
  public name: string;
  private description: string; //không thể lấy ra từ bên ngoài
  readonly title: string; //từ bên ngoài chỉ có thể đọc được

  constructor(name: string, description: string, title: string) {
    this.name = name;
    this.description = description;
  }
}

const book = new Book("Book A", "Description A", "Title A");

book.name = "Book B";

book.description; //không thể lấy ra từ bên ngoài

book.title = "Title B"; //chỉ có thể đọc đc chứ ko gán đc (readonly)
console.log(book.title);

//IMPLEMENTS

interface IAnimal {
  eat: () => void;
}

class Animal implements IAnimal {
  eat() {}

  protected drink() {} //protected: chỉ những class extends từ class Animal mới có thể sử dụng đc
}

class Cat extends Animal {
  work() {
    this.drink();
  }
}

const cat = new Cat();

cat.eat();
cat.drink();
