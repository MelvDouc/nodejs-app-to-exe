const Color = {
  RESET: "\u001B[0m",
  BRIGHT: "\u001B[1m",
  GREEN: "\u001B[32m",
  MAGENTA: "\u001B[35m",
  RED: "\u001B[31m",
  YELLOW: "\u001B[33m"
};

function color(color) {
  return function (output) {
    return color + String(output) + Color.RESET;
  };
}

module.exports.brightMagenta = color(Color.BRIGHT + Color.MAGENTA);
module.exports.green = color(Color.GREEN);
module.exports.red = color(Color.RED);
module.exports.yellow = color(Color.YELLOW);