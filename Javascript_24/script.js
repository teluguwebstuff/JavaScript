debugger;
const a = 10;
const b = 40;
function addition(a, b) {
  let c = a;
  let d = b;
  let sum = c + d;
  console.log(sum);
  function sub(a, b) {
    console.log(a, b);
  }
  sub();
}

addition(10, 20);
