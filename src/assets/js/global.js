/**
 * Common JS functions and variables which all pages use.
 */

// setup user
var user = new User();
displayUserInfo();
displayRates();
applyUserPreferences();
    
// check is the page is being loaded in development directory
var is_development = /\/(out|src)\//i.test(window.location.href);

// the current page directory
var current_path = window.location.pathname.replace('.html', '');

// offset page to prevent navigation overlap
var window_offset = function() { scrollBy(0, - 70) };
if (location.hash) window_offset();
window.addEventListener("hashcchange", window_offset);

// enable bootstrap toggles
$('[data-toggle="tooltip"]').tooltip({container: 'body'});
$('[data-toggle="popover"]').popover({trigger: 'hover'});

/**
 * Get the all current Url params.
 *
 * @return {array} Array of key value Url param pairs
 */
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/**
 * Get a specific Url param.
 *
 * @return {string} The param value
 */
function getUrlParam(param) {
    var vars = getUrlVars();
    var value = vars[param];
    var param = (typeof value !== 'undefined') ? decodeURIComponent(value) : undefined;
    return param;
}

/** 
 * Create a new or update an existing cookie.
 *
 * @param {string} cname  The cookie name
 * @param {string} cvalue The value for the cookie
 */
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** 
 * Get the value of a saved cookie. Returns an empty string if the cookie
 * could not be found.
 *
 * @param  {string} cname The cookie name
 * @return {string}       The value of the cookie 
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/** 
 * Displays current User information on the page.
 * Username is inserted in elements with the '.user-username' class.
 * Avatar is placed in images with the '.user-avatar' class.
 */
function displayUserInfo() {
    $('.user-username').text(user._username);
    $('img.user-avatar').attr('src', user._avatar);
}

/** 
 * Displays current User API rate limits on the page.
 * Limit is inserted in elements with the '.user-rate-limit' class.
 * Remaining is inserted in elements with the '.user-rate-remaining' class.
 * Reset is inserted in elements with the '.user-rate-reset' class.
 * Approximate downloads left is inserted in elements with the '.user-rate-approx' class.
 */
function displayRates() {
    var limit = user._rate.limit;
    var remaining = user._rate.remaining;
    var reset = new Date(user._rate.reset * 1000);
    var approx = Math.floor(user._rate.remaining / 7);
    $('.user-rate-limit').text(limit).val(limit);
    $('.user-rate-remaining').text(remaining).val(remaining);
    $('.user-rate-reset').text(reset).val(reset);
    $('.user-rate-approx').text(approx).val(approx);
}

/**
 * Updates User rate limit numbers and then displays them
 */
function updateAndDisplayRates() {
    user.fetchRates(function() {
        displayRates();
    });
}
