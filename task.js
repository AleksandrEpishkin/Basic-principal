"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D == 0)
    arr.push((-b + Math.sqrt(D)) / (2 * a));
  else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  };
  return arr;
}


"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  };
  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  };
  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  };
  let totalAmount;
  let mounts = ((date - (new Date(new Date().setFullYear(new Date().getFullYear())))) / 2629800000).toFixed();
  let amountCredit = amount - contribution;
  if (amountCredit <= 0)
    return 0;
  let monthlyRate = percent / (100 * 12);
  let monthlyPayment = amountCredit * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), mounts) - 1)));
  totalAmount = +(monthlyPayment * mounts);
  return +totalAmount.toFixed(2);
}
