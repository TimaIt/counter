var money = prompt("Your budget for the month?");
var time = prompt("Enter date in format YYYY-MM-DD");

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

var expenseItem = prompt("Enter a mandatory expense item for this month");
var expenseCost = prompt("How much will it cost?");

appData.expenses[expenseItem] = expenseCost;

console.log("Your daily budget: " + (appData.budget / 30).toFixed(2));
