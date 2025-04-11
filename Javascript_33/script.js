// const fruits = ['apple', 'banana', 'orange'];
// //              0         1        2
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);

// // console.log(fruits.length); // 3 - 1 -> 2

// // for (let i = 0; i <= fruits.length - 1; i++) {
// //   console.log(fruits[i]);
// // }

// // for of
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for in

// key - value pair
const cities = {
  city1: 'Vijayawada',
  city2: 'Hyderabad',
  city3: 'Vizag',
  city4: 'Guntur',
};

// console.log(cities.city1);

// console.log(cities['city2']);

for (const city in cities) {
  console.log(cities[city]);
}
