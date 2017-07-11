/***
 * Common JS functions and variables which all maps pages use.
 * Anything that is unique to a maps page or can't be used by 
 * any other of the pages must be left in that document instead
 * of being put here.
 */

/* Count maps with no download and send alert to console */
var total_hidden = $('.dynamic').children('.no-download').length;
var maps_no_download = $.map($(".no-download"), function(n, i) {
    return "\n- " + n.id;
});

if (total_hidden > 0) {
    console.log(total_hidden + " maps have no download and have been hidden from this listing.\nPlease contact a page manager to add or enable the downloads for the following maps:" + maps_no_download)
}

/* Enable thumbnail searching */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
    makeSearchable()
});
$('.record-search-container').click(function() {
    makeSearchable()
});
$(document).keyup(function() {
    makeSearchable()
});

function makeSearchable() {
    $('#maps-output .dynamic').searchable({
        selector: 'div.map-thumbnail',
        childSelector: '.map-float',
        searchField: '#search'
    })
    var total_maps = $('.map-thumbnail').length
    var total_display = $('.map-thumbnail:visible').length
    var total_official = $('.official-map:visible').length
    var total_unofficial = $('.unofficial-map:visible').length
    var current_search = $('#search').val()
    if (total_maps == "0") {
        $(".total-maps").html("No maps successfully loaded<br>Please check the console for any errors and contact a page manager");
    } else if (total_display == "0") {
        if (current_search == "starred") {
            $(".total-maps").html("You have not starred any maps yet!\nHover over a map's thumbnail and click to star that map.");
        } else {
            $(".total-maps").html("Your query of <code>" + current_search + "</code> references no maps, please try searching something else");
        }
    } else {
        $(".total-maps").html("Currently displaying " + total_display + " of " + total_maps + " loaded maps");
    }
}

/* Check which license each map is using */
var license = true;
var commercial = true;

function commercialLicense() {
    license = true;
    commercial = true;
    console.log("This map is using a Creative Commons BY-SA 4.0 license");
}
function noncommercialLicense() {
    license = true;
    commercial = false;
    console.log("This map is using a Creative Commons BY-NC-SA 4.0 license");
}
function noLicense() {
    license = false;
    console.log("This map has no associated license; be careful when using this map in public servers");
}

/* Get GitHub API request limit information */
function getApiLimit() {
    limitResponse = (function () {
            limitResponse = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'https://api.github.com/rate_limit',
                'dataType': "json",
                'success': function (data) {
                    limitResponse = data;
                }
            });
        return limitResponse;
        })(); 
        sessionLimit = limitResponse.rate.limit;
        sessionRemaining = limitResponse.rate.remaining;
        sessionDownloads = Math.round(sessionRemaining / 7);
}
var sessionLimit = 0;
var sessionRemaining = 0;
var sessionDownloads = 0;

/* Modal control for download progress and error messages */
GitZip.registerCallback(function(status, message, percent) {
    if (status === "done") {
        $("#download-complete-message").modal('show');
        $('#download-starting-message').modal('hide');
        /* Evaluate GitHub API request limit and display response in success modal */
        getApiLimit();
        $("#api-request-remaining").html(sessionRemaining).css("font-weight", "bold");
        $("#api-request-limit").html(sessionLimit).css("font-weight", "bold");
        $("#api-request-approximate").html(sessionDownloads).css("font-weight", "bold");
    } else if (status === "error") {
        if (message.indexOf("API rate limit exceeded for") === -1) {
            $("#download-error-message").modal('show');
            $('#download-starting-message').modal('hide');
        } else {
            $("#download-rate-limit-message").modal('show');
            $('#download-starting-message').modal('hide');
        }
    }
});
