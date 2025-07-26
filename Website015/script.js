// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const fullName = "Saptarshi Bose";

let firstName = fullName.slice(0, 9);
console.log(firstName);
let lastName = fullName.slice(10, 14)
console.log(lastName);

let lastName1 = fullName.slice(10, )
console.log(lastName1);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);
let lastChar = fullName.slice(-1);
console.log(lastChar);


let firstName1 = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName1);
let lastName2 = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastName2);

const email = "sapx475@yahoo.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);