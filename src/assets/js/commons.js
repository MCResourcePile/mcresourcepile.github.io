/***
 * Common JS functions and variables which all pages use.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

applySettings();
isAuthenticated();

if (!user_settings || !user_settings.synced) {
    // prompt user to sync their settings with new preference handling
}

var window_offset = function() { scrollBy(0, -70) };
if (location.hash) window_offset();
window.addEventListener("hashchange", window_offset);

$('[data-toggle="tooltip"]').tooltip()
$('[data-toggle="popover"]').popover()
