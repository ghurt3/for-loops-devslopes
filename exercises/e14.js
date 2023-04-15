
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalances = [];
  for (let i = 0; i < array.length; i++) {
    let sumOne = 0;
    let sumTwo = 0;
    if ("withdrawals" in array[i] && "deposits" in array[i]) {
      for (let e of array[i].deposits) {
        sumOne += e;
      }
      for (let j of array[i].withdrawals) {
        sumTwo += j;
      }
      if (sumOne - sumTwo !== array[i].balance) {
        wrongBalances.push(array[i]);
      }
    }
    else if ("deposits" in array[i]) {
      for (let k of array[i].deposits) {
        sumOne += k;
      }
      if (sumOne !== array[i].balance) {
        wrongBalances.push(array[i]);
      }
    }
    else if (array[i].balance !== 0) {
      wrongBalances.push(array[i]);
    }
  }
  return wrongBalances;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
