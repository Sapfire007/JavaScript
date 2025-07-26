// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Sap",
    favfood: "Biryani",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: () => console.log(`${person1.name} is eating ${person1.favfood}`) // this keyword does not work with arrow function
}
person1.sayHello();
person1.eat();

console.log(this);