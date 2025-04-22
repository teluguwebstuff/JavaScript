/////////////////////////////// ACCOUNTS DATA ///////////////////////////////////////
const acc1 = {
  fullName: 'Avinash Abhi',
  transactions: [
    {
      status: 'success',
      amount: 300,
      date: new Date().toLocaleString(),
      Tid: 1,
      name: 'Meenakshi Iyer',
    },
    {
      status: 'success',
      amount: 200,
      date: new Date().toLocaleString(),
      Tid: 2,
      name: 'Ramesh Kumar',
    },
    {
      status: 'success',
      amount: -100,
      date: new Date().toLocaleString(),
      Tid: 3,
      name: 'Lakshmi Narayan',
    },
    {
      status: 'success',
      amount: 100,
      date: new Date().toLocaleString(),
      Tid: 4,
      name: 'Suresh Reddy',
    },
    {
      status: 'success',
      amount: 140,
      date: new Date().toLocaleString(),
      Tid: 5,
      name: 'Vijaya Shankar',
    },
  ],
  pin: 1111,
  interestRate: 1.5,
  balance: 0,
};

const acc2 = {
  fullName: 'Meenakshi Iyer',
  transactions: [
    {
      status: 'success',
      amount: 450,
      date: new Date().toLocaleString(),
      Tid: 6,
      name: 'Avinash Abhi',
    },
    {
      status: 'success',
      amount: 300,
      date: new Date().toLocaleString(),
      Tid: 7,
      name: 'Lakshmi Narayan',
    },
    {
      status: 'success',
      amount: -80,
      date: new Date().toLocaleString(),
      Tid: 8,
      name: 'Suresh Reddy',
    },
    {
      status: 'success',
      amount: 220,
      date: new Date().toLocaleString(),
      Tid: 9,
      name: 'Vijaya Shankar',
    },
    {
      status: 'success',
      amount: 100,
      date: new Date().toLocaleString(),
      Tid: 10,
      name: 'Ramesh Kumar',
    },
  ],
  pin: 2222,
  interestRate: 1.9,
  balance: 10000,
};

const acc3 = {
  fullName: 'Suresh Reddy',
  transactions: [
    {
      status: 'success',
      amount: 500,
      date: new Date().toLocaleString(),
      Tid: 11,
      name: 'Meenakshi Iyer',
    },
    {
      status: 'success',
      amount: -150,
      date: new Date().toLocaleString(),
      Tid: 12,
      name: 'Avinash Abhi',
    },
    {
      status: 'success',
      amount: 300,
      date: new Date().toLocaleString(),
      Tid: 13,
      name: 'Lakshmi Narayan',
    },
    {
      status: 'success',
      amount: 80,
      date: new Date().toLocaleString(),
      Tid: 14,
      name: 'Vijaya Shankar',
    },
    {
      status: 'success',
      amount: 90,
      date: new Date().toLocaleString(),
      Tid: 15,
      name: 'Ramesh Kumar',
    },
  ],
  pin: 3333,
  interestRate: 1.8,
  balance: 10000,
};

const acc4 = {
  fullName: 'Lakshmi Narayan',
  transactions: [
    {
      status: 'success',
      amount: 600,
      date: new Date().toLocaleString(),
      Tid: 16,
      name: 'Meenakshi Iyer',
    },
    {
      status: 'success',
      amount: 100,
      date: new Date().toLocaleString(),
      Tid: 17,
      name: 'Avinash Abhi',
    },
    {
      status: 'success',
      amount: -200,
      date: new Date().toLocaleString(),
      Tid: 18,
      name: 'Suresh Reddy',
    },
    {
      status: 'success',
      amount: 300,
      date: new Date().toLocaleString(),
      Tid: 19,
      name: 'Vijaya Shankar',
    },
    {
      status: 'success',
      amount: 150,
      date: new Date().toLocaleString(),
      Tid: 20,
      name: 'Ramesh Kumar',
    },
  ],
  pin: 4444,
  interestRate: 2.0,
  balance: 10000,
};

const acc5 = {
  fullName: 'Vijaya Shankar',
  transactions: [
    {
      status: 'success',
      amount: 250,
      date: new Date().toLocaleString(),
      Tid: 21,
      name: 'Meenakshi Iyer',
    },
    {
      status: 'success',
      amount: 300,
      date: new Date().toLocaleString(),
      Tid: 22,
      name: 'Lakshmi Narayan',
    },
    {
      status: 'success',
      amount: 400,
      date: new Date().toLocaleString(),
      Tid: 23,
      name: 'Avinash Abhi',
    },
    {
      status: 'success',
      amount: -150,
      date: new Date().toLocaleString(),
      Tid: 24,
      name: 'Suresh Reddy',
    },
    {
      status: 'success',
      amount: 180,
      date: new Date().toLocaleString(),
      Tid: 25,
      name: 'Ramesh Kumar',
    },
  ],
  pin: 5555,
  interestRate: 1.7,
  balance: 10000,
};

const accounts = [acc1, acc2, acc3, acc4, acc5];

/////////////////////////////// GETTING ELEMENTS /////////////////////////////////

// Buttons

const loginBtn = document.querySelector('.login_btn');
const transferBtn = document.querySelector('.transfer_btn');
// inputs

const inputName = document.querySelector('.login_input--user');
const inputPass = document.querySelector('.login_input--pin');
const loanBtn = document.querySelector('.loan-btn');
const deletionBtn = document.querySelector('.account-deletion-btn');
// Elements
const main = document.querySelector('main');
const transactionsBody = document.querySelector('.transactions-body');
const inCardValue = document.querySelector('.in-card-value');
const outCardValue = document.querySelector('.out-card-value');
const balanceCardValue = document.querySelector('.balance_value');
const recipientName = document.querySelector('.recipient_name');
const fundAmount = document.querySelector('.fund_amount');
const inputLoanAmount = document.querySelector('.input-loan-amount');
const accountDeletionUserName = document.querySelector(
  '.account-deletion-username'
);
const accountDeletionPin = document.querySelector('.account-deletion-pin');
const interestCardValue = document.querySelector('.interest-card-value');
let currAcc;
/////////////////////////////// CREATING USERNAME ///////////////////////////////

const createUsernames = accounts => {
  /* 1.Itterated everyAcc
     2.Create userName
     3.Get the fullName
     4.Split by space
     5.Iterrate every element and get only 0 index value 
     6.Create a new String*/
  accounts.map(account => {
    account.username = account.fullName
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};

createUsernames(accounts);

////////////////////////////// UPDATING TRANSACTIONS ///////////////////////////////
const updateTransactions = (curAcc, sorted = false) => {
  const newAccData = sorted
    ? curAcc.transactions.slice(0).sort((a, b) => {
        return b.amount - a.amount;
      })
    : curAcc.transactions;
  transactionsBody.innerHTML = '';
  newAccData.forEach(transaction => {
    const html = `    <tr>
                <td>${transaction.name}</td>
                <td>
                  <h5>${transaction.date.split(',')[0]}</h5>
                  <p>AT ${transaction.date.split(',')[1]}</p>
                </td>
                <td>${transaction.Tid}</td>
                <td>${transaction.amount}</td>
                <td><span class="status ${
                  transaction.status === 'success' ? 'success' : 'failed'
                }">${transaction.status}</span></td>
              </tr>`;

    transactionsBody.insertAdjacentHTML('afterbegin', html);
  });
};

////////////////////////// SUMMARY DISPLAY /////////////////////////////////////

const displaySummary = curAcc => {
  const incomes = curAcc.transactions
    .filter(transaction => {
      return transaction.amount > 0;
    })
    .reduce((previousVal, currVal) => {
      return previousVal + currVal.amount;
    }, 0);

  inCardValue.textContent = incomes;

  const outcomes = curAcc.transactions
    .filter(transaction => {
      return transaction.amount < 0;
    })
    .reduce((previousVal, currVal) => {
      return previousVal + currVal.amount;
    }, 0);

  outCardValue.textContent = outcomes;

  const currentBal = curAcc.transactions.reduce((previousVal, currVal) => {
    return previousVal + currVal.amount;
  }, 0);

  curAcc.balance = currentBal;
  balanceCardValue.textContent = currentBal;
  const interest = curAcc.transactions
    .filter(transaction => {
      return transaction.amount > 0;
    })
    .map(ele => (ele.amount * curAcc.interestRate) / 100)
    .reduce((previousVal, currVal) => {
      return previousVal + currVal;
    }, 0);

  interestCardValue.textContent = interest;
};

////////////////////////// LOGIN ///////////////////////

loginBtn.addEventListener('click', function (e) {
  /*
    1.GET USERNAME & PASS
    2.GET USER ACCOUNT DETAILS
    3.COMPARE USERNAME AND PASSWORD   */
  e.preventDefault();
  const userName = inputName.value;
  const pass = inputPass.value * 1;
  currAcc = accounts.find(acc => acc.username === userName);
  if (currAcc && userName === currAcc.username && currAcc.pin === pass) {
    main.classList.add('active');
    updateTransactions(currAcc);
    displaySummary(currAcc);
  }
  inputName.value = '';
  inputPass.value = '';
});

///////////////////////// FUND TRANSFER ///////////////////

transferBtn.addEventListener('click', e => {
  /*
  1.read the recipient Name and fund amount
  2.Recipient acc does not exist send the alert
  3.fund > bal -> fail the transaction , update in trans as failed
  4.fund < bal -> balance = balance - fund */
  e.preventDefault();
  const recipient_name = recipientName.value;
  const fund = fundAmount.value * 1;
  const recipientAcc = accounts.find(
    account => account.username === recipient_name
  );
  if (!recipientAcc) {
    alert('Recipient Account not exists');
  } else if (fund > currAcc.balance) {
    alert('In-sufficent balance');
    currAcc.transactions.push({
      status: 'failed',
      amount: 0,
      date: new Date().toLocaleString(),
      Tid: Math.floor(Math.random() * 10000000),
      name: recipientAcc.fullName,
    });
  } else if (fund < currAcc.balance) {
    currAcc.balance = currAcc.balance - fund;
    currAcc.transactions.push({
      status: 'success',
      amount: -fund,
      date: new Date().toLocaleString(),
      Tid: Math.floor(Math.random() * 10000000),
      name: recipientAcc.fullName,
    });

    recipientAcc.transactions.push({
      status: 'success',
      amount: fund,
      date: new Date().toLocaleString(),
      Tid: Math.floor(Math.random() * 10000000),
      name: currAcc.fullName,
    });
  }

  updateTransactions(currAcc);
  displaySummary(currAcc);

  recipientName.value = '';
  fundAmount.value = '';
});

//////////////////////// APPLY FOR LOAN ///////////////////////////////////

loanBtn.addEventListener('click', e => {
  e.preventDefault();
  const loadAmount = inputLoanAmount.value * 1;
  const approve = currAcc.transactions.filter(transaction => {
    return transaction.amount > loadAmount * 0.1;
  });

  if (approve.length > 0) {
    currAcc.transactions.push({
      status: 'success',
      amount: loadAmount,
      date: new Date().toLocaleString(),
      Tid: Math.floor(Math.random() * 10000000),
      name: 'Loan Amount',
    });
  }
  updateTransactions(currAcc);
  displaySummary(currAcc);
  inputLoanAmount.value = '';
});

////////////////////// ACCOUNT DELETION ///////////////////////
deletionBtn.addEventListener('click', e => {
  e.preventDefault();
  const userName = accountDeletionUserName.value;
  const pass = accountDeletionPin.value * 1;
  if (currAcc.username === userName && currAcc.pin === pass) {
    const index = accounts.findIndex(acc => acc.username === userName);
    accounts.splice(index, 1);
    main.classList.remove('active');
  }
  accountDeletionUserName.value = '';
  accountDeletionPin.value = '';
});

//map() if you want to modify the data and return the data stored in new array

// const arr = [1, 2, 3]; // * 2
// // indexing   2 - forLoop  3 - forOf  4 - map
// // 1 * 2 = 2 [2] 2 * 2 = 4 [2,4]

// const res = arr.map(num => {
//   return num * 2;
// });

// console.log(res);

// find() // return

// const arr = [1, 2, 3];

// const res = arr.find(num => {
//   return num === 3;
// });

// console.log(res);

//forEach() // itteration

// const arr = [1, 2, 3];

// 1.indexed 2.forLoop 3.forOf 4.forEach

// arr.forEach((num, index, arr) => {
//   console.log('index is ' + index, num, arr);
// });

// FILTER (to filtering the elements)
// return the elements and creates the new array
// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evens = nums.filter(num => {
//   return num % 2 == 0;
// });

// const odds = nums.filter(num => {
//   return num % 2 != 0;
// });

// const above5 = nums.filter(num => {
//   return num > 5;
// });

// console.log(above5);

// REDUCE  returns the sum value

// const nums = [1, 2, 3]; //6
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }

// // previousValue , currentValue , index , arr
// const sum = nums.reduce((previousValue, currentValue, index, arr) => {
//   return previousValue - currentValue;
// }, 1);
// // * * 1 = 0 reutnr  0
// // 0 * 2 = return 0
// // 0 * 3 = return 0

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //[1,2,3,4]
// const res = arr
//   .filter(num => {
//     return num < 5;
//   })
//   .reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   }, 0);
// // return 1
// // 1 + 2; return 3
// //return 10;
// console.log(res);

//[100,200,300,-200];
//interestRate: 1.7 %,

const nums = [3, 1, 4, 6, 2];

console.log(nums);

/*

return negative a before b // Desc
return positive b before a // Asc
return 0;

*/
// nums.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(nums);

// nums.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log(nums);

// nums.sort((a, b) => {
//   return a - b;
// });

// console.log(nums);

// nums.sort((a, b) => {
//   return b - a;
// });

// console.log(nums);
