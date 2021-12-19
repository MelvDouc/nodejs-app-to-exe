var { createInterface } = require("readline");
var { ask, getFundsError, getIncomeDayError, printDate, displayBudget } = require("./utils/utils");

(function main() {
  var rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var fundsParams = {
    query: "Fonds disponibles ?",
    convertFunction: Number.parseFloat,
    getError: getFundsError
  };
  var nextIncomeDayParams = {
    query: "Jour du prochain revenu ?",
    convertFunction: Number.parseInt,
    getError: getIncomeDayError
  };

  printDate();

  ask(rl, fundsParams)
    .then(function (funds) {
      ask(rl, nextIncomeDayParams)
        .then(function (nextIncomeDay) {
          displayBudget(funds, nextIncomeDay);
        });
    });
})();