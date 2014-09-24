var today = moment();
var tomorrow = moment().add("days", 1);

var dateHelpers = {
   nextWeek: function(m) {
      return m.add("days", 7).weekday(0);
   }
};

console.log("Today", today);
console.log("Tomorrow", tomorrow);
console.log("Next week", dateHelpers.nextWeek(today));