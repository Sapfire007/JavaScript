// nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  Shopping{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Saptarshi Bose",
    age: 18,
    isStudent: "True",
    hobbies: ["Programming", "Sketching", "Gaming"],
    address: {
        street: "21A Park Street",
        city: "Kolkata",
        country: "India"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Saptarshi", 18, "21A Park Street", "Kolkata", "India");
const person2 = new Person("Ankit", 30, "126, Ram Bagan", "Kolkata", "India");

console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);