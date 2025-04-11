// //1. Object literal
// const car = {
//   brand: 'Tesla',
//   model: 'Model s',
//   year: 2024,
// };
// console.log(car.brand);

//2. Object const -> Object(class) -> logical -> Physical -> create an object -> new
// const car = new Object();
// car.brand = 'Tesla';
// car.model = 'Model s';
// console.log(car.brand);

// 3. Object.create()

// Reference
// const obj1 = { val: 1 };
// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj1.val = 10;
// console.log(obj1);
// console.log(obj2);
// obj2.val = 40;
// console.log(obj1);
// console.log(obj2);
// const car = {
//   brand: 'Tesla',
//   model: 'Model s',
// };

// console.log(car['model']);
// const car = {
//   brand: 'Tesla',
//   model: 'Model s',
//   year: 2024,
// };
// // console.log('year' in car);
// const car = {
//   brand: 'tesla',
// };
// Object.freeze(car);
// car.brand = 'BMW';
// console.log(car);

// Object inside object

const student = {
  name: 'xyz',
  age: 22,
  subject: {
    maths: 44,
    science: 33,
  },
};
delete student.name;
console.log(student);
