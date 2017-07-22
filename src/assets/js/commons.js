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

$('[data-toggle="tooltip"]').tooltip()
$('[data-toggle="popover"]').popover()
