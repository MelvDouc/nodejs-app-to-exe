const { createInterface } = require("readline");
const { ask, getFundsError, getIncomeDayError, printDate, displayBudget } = require("./utils/utils");

(async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const fundsParams = {
    query: "Fonds disponibles ?",
    convertFunction: Number.parseFloat,
    getError: getFundsError
  };
  const nextIncomeDayParams = {
    query: "Jour du prochain revenu ?",
    convertFunction: Number.parseInt,
    getError: getIncomeDayError
  };

  printDate();

  const funds = await ask(rl, fundsParams);
  const nextIncomeDay = await ask(rl, nextIncomeDayParams);
  displayBudget(funds, nextIncomeDay);
})();