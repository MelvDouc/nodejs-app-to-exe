const { brightMagenta, green, red, yellow } = require("./colors");
const { dateTranslation, monthDay, monthLength, nextMonthLength, year } = require("./date");

function getPromise(rl, { query, convertFunction, getError }) {
  return new Promise((resolve, reject) => {
    rl.question(`${green(query)} `, (input) => {
      const error = getError(input);
      return (error === null)
        ? resolve(convertFunction(input))
        : reject(error);
    });
  });
}

async function ask(readlineInterface, { query, convertFunction, getError }) {
  try {
    const val = await getPromise(readlineInterface, { query, convertFunction, getError });
    return val;
  } catch (error) {
    console.log(`${error}\n`);
    return ask(readlineInterface, { query, convertFunction, getError });
  }
}

function getFundsError(input) {
  if (!input)
    return red(`Valeur requise.`);
  const funds = parseFloat(input.trim());
  if (isNaN(funds))
    return `Valeur invalide : ${red(input.trim())}.`;
  if (funds > Number.MAX_SAFE_INTEGER)
    return red("Valeur trop élevée.");
  return null;
}

function getIncomeDayError(input) {
  if (!input)
    return red(`Valeur requise.`);
  const day = parseInt(input);
  if (isNaN(day))
    return `Valeur invalide : ${red(input.trim())}.`;
  if (day < 1)
    return `Le jour doit être supérieur ou égal à ${red(1)}.`;
  if (day > nextMonthLength)
    return `Il n'y a que ${red(nextMonthLength)} jours le mois prochain.`;
  return null;
}

function printDate() {
  console.log(`Nous sommes le ${yellow(dateTranslation)} ${year}. Il y a ${yellow(monthLength)} jours ce mois-ci.\n`);
}

function displayBudget(funds, nextIncomeDay) {
  const budget = funds / (monthLength - monthDay + nextIncomeDay);
  console.log(`\n          ${brightMagenta(budget.toFixed(2))}\n`);
  console.log("N'importe quelle touche pour quitter...");
  process.stdin.on("keypress", (_e) => {
    process.exit();
  });
}

module.exports.ask = ask;
module.exports.getFundsError = getFundsError;
module.exports.getIncomeDayError = getIncomeDayError;
module.exports.printDate = printDate;
module.exports.displayBudget = displayBudget;