module.exports = function(input, option) {
    var uuid;
    if (option = 'strip') {
        if (input.length == 36) {
            uuid = input.replace(/-/g, '');
        } else {
            uuid = input;
        }
    } else {
        if (input.length != 36) {
            var s = input.match(/.{1,4}/g);
            uuid = s[0] + s[1] + '-' + s[2] + '-' + s[3] + '-' + s[4] + '-' + s[5] + s[6] + s[7]
        } else {
            uuid = input;
        }
    }
    return uuid;
};
