"use strict";
function solveEquation(a, b, c) {
  let arr
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0)
    return [];
  if (D == 0)
    arr = [(-b + Math.sqrt(D)) / (2 * a)];
  else if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    arr = tmp;
  }
  return arr; // array
}


"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;
//   let mounts = date / (new Date().setFullYear(new Date().getFullYear()));
//   let amountCredit = amount - contribution;
//   if (amountCredit <= 0)
//     return 0;
//   let monthlyRate = percent / (100 * 12);
//   let monthlyPayment = amountCredit * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), mounts) - 1)));
//   totalAmount = monthlyPayment * mounts;
//   return totalAmount.toFixed(2);
// }
