const user = {
  name: 'xyz',
  age: 22,
  marks: {
    maths: 33,
    science: 44,
  },
};
// Object.freeze(user);
// user.marks.maths = 44;
// console.log(user);
Object.seal(user);
user.branch = 'cse';
console.log(user);
