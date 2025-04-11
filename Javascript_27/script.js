debugger;
function parent() {
  // Lexical scope
  let firstName = 'Abc';
  let lastName = 'def';
  {
    const a = 10;
    const b = 30;
    const sum = a + b;
    console.log(firstName);
    {
      console.log(sum);
    }
  }
  function child() {
    let fullName = firstName + lastName;
    console.log(fullName);
  }
  child();
}

parent();
