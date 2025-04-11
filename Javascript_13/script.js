// user - number 1-7 1- monday 2 - TUESADY
// const num = prompt('enter number'); // 2
// if (num == 1) {
//   console.log('MONDAY');
// } else if (num == 2) {
//   console.log('TUESDAY');
// } else if (num == 3) {
//   console.log('WEDNESDAY');
// } else if (num == 4) {
//   console.log('THURSDAY');
// } else if (num == 5) {
//   console.log('FRIDAY');
// } else if (num == 6) {
//   console.log('SATURDAY');
// } else {
//   console.log('SUNDAY');
// }

// For a single if u want to write condition then will go for switch

// syntax
// switch(num){
//   case
// }

// switch (num) {
//   case '1':
//     console.log('MONDAY');
//     break;
//   case '2':
//     console.log('TUESDAY');
//     break;
//   case '3':
//     console.log('WEDNESDAY');
//     break;
//   case '4':
//     console.log('THURSDAY');
//     break;
//   case '5':
//     console.log('FIRDAY');
//     break;
//   case '6':
//     console.log('SATURDAY');
//     break;
//   case '7':
//     console.log('SUNDAY');
//     break;
// }

// grade = a,b,c -> you passed df -> you failed

// const grade = 'A';

// switch (grade) {
//   case 'A':
//   case 'B':
//   case 'C':
//     console.log('You passed');
//     break;
//   case 'D':
//   case 'E':
//     console.log('You Failed');
// }

// let num = 10;
// switch (true) {
//   case num > 5 && num < 20:
//     console.log('Number is greater');
//     break;
//   case num > 1 && num < 5:
//     console.log('Number is lesser');
// }

// let value = '2';
// switch (value) {
//   case 2:
//     console.log('Number 2');
//   case '2':
//     console.log('String 2');
// }

// let num = 1;
// switch (num) {
//   case 10:
//     console.log('10');
//   default:
//     console.log('default case -1');
//     break;
// }

let num = undefined;
switch (num) {
  case null:
    console.log('MONDAY');
    break;
  case undefined:
    console.log('TUESADY');
    break;
  default:
    console.log('Sorry');
}
