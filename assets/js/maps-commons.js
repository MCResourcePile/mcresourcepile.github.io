/***
 * Common JS functions and variables which all maps pages use.
 * Anything that is unique to a maps page or can't be used by 
 * any other of the pages must be left in that document instead
 * of being put here.
 */

is_maps_collection = true;

$(document).ready(function(){
    // count maps with no download and send alert to console
    total_hidden = $('.dynamic').children('.no-download').length;
    maps_no_download = $.map($('.no-download'), function(n, i) {
        return '\n- ' + n.id;
    });
    if (total_hidden > 0) {
        output(total_hidden + ' maps have no download and have been hidden from this listing.\nPlease contact a page manager to add or enable the downloads for the following maps:' + maps_no_download)
    };

    // handle map download requests then send them to GitZip
    $('.click-download:not(.disabled)').click(function() {
        $(this).prop('disabled', true).text('Downloading...');
        $(this).parent().find('.map-download-pending').hide();
        $(this).parent().find('.map-download-started').show();
        active_name = $(this).attr('id');
        active_slug = $(this).attr('slug');
        active_path = $(this).attr('path');
        active_license = $(this).attr('license');
        startDownload(active_name, active_slug, active_path, active_license);
    });

    // open external download modal when original download button clicked
    $('.click-download-external:not(.disabled)').click(function() {
        var active_slug = $(this).attr('slug');
        $('#download-' + active_slug).modal('hide');
        $('#download-opened').modal('show');
    });

    // handle direct downloads
    if (getUrlVars()['dl']) {
        var requested_map = getUrlVars()['dl'];
        if ($('#download-' + requested_map).length == 1) {
            $('#download-' + requested_map).modal('show');
            avatars = $('#download-' + requested_map).children().find('.map-author-avatar');
            for (i = 0; i < avatars.length; i++) {
                source = $(avatars[i]).data('src');
                $(avatars[i]).attr('src', source);
            }
        } else {
            onError('The requested map does not exist in this collection.');
        }
    }

    // handle direct search queries
    if (getUrlVars()['s']) {
        query = getUrlVars()['s'].replace('+', ' ').replace('%20', ' ');
        $('#search').val(query);
    }

    updateListing();
    getApiLimit();

    // update map listing in time with search bar interactions
    $('.record-search-container').click(function() { updateListing() });
    $('.record-search-container').keyup(function() { updateListing() });
    
    // load author avatars when download modal is first opened
    $('.modal.download').on('show.bs.modal', function (e) {
        avatars = $(this).children().find('.map-author-avatar');
        for (i = 0; i < avatars.length; i++) {
            source = $(avatars[i]).data('src');
            $(avatars[i]).attr('src', source);
        }
    });
});

// license definitions
const licenses = {
    commercial: {file: 'LICENSE.txt', contents: 'This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n', message: 'is using a Creative Commons BY-SA 4.0 license'},
    noncommercial: {file: 'LICENSE.txt', contents: 'This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n', message: 'is using a Creative Commons BY-NC-SA 4.0 license'},
    none: {file: 'NOTICE.txt', contents: 'This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n', message: 'has no associated license; be careful when using this map in public servers'}
};
var imported_license;

function startDownload(active_name, active_slug, active_path, active_license) {
    if (active_license == 'commercial') imported_license = licenses.commercial;
    if (active_license == 'noncommercial') imported_license = licenses.noncommercial;
    if (active_license == 'none') imported_license = licenses.none;
    output('Downloading: ' + active_slug + '\nFetching files from: ' + active_path + '\n' + active_name + ' ' + imported_license.message);
    file_name = active_slug
    if (active_path !== undefined) {
        if (user_settings.token) {
            GitZip.setAccessToken(user_settings.token);
            GitZip.zipRepo(active_path);
            output('Using given GitHub API access token.');
        } else {
            GitZip.zipRepo(active_path);
            output('No GitHub API access token provided. Please go to your preferences to generate an access token.')
        }
    } else {
        onError('No download path identified; skipping download request.');
        progress = 0;
        getApiLimit();
    }
};

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
    if (total_maps == '0') {
        $('.total-maps').html('There are no maps to display.');
    } else if (total_display == '0') {
        if (current_search == 'new') {
            $('.total-maps').html('There aren\'t any new map additions to display. Check back later!');
        } else if (current_search == 'popular') {
            $('.total-maps').html('There aren\'t any popular maps at the moment. Check back later!');
        } else {
            $('.total-maps').html('Your search of <code>' + current_search + '</code> references no maps. Maybe try searching something else.');
        }
    } else {
        $('.total-maps').html('Currently displaying ' + total_display + ' of ' + total_maps + ' loaded maps');
    }
};

// get GitHub API request limit information
function getApiLimit() {
    updateRateLimit(function () {
        $('.api-request-remaining').text(user_info.rate.remaining).css('font-weight', 'bold');
        $('.api-request-limit').text(user_info.rate.limit).css('font-weight', 'bold');
        $('.api-request-approximate').text(Math.round(user_info.rate.remaining / 7)).css('font-weight', 'bold');
        $('.api-request-reset').text(moment.unix(user_info.rate.reset).fromNow(true)).css('font-weight', 'bold');
        saveSettings();
    });
};

// handle errors from maps
function onError(message) {
    $('.modal.in').modal('hide');
    $('#download-error-message').modal('show');
    $('#download-error-output').text(message);
}

// modal control for download progress and error messages
GitZip.registerCallback(function(status, message, percent) {
    var progress = percent
    if (status === 'done') {
        $('.modal').modal('hide');
        $('.map-download-pending:hidden').show();
        $('.map-download-started:visible').hide();
        $('.click-download:disabled').prop('disabled', false).text('Download');
        $('#download-complete-message').modal('show');
        progress = 0;
        getApiLimit();
    } else if (status === 'error') {
        $('.modal').modal('hide');
        $('.map-download-pending:hidden').show();
        $('.map-download-started:visible').hide();
        $('.click-download:disabled').prop('disabled', false).text('Download');;
        if (message.indexOf('API rate limit exceeded for') === -1) {
            onError('An error occurred while retrieving your download. Check the console for more details.');
        } else {
            $('#download-rate-limit-message').modal('show');
        }
        progress = 0;
        getApiLimit();
    }
    $('.progress-bar').css({
        'width': (progress * 2) + '%',
        'background-color': 'rgb(71, 198, 99)'
    });
});
