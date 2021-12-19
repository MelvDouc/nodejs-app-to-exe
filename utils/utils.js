var { green, red } = require("./colors");
var { nextMonthLength } = require("./date");

function getPromise(rl, { query, convertFunction, getError }) {
  return new Promise(function (resolve, reject) {
    rl.question(`${green(query)} `, function (input) {
      var error = getError(input);
      return (error === null)
        ? resolve(convertFunction(input))
        : reject(error);
    });
  });
}

function ask(readlineInterface, { query, convertFunction, getError }) {
  return getPromise(readlineInterface, { query, convertFunction, getError })
    .then(function (val) {
      return val;
    })
    .catch(function (error) {
      console.log(`${error}\n`);
      return ask(readlineInterface, { query, convertFunction, getError });
    });
};

function getFundsError(input) {
  if (!input)
    return red(`Valeur requise.`);
  var funds = parseFloat(input.trim());
  if (isNaN(funds))
    return `Valeur invalide : ${red(input.trim())}.`;
  if (funds > Number.MAX_SAFE_INTEGER)
    return red("Valeur trop élevée.");
  return null;
};

function getIncomeDayError(input) {
  if (!input)
    return red(`Valeur requise.`);
  var day = parseInt(input);
  if (isNaN(day))
    return `Valeur invalide : ${red(input.trim())}.`;
  if (day < 1)
    return `Le jour doit être supérieur ou égal à ${red(1)}.`;
  if (day > nextMonthLength)
    return `Il n'y a que ${red(nextMonthLength)} jours le mois prochain.`;
  return null;
};

module.exports.ask = ask;
module.exports.getFundsError = getFundsError;
module.exports.getIncomeDayError = getIncomeDayError;