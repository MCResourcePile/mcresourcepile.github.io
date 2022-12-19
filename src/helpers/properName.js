module.exports = function(str) {
    return str.split(/(?=[A-Z])/).join(" ")
};
