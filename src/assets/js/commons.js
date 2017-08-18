var current_token = Cookies.get('rp_user_token');

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

var selected_theme = Cookies.get('rp_user_theme');
if (selected_theme == 'dark') {
    $('head').append('<link href="/assets/css/dark.css" rel="stylesheet">');
} else {
    Cookies.set('rp_user_theme', 'default', { expires: 365 });
}

var window_offset = function() { scrollBy(0, -70) };
if (location.hash) window_offset();
window.addEventListener("hashchange", window_offset);

$('[data-toggle="tooltip"]').tooltip()
$('[data-toggle="popover"]').popover()
