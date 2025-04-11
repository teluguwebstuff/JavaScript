// let obj1 = { name: 'abc', age: 24 };
// let obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.age = 30;
// console.log(obj2);
// console.log(obj1);

// Shallow copying

// let obj1 = { name: 'rahul', detail: { age: 25, city: 'Vijayawada' } };
// let obj2 = Object.assign({}, obj1);
// obj2.detail.age = 34;
// console.log(obj2);
// console.log(obj1);

// Deep copying

// let obj1 = { name: 'rahul', detail: { age: 25, city: 'Vijayawada' } };
// console.log(obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.detail.age = 90;
// console.log(obj2);
// console.log(obj1);

// Primitive
// let a = 5;
// let b = a;
// b = 10;
// console.log(a, b);
