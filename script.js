const money = prompt("Ваш бюджет на месяц?");

const time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: null,
  income: null,
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let q1 = prompt("Введите обязательную статью расходnв в этом месяце"),
    q2 = prompt("Во сколько обойдется");

  if (
    typeof q1 === "string" &&
    q1 != "" &&
    typeof q1 != null &&
    typeof q2 == "number" &&
    q2 != ""
  ) {
    (appData.expenses = [q1]), q2;
  }
}
const moneyDay = appData.budget / 30;
appData.moneyPerDay = moneyDay;
console.log(appData);
