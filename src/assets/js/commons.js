/***
 * Common JS functions and variables which all pages use.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

loadSettings();
applySettings();

if (!user_settings.synced) {
    $('#sync-settings-alert').show();
    syncSettings();
    $('#sync-settings-alert').text('Sync has been completed. Thank you.').addClass('alert-info').removeClass('alert-danger').delay(5000).fadeOut();
}

var window_offset = function() { scrollBy(0, -70) };
if (location.hash) window_offset();
window.addEventListener("hashchange", window_offset);

$('[data-toggle="tooltip"]').tooltip()
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
