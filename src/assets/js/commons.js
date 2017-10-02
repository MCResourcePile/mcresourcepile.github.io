isAuthenticated()
function isAuthenticated() {
    if (current_token) {
        $( ".auth-enabled" ).show();
        $( ".auth-disabled" ).hide();
    } else {
        $( ".auth-enabled" ).hide();
        $( ".auth-disabled" ).show();
    }
}

var window_offset = function() { scrollBy(0, -70) };
if (location.hash) window_offset();
window.addEventListener("hashchange", window_offset);

$('[data-toggle="tooltip"]').tooltip()
$('[data-toggle="popover"]').popover()
