module.exports = function(created) {
    var threshold = new Date();
    threshold = threshold.setMonth(threshold.getMonth() - 2); // 2 months ago

    // return Date.parse(created) > threshold;
    return Date.parse(created) > new Date('2023-01-01');
};
