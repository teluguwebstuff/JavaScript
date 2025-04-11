debugger;
function parent() {
  // lexical scope
  let firstName = 'avinash';
  let lastName = 'abhi';
  function child() {
    const fullName = firstName;
  }
  return child;
}

const res = parent();
res();
