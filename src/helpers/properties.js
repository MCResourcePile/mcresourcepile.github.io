module.exports = function (obj, key, prop) {
    return obj[key] && obj[key][prop];
};
