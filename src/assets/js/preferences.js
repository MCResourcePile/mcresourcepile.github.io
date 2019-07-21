/**
 * Preferences
 */

displayUserInfo() {
    $('.user-username').text(user._username);
    $('.user-avatar').attr('src', user._avatar);
}

displayRates() {
    $('.user-rate-limit').text(user._rate.limit);
    $('.user-rate-remaining').text(user._rate.remaining);
    $('.user-rate-reset').text(user._rate.reset);
    $('.user-rate-approx').text(user._rate.remaining / 7);
}