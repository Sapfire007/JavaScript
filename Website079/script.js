// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3] OR [{}, {}, {}]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object. 


const names = ["Saptarshi", "Ajay", "Rohan", "Bob"];
const person = {
    "name": "Saptarshi",
    "age": 18,
    "isStudent": true,
    "hobbies": ["sketching", "coding", "binge-watching"]
};
const people = [
    {
        "name": "Saptarshi",
        "age": 18,
        "isStudent": true
    },
    {
        "name": "Ajay",
        "age": 39,
        "isStudent": false
    },
    {
        "name": "Rohan",
        "age": 20,
        "isStudent": true
    },
    {
        "name": "Bob",
        "age": 50,
        "isStudent": false
    }
];

const jsonString = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);

console.log(names);
console.log(jsonString);

console.log(person);
console.log(jsonString2);

console.log(people);
console.log(jsonString3);


const jsonNames = `["Saptarshi", "Ajay", "Rohan", "Bob"]`;
const jsonPerson = `{
    "name": "Saptarshi",
    "age": 18,
    "isStudent": true,
    "hobbies": ["sketching", "coding", "binge-watching"]
}`;
const jsonPeople = `[
    {
        "name": "Saptarshi",
        "age": 18,
        "isStudent": true
    },
    {
        "name": "Ajay",
        "age": 39,
        "isStudent": false
    },
    {
        "name": "Rohan",
        "age": 20,
        "isStudent": true
    },
    {
        "name": "Bob",
        "age": 50,
        "isStudent": false
    }
]`;

const parsedData1 = JSON.parse(jsonNames);
const parsedData2 = JSON.parse(jsonPerson);
const parsedData3 = JSON.parse(jsonPeople);

console.log(parsedData1);
console.log(parsedData2);
console.log(parsedData3);


fetch("person.json").then(response => response.json()).then(value => console.log(value)).catch(error => console.error(error));
fetch("names.json").then(response => response.json()).then(value => console.log(value)).catch(error => console.error(error));
fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value))).catch(error => console.error(error));
fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value.name))).catch(error => console.error(error));