const Color = Object.freeze({
  RESET: "\u001B[0m",
  BRIGHT: "\u001B[1m",
  GREEN: "\u001B[32m",
  MAGENTA: "\u001B[35m",
  RED: "\u001B[31m",
  YELLOW: "\u001B[33m"
});

function colorize(color) {
  return (output) => color + String(output) + Color.RESET;
}

const brightMagenta = colorize(Color.BRIGHT + Color.MAGENTA);
const green = colorize(Color.GREEN);
const red = colorize(Color.RED);
const yellow = colorize(Color.YELLOW);

module.exports.brightMagenta = brightMagenta;
module.exports.green = green;
module.exports.red = red;
module.exports.yellow = yellow;