// string methods = allow you to manipulate and work with text (strings)

let username = "Sapfire007";
console.log(username.charAt(0));
console.log(username.charAt(7));
console.log(username.indexOf("f"));
console.log(username.indexOf(0));
console.log(username.indexOf("0"));
console.log(username.lastIndexOf(0));
console.log(username.lastIndexOf("0"));
console.log(username.length);

let dummyUserName1 = "HelloWorld          ";
console.log(dummyUserName1);
console.log(dummyUserName1.trim());
let dummyUserName2 = "          WorldHello";
console.log(dummyUserName2);
console.log(dummyUserName2.trim());

let username2 = "sapfire075"
console.log(username2.toUpperCase());
console.log(username2.toLowerCase());
console.log(username2.repeat(2));
console.log(username2.startsWith("sap"));
console.log(username2.startsWith("ron"));
console.log(username2.endsWith("5"));
console.log(username2.endsWith("75"));
console.log(username2.endsWith(75));
console.log(username2.endsWith("d"));
console.log(username2.endsWith(54));

let phNo = "123-456-7890";

phNo1 = phNo.replaceAll("-", "");
console.log(phNo1);
phNo2 = phNo.replaceAll("-", "/");
console.log(phNo2);

phNo3 = phNo.padStart(15, "0");
console.log(phNo3);
phNo4 = phNo.padEnd(15, "0");
console.log(phNo4);