var { createInterface } = require("readline");
var { ask, getFundsError, getIncomeDayError, printDate, displayBudget } = require("./utils/utils");

(function main() {
  var rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  printDate();

  ask(rl, {
    query: "Fonds disponibles ?",
    convertFunction: Number.parseFloat,
    getError: getFundsError
  }).then(function (funds) {
    ask(rl, {
      query: "Jour du prochain revenu ?",
      convertFunction: Number.parseInt,
      getError: getIncomeDayError,
    }).then(function (nextIncomeDay) {
      displayBudget(funds, nextIncomeDay);
    });
  });
})();