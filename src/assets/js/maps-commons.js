/***
 * Common JS functions and variables which all maps pages use.
 * Anything that is unique to a maps page or can't be used by 
 * any other of the pages must be left in that document instead
 * of being put here.
 */

var maps_hidden;
var maps_no_download;
var license_file;
var license_content;
$(document).ready(function(){
    /* Count maps with no download and send alert to console */
    total_hidden = $('.dynamic').children('.no-download').length;
    maps_no_download = $.map($(".no-download"), function(n, i) {
        return "\n- " + n.id;
    });
    if (total_hidden > 0) {
        console.log(total_hidden + " maps have no download and have been hidden from this listing.\nPlease contact a page manager to add or enable the downloads for the following maps:" + maps_no_download)
    }

    /* Handle map download requests then send them to GitZip */
    $('.click-download').click(function() {
        var active_name = $(this).attr('id');
        var active_slug = $(this).attr('slug');
        var active_path = $(this).attr('path');
        var active_license = $(this).attr('license');
        var active_license_message;
        if (active_license == 'none') {
            active_license_message = "has no associated license; be careful when using this map in public servers";
            license_file = "NOTICE.txt";
            license_content = "This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n";
        } else if (active_license == 'commercial') {
            active_license_message = "is using a Creative Commons BY-SA 4.0 license";
            license_file = "LICENSE.txt";
            license_content = "This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n";
        } else {
            active_license_message = "is using a Creative Commons BY-NC-SA 4.0 license";
            license_file = "LICENSE.txt";
            license_content = "This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n";
        }
        $('#download-' + active_slug).modal('hide');
        $('#download-starting-message').modal('show');
        console.info('Downloading: ' + active_slug + '\nFetching files from: ' + active_path + '\n' + active_name + ' ' + active_license_message);
        file_name = active_slug
        if (current_token) {
            GitZip.setAccessToken(current_token);
            GitZip.zipRepo(active_path);
            console.info('Using given GitHub API access token.');
        } else {
            GitZip.zipRepo(active_path);
            console.warn('No GitHub API access token provided. Please go to your preferences to generate an access token.')
        }
    });

    updateListing()
    getApiLimit()
});

/* Update map listing in time with search bar interactions */
$('.record-search-container').click(function() { updateListing() });
$('.record-search-container').keyup(function() { updateListing() });

function updateListing() {
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
        $(".total-maps").html("There are no maps to display.");
    } else if (total_display == "0") {
        if (current_search == "new") {
            $(".total-maps").html("There aren't any new map additions to display. Check back later!");
        } else if (current_search == "popular") {
            $(".total-maps").html("There aren't any popular maps at the moment. Check back later!");
        } else {
            $(".total-maps").html("Your search of <code>" + current_search + "</code> references no maps. Maybe try searching something else.");
        }
    } else {
        $(".total-maps").html("Currently displaying " + total_display + " of " + total_maps + " loaded maps");
    }
}

/* Get GitHub API request limit information */
var sessionLimit = "0";
var sessionRemaining = "0";
var sessionDownloads = "0";
function getApiLimit() {
    limitResponse = (function () {
            limitResponse = null;
            if (current_token != null) {
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': 'https://api.github.com/rate_limit?access_token=' + current_token,
                    'dataType': "json",
                    'success': function (data) {
                        limitResponse = data;
                    }
                });
            } else {
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': 'https://api.github.com/rate_limit',
                    'dataType': "json",
                    'success': function (data) {
                        limitResponse = data;
                    }
                });
            }
        return limitResponse;
    })(); 
    sessionLimit = limitResponse.rate.limit;
    sessionRemaining = limitResponse.rate.remaining;
    sessionDownloads = Math.round(sessionRemaining / 7);
    /* Update API request information on page */
    $(".api-request-remaining").html(sessionRemaining).css("font-weight", "bold");
    $(".api-request-limit").html(sessionLimit).css("font-weight", "bold");
    $(".api-request-approximate").html(sessionDownloads).css("font-weight", "bold");
}

/* Modal control for download progress and error messages */
GitZip.registerCallback(function(status, message, percent) {
    var progress = percent
    if (status === "done") {
        $("#download-complete-message").modal('show');
        $('#download-starting-message').modal('hide');
        progress = 0;
        getApiLimit();
    } else if (status === "error") {
        $('#download-starting-message').modal('hide');
        if (message.indexOf("API rate limit exceeded for") === -1) {
            $("#download-error-message").modal('show');
        } else {
            $("#download-rate-limit-message").modal('show');
        }
        progress = 0;
        getApiLimit();
    }
    $('#compile-progress').css({
        'width': (progress * 2) + '%',
        'background-color': 'rgba(21, 57, 177, ' + progress / 200 + ')'
    });
});
