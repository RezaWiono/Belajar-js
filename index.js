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

const square = function(number){
    return number * number;
};

const square = number => number * number;
console.log(square(5));