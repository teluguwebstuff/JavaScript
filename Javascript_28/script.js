// function addition(a, b = 0) {
//   // default parameter
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

// const res = addition(10);
// console.log(res);

// function sayHi(sayHello) {
//   console.log('Hi');

//   return sayHello;
// }

// function sayHello() {
//   console.log('Hello');
// }

// const res = sayHi(sayHello);
// console.log(typeof res);
// res();

function sayHi(sayHello) {
  console.log('Hi');
  sayHello();
}

sayHi(function () {
  console.log('This is a callback function');
});
