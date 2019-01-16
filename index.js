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

// #Array
// let selectionColor = ['red', 'blue'];
// selectionColor[2] = 1;
// console.log(selectionColor.length)

//#function & types of function
function greet(Name , lastName) {
    console.log('hello '+ Name + ' ' + lastName);
}
//calculating a value
function square(number) {
    return number * number;
}
// greet('reza', 'wiono');

console.log(square(2))