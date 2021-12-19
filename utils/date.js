var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();

module.exports.monthDay = today.getDate();
module.exports.monthLength = new Date(year, month + 1, 0).getDate();
module.exports.nextMonthLength = new Date(year, month + 2, 0).getDate();
module.exports.dateTranslation = new Intl.DateTimeFormat("fr-FR", { dateStyle: "full" }).format(today);