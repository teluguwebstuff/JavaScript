//let
// let age = 22;
// console.log(age);
// let name = 'xyz';
// console.log(name);
// let intro = 'My name is ' + name + ' and my age is ' + age;
// console.log(intro);
// age = 30;
// console.log(age);
// let myAge = 30; // camel case
// let my_age = 30;
// //Declaration
// let name;
// //Initilazation
// let name="avx"
// const name = 'xyz';
// console.log(name);
// const age = 30;
// console.log(age);
// age = 22;
// console.log(age);
//Uncaught TypeError: Assignment to constant variable.
// var name = 'abc';
// console.log(name);

//block1
{
  let name1 = 'abc';
  // console.log(name1); //Uncaught ReferenceError: name1 is not defined
}
//block2
{
  const name2 = 'xyz';
  // console.log(name2); //Uncaught ReferenceError: name2 is not defined
}

//block3
//Global or functionall level scope
{
  var name3 = 'mno';
}

let name = 'avinash';
let name2 = name;
