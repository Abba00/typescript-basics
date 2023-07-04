"use strict";
//Basic Types
let id = 38;
let companyName = "38dz9s";
let isRegistered = false;
let x = "AWGE";
let SN = [1, 2, 3, 4, 5];
let arr = [1, "hello", false];
//Tuples
let person = [1, "Misan", true];
//Tuple Array
let employee;
employee = [
    [1, "Misan"],
    [2, "Abba"],
    [3, "Kordy"],
];
//Union
let id_2;
id_2 = "Jeans";
//enumerators
var fitNo;
(function (fitNo) {
    fitNo[fitNo["Shirt"] = 2] = "Shirt";
    fitNo[fitNo["Jacket"] = 1] = "Jacket";
    fitNo[fitNo["Pants"] = 2] = "Pants";
    fitNo[fitNo["Shoes"] = 1] = "Shoes";
})(fitNo || (fitNo = {}));
var fitBrand;
(function (fitBrand) {
    fitBrand["Shirt"] = "ZARA";
    fitBrand["Jacket"] = "DICKIES";
    fitBrand["Pants"] = "H&M";
    fitBrand["Shoes"] = "DR.MARTENS";
})(fitBrand || (fitBrand = {}));
console.log(fitBrand.Pants);
//objects syntax 1
const customer = {
    id: 1,
    name: "Melissa",
};
let topFloor = {
    id: 101,
    name: "Hewitt"
};
//Type Assertion //treat entity as different type
let cid = 1;
//let customerId = <boolean>cid
let customerId = cid;
console.log(customerId);
//Functions  syntax = {function {function name}{function parameters}:{return type}{{content}}}
function addNum(x, y) {
    return x + y;
}
// void function as it returns nothing
function log(message) {
    console.log(message);
}
console.log(addNum(6, 7));
log(34);
let building = {
    id: 101,
    name: "Hewitt"
};
building.age = 102;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`; // use the ` key to format, its under the esc button
    }
}
const Misan = new Person(101, "Misan");
const Tobi = new Person(102, "Tobi");
console.log(Misan.register());
console.log(Misan, Tobi);
//inheritance example
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
}
const Abba = new Employee(101, "Abba", "Product Designer");
console.log(Abba, "\n", Abba.register());
//generics // used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let seq = getArray([1, 2, 3, 4]);
let brentfordStriker = getArray(["Ivan", "Benjamin", "Elijah", "Toney"]);
//seq.push("allowed") // not allowed since were using T
seq.push(5);
console.log(seq);
