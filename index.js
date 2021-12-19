var { createInterface } = require("readline");
var { ask, getFundsError, getIncomeDayError } = require("./utils/utils");
var { dateTranslation, monthDay, monthLength } = require("./utils/date");
var { brightMagenta, yellow } = require("./utils/colors");

function main() {
  var rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`Nous sommes le ${yellow(dateTranslation)}. Il y a ${yellow(monthLength)} jours ce mois-ci.\n`);

  ask(rl, {
    query: "Fonds disponibles ?",
    convertFunction: Number.parseFloat,
    getError: getFundsError
  }).then(funds => {
    ask(rl, {
      query: "Jour du prochain revenu ?",
      convertFunction: Number.parseInt,
      getError: getIncomeDayError,
    }).then(nextIncomeDay => {
      var budget = (funds / (monthLength - monthDay + nextIncomeDay)).toFixed(2);
      console.log(`\n${brightMagenta(budget)}\n`);
      console.log("N'importe quelle touche pour quitter...");
      process.stdin.on("keypress", function () {
        process.exit();
      });
    });
  });
}

main();