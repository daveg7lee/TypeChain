class Human {
    public name: String;
    public age : Number;
    public gender:String;
    constructor(name: String, age: Number, gender: String){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const person = new Human(
    "Dave",
    20,
    "male"
)

const sayHi = (person:Human):String => {
    return `You are ${person.name}, age: ${person.age}, gender: ${person.gender}`
}

console.log(sayHi(person))

export {};