// /!\ Intl.DateTimeFormat not working after compilation.
const weekDays = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const monthDay = today.getDate();
const monthLength = new Date(year, month + 1, 0).getDate();
const nextMonthLength = new Date(year, month + 2, 0).getDate();
const dateTranslation = `${weekDays[today.getDay()]} ${monthDay} ${months[month]}`;

module.exports.year = year;
module.exports.monthDay = monthDay;
module.exports.monthLength = monthLength;
module.exports.nextMonthLength = nextMonthLength;
module.exports.dateTranslation = dateTranslation;