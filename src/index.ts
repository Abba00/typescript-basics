//Basic Types

let id: number = 38
let companyName: string = "38dz9s"
let isRegistered: boolean = false
let x: any = "AWGE"

let SN: number[] = [1,2,3,4,5]
let arr: any[] = [1, "hello", false]


//Tuples
let person: [number, string, boolean] = [1, "Misan", true]

//Tuple Array
let employee: [number, string][]

employee = [
    [1, "Misan"],
    [2, "Abba"],
    [3, "Kordy"],
]

//Union
let id_2: string | number 
id_2 = "Jeans"

//enumerators

enum fitNo{
    Shirt = 2,
    Jacket = 1,
    Pants = 2,
    Shoes = 1,
}

enum fitBrand{
    Shirt = "ZARA",
    Jacket = "DICKIES",
    Pants = "H&M",
    Shoes = "DR.MARTENS",
}

console.log(fitBrand.Pants)

//objects syntax 1

const customer: {
    id: number,
    name: string,
} = {
    id: 1,
    name: "Melissa",
}

//objects syntax 2

type security = {
    id: number,
    name: string,
}

let topFloor: security = {
    id: 101,
    name: "Hewitt"
}

//Type Assertion //treat entity as different type

let cid: any = 1
//let customerId = <boolean>cid
let customerId = cid as boolean

console.log(customerId)


//Functions  syntax = {function {function name}{function parameters}:{return type}{{content}}}

function addNum(x: number, y: number): number{
    return x + y
}

// void function as it returns nothing
function log(message: string | number): void {
    console.log(message)
}

console.log(addNum(6,7))

log(34)

//interfaces // kind of like types
interface securityInterface {
    readonly id: number, //readonly makes it unchangeable
    name: string,
    age?: number, //question mark makes it optional
}

let building: securityInterface = {
    id: 101,
    name: "Hewitt"
}

building.age = 102
// building.id = 102 //won't work

interface mathFunction {
    (x: number, y:number): number
}

const add: mathFunction = (x:number, y:number): number => x + y
const sub: mathFunction = (x:number, y:number): number => x - y


//classes

interface PersonInterface {
    id:number,
    name: string,
    register(): string,
}

class Person implements PersonInterface{
    /*private*/ id:number //private can only be accessed within the class
    /*protected*/ name: string //protected can only be accessed within class and extedned classes

    constructor(id:number, name:string){ //creates objects of the class
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered` // use the ` key to format, its under the esc button
    }
}

const Misan = new Person(101,"Misan")
const Tobi = new Person(102, "Tobi")

console.log(Misan.register())

console.log(Misan, Tobi)

//inheritance example
class Employee extends Person{
    role: string

    constructor(id:number, name: string, role: string) {
        super(id, name)
        this.role = role
    }
}

const Abba = new Employee(101, "Abba", "Product Designer")

console.log(Abba,"\n",Abba.register())

//generics // used to build reusable components

function getArray<T>(items: T[]): T[] { //<T> is like a pointer that adopts the specified type when seen //better alternative to "any"
    return new Array().concat(items)
}

let seq =  getArray<number>([1,2,3,4])
let brentfordStriker = getArray<string>(["Ivan","Benjamin","Elijah","Toney"])

//seq.push("allowed") // not allowed since were using T
seq.push(5)

console.log(seq)