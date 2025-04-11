// While loop
// while(condition){...}

// 30
let arr = ['apple', 'banana', 'orange', 'cherry'];
console.log(arr.length);
let len = arr.length; // 4 => 4 - 1
let i = 0;

// let i = 1; // 0 - 29 = 30 , 1 - 29 = 29
// while (i <= 100) {
//   console.log(i);
//   i = i + 1;
// }

while (i < len) {
  console.log(arr[i]);
  i++; // i = i + 1
}

// 0 -> 0 < 4true -> arr[0]
// 1 -> 1 < 4true -> arr[1]
// 2 -> 2 < 4true -> arr[2]
// 3 -> 3 < 4true -> arr[3]
// 4 -> 4 < 4 false
