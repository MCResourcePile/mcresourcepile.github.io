/**
 * Common JS functions and variables which all pages use.
 */

var user;

$(function() {
    user = new User();
    displayUserInfo();
    displayRates();
    
    // check is the page is being loaded in development directory
    var is_development = /\/(out|src)\//i.test(window.location.href);

    // offset page to prevent navigation overlap
    var window_offset = function() { scrollBy(0, - 70) };
    if (location.hash) window_offset();
    window.addEventListener("hashcchange", window_offset);

    // enable bootstrap toggles
    $('[data-toggle="tooltip"]').tooltip({container: 'body'});
    $('[data-toggle="popover"]').popover({trigger: 'hover'});
});

/**
 * Get the current Url params.
 *
 * @return {Array} Array of key value Url param pairs
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
 * Create a new or update an existing cookie.
 *
 * @param {String} cname  The cookie name
 * @param {String} cvalue The value for the cookie
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
 * @param  {String} cname The cookie name
 * @return {String}       The value of the cookie 
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
