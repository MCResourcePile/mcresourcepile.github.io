module.exports = function(input) {
    var uuid_original = input;
    var uuid_altered;
    if (input.length == 36) {
        uuid_altered = input.replace(/-/g, '');
    } else {
        s = input.match(/.{1,4}/g);
        uuid_altered = s[0] + s[1] + '-' + s[2] + '-' + s[3] + '-' + s[4] + '-' + s[5] + s[6] + s[7]
    }
    return uuid_original + ' ' + uuid_altered;
};
