debugger;
function parent() {
  let firstName = 'abc';
  let lastName = 'de';
  function child() {
    const fullname = firstName + lastName;
    console.log(fullname);
  }
  child();
}

parent();
