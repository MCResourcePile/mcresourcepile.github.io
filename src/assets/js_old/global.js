/***
 * Common JS functions and variables which all pages use.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

loadSettings();
applySettings();

var is_maps_collection = false;

var is_development = /\/(out|src)\//i.test(window.location.href);

var window_offset = function() { scrollBy(0, -70) };
if (location.hash) window_offset();
window.addEventListener("hashchange", window_offset);

$('[data-toggle="tooltip"]').tooltip({container: 'body'})
$('[data-toggle="popover"]').popover()

function output(message, level) {
    if (level == 2) {
        console.error(message);
    } else if (level == 1) {
        console.warn(message);
    } else {
        console.log(message);
    }
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};
