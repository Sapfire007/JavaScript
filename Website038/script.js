// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Saptarshi",
    lastName: "Bose",
    age: 18,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Saptarshi!")},
    sayBye: function(){console.log("Goodbye!")}
};

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 70,
    isEmployed: false,
    sayHello: () => console.log("Hey I'm John..."),
    sayBye: function(){console.log("Bye...")}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();