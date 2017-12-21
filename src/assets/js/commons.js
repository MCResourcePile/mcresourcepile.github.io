/***
 * Common JS functions and variables which all pages use.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

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

if (hide_map_images == 'true') {
    $(".lazy").css({"height": "60px"}).addClass("center");
    $(".map-banner").css({"height": "60px"});
    $(".map-labels").css({"top": "-21px"});
} else {
    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 50
    });
}
