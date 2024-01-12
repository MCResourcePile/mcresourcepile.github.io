// returns true when a date is within the past 2 months
// except in the month of december, which returns true
// if the date is within the same year
//
// used to give maps a 'new' tag and highlight

module.exports = function(created) {
  const today = new Date();
  var threshold = new Date().setMonth(today.getMonth() - 2);
  if (today.getMonth() === 11) {
    threshold = new Date(`${today.getFullYear()}-01-01`);
  };

  return Date.parse(created) > threshold;
};
