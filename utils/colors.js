const Color = Object.freeze({
  RESET: "\u001B[0m",
  BRIGHT: "\u001B[1m",
  GREEN: "\u001B[32m",
  MAGENTA: "\u001B[35m",
  RED: "\u001B[31m",
  YELLOW: "\u001B[33m"
});

function color(color) {
  return (output) => color + String(output) + Color.RESET;
}

const brightMagenta = color(Color.BRIGHT + Color.MAGENTA);
const green = color(Color.GREEN);
const red = color(Color.RED);
const yellow = color(Color.YELLOW);

module.exports.brightMagenta = brightMagenta;
module.exports.green = green;
module.exports.red = red;
module.exports.yellow = yellow;