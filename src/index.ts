import { prependListener } from "process";

interface Human {
    name: String,
    gender: String,
    age: Number
}

const person = {
    name:"Dave",
    gender: "male",
    age:20
}

const sayHi = (person:Human):String => {
    return `You are ${person.name}, age: ${person.age}, gender: ${person.gender}`
}

console.log(sayHi(person))

export {};