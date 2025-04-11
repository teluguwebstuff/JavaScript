//Syntax - >
// setTimeout(callback,time)

// setTimeout(
//   function (a, b) {
//     console.log('Hi');
//     console.log(a);
//     console.log(b);
//     const sum = a + b;
//     console.log(sum);
//   },
//   2000,
//   10,
//   20
// );

// setTimeout(() => {
//   console.log('Hi-1');
// }, 1000);

// setTimeout(() => {
//   console.log('Hi-2');
// }, 2000);

// setTimeout(() => {
//   console.log('Hi-3');
// }, 3000);
// 7

// const s1 = setTimeout(() => {
//   console.log('Hi-1');
// }, 2000);
// const s2 = setTimeout(() => {
//   console.log('Hi-2');
// }, 4000);
// const s3 = setTimeout(() => {
//   console.log('Hi-3');
// }, 6000);
// clearTimeout(s3);

let count = 0;
const id = setInterval(function () {
  console.log('Hi', ++count);
  if (count === 5) {
    clearInterval(id);
    console.log('Stopping clearInterval');
  }
}, 1000);

console.log(id);
