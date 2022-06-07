// * BASIC TYPE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//string
var username;
username = "Hung";
console.log(username);
//number
var count;
count = 5;
//boolean
var isLogin;
isLogin = true;
isLogin = false;
//null , undefined
var nullVariable;
var undefinedVariable;
nullVariable = undefined;
nullVariable = null;
undefinedVariable = null;
undefinedVariable = undefined;
// * ANY TYPE
var something;
something = "Cybersoft";
something = 5;
something = true;
//Object type
var personObject = {
    name: "Cybersoft",
};
// * ARRAY TYPE
//string
var stringArray = ["Man", 5];
//number
var numberArray = [1, 2, "hello"];
//boolean
var booleanArray = [false, true, false, 5];
//object
var objectArray = [
    { name: "Hung", description: "Pro", number: 5 },
];
//any
var anyArray = [123, "string", { name: "" }];
// * FUNCTION TYPE
//Function return value
var sum = function (a, b) {
    return a + b;
};
console.log(sum(99, 5));
// Function non return value
var onReset = function () { };
// * UNION TYPE - ENUM TYPE
// UNION TYPE
var result;
//ENUM (kiểu danh sách liệt kê)
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
})(Status || (Status = {}));
var userStatus = Status.Active;
userStatus = Status.Inactive;
console.log(Status);
console.log(userStatus);
var singer;
var actor;
// singer.title;
// * GENERIC TYPE
var callApi = function (dto) {
    return dto;
};
var signUpDto = {
    firstName: "Hung",
    lastName: "Duong",
};
var signInDto = {
    username: "hung@gmail.com",
    password: "123456",
};
callApi(signInDto);
callApi(signUpDto);
callApi(signUpDto); // phải truyền vào ISignUpDto thì mới match (body với kiểu dữ liệu phải giống nhau)
// * CLASS
var Book = /** @class */ (function () {
    function Book(name, description, title) {
        this.name = name;
        this.description = description;
    }
    return Book;
}());
var book = new Book("Book A", "Description A", "Title A");
book.name = "Book B";
book.description; //không thể lấy ra từ bên ngoài
book.title = "Title B"; //chỉ có thể đọc đc chứ ko gán đc (readonly)
console.log(book.title);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () { };
    Animal.prototype.drink = function () { }; //protected: chỉ những class extends từ class Animal mới có thể sử dụng đc
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.work = function () {
        this.drink();
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.eat();
cat.drink();
