// function sayHello(){
//  for (var i=0;i<5;i++){
//  console.log(i);
// }
//  console.log(i);
// }

// sayHello();

// const person = {
//     Name : "reza",
//     Height : 178,
//     Age : 18,
//     walk(){
//         console.log(this)
//     }
// }

// person.Name='reza wiono'
// console.log(person.walk())

// gagal
// const walk=per.walk
// console.log(walk())

// pake this
// const walk = person.walk.bind(person)
// console.log(walk())

// #objects
// let person= {
//     Name: 'reza',
//     age: 18
// };
// person.Name = 'wiono',


// let selection = 'nsme'
// person[selection] = 'toyib';

// console.log(person);

// #6. Array
// let selectionColor = ['red', 'blue'];
// selectionColor[2] = 1;
// console.log(selectionColor.length)

//#7&8. function & types of function
// function greet(Name , lastName) {
//     console.log('hello '+ Name + ' ' + lastName);
// }
// //calculating a value
// function square(number) {
//     return number * number;
// }
// // greet('reza', 'wiono');

// console.log(square(2))

//#2. Arithmatic Oprators
// let x = 10;
// let y =3;
// // console.log(x+y);
// // console.log(x-y);
// // console.log(x*y);
// // console.log(x/y);
// // console.log(x%y);
// // console.log(x**y);

// //increment(++)
// // console.log(x++);
// // console.log(x);

// //decrement(--)
// console.log(--x);

//#3. Assignment oprators
// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// //#4. Comparison oprators
// let x = 1;
// //relationnal
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);
// //equality
// console.log(x === 1);
// console.log(x !== 1);


// //#5. Equality oprators
// console.log(1 === 1);
// console.log('1' === 1);

// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);


// //#6. Ternary operator
// let point = 80;
// let type = point > 100 ? 'gold': 'silver';

// console.log(type);


// //#7. logical operatoers
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome  goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// Console.log('Application Refused' applicationRefused);


// //#8. logical operation with npn-booleans
// let userColor = undefined;
// let defaulyColor = 'blue';
// let currentColor = userColor && defaulyColor;

// console.log(currentColor);


// //#9. Bitwise operators
// const readPermission = 4;
// const writePermission = 2;
// const  executePermission =1;

// let myPermission = 0;
// myPermission = myPermission / readPermission / writePermission;

// let message =
//     (myPermission & ReadableStream) ? 'yes': 'no';

// console.log(messege);


// //#10. operators precedence
let x = (2 + 3) * 4;
console.log(x);