// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

students = students + 1;
console.log(students);

students = students - 1;
console.log(students);

students = students * 2;
console.log(students);

students = students / 2;
console.log(students);

students = students ** 2;
console.log(students);

let extraStudents = (students+1) % 2;
console.log(extraStudents);

console.log(students);
students += 7;
console.log(students);
students **= 7;
console.log(students);
students /= 70000;
console.log(students);
students %= 7;
console.log(students);
students++;
console.log(students);
students--;
console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

result = 12 % 5 + 8 / 2;
console.log(result);

result = 6 / 2 ** (2 + 5);
console.log(result);