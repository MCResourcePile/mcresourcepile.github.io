// store maps in JSON format for suggestions
var maps_json;

$(function() {
    var searchable = new List('searchable-collection', {
        valueNames: ['tags', 's-title', 'users', 'uuids']
    });
    var searchable_type = "maps";
    setupSearch(searchable, searchable_type);
    
    // handle map download requests then send them to GitZip
    $('.click-download:not(.disabled)').click(function() {
        $(this).prop('disabled', true).text('Downloading...');
        $(this).parent().find('.map-download-pending').hide();
        $(this).parent().find('.map-download-started').show();
        var name = $(this).attr('id');
        var slug = $(this).attr('slug');
        var path = $(this).attr('path');
        var license = $(this).attr('license');
        startDownload(name, slug, path, license);
    });

    // open external download modal when original download button clicked
    $('.click-download-external:not(.disabled)').click(function() {
        var slug = $(this).attr('slug');
        if (user._preferences.show_map_suggestions) {
            suggestMaps(slug);
        }
        $('#download-' + slug).modal('hide');
        $('#download-opened').modal('show');
    });

    // handle direct downloads
    if (typeof getUrlParam('dl') != 'undefined') {
        var requested_map = getUrlParam('dl');
        if ($('#download-' + requested_map).length) {
            $('#download-' + requested_map).modal('show');
            var avatars = $('#download-' + requested_map).children().find('.map-author-avatar');
            for (i = 0; i < avatars.length; i++) {
                var source = $(avatars[i]).data('src');
                $(avatars[i]).attr('src', source);
            }
        } else {
            msg = "The requested map does not exist in this collection.\nProvided map slug: " + requested_map
            onError(msg);
        }
    }

    // handle map image requests
    $('.click-image').click(function() {
        var name = $(this).attr('id');
        var thumbnail = $(this).attr('thumbnail');
        $('#map-image-display .map-title').text(name);
        $('#map-image-display .map-image').attr('src', thumbnail);
        $('#map-image-display').modal('show');
    });

    // fetch json version of loaded maps
    // used for map suggestions when enabled
    var source = $('#maps-data').data('source');
    if (user._preferences.show_map_suggestions) {
        $.getJSON("https://cdn.jsdelivr.net/gh/MCResourcePile/mcresourcepile.github.io@source/src/data/maps/" + source + ".json", function(r) {
            maps_json = r.data.maps;
        });
    }
    
    // load author avatars when download modal is first opened
    $('.modal.download').on('show.bs.modal', function (e) {
        var avatars = $(this).children().find('.map-author-avatar');
        for (i = 0; i < avatars.length; i++) {
            var source = $(avatars[i]).data('src');
            $(avatars[i]).attr('src', source);
        }
    });
    
    // show stats panel and insert download stats
    if (user._preferences.show_map_stats) {
        $('.map-download-stats').show();
        fetchGlobalDownloads();
        fetchUniqueDownloads();
        fetchRecentDownloads();
    }
    
    // show map image buttons
    if (user._preferences.show_map_images == false) {
        $('.map-thumbnail:not(.collapse-immune) .map-button').addClass('map-button-sm');
        $('.map-thumbnail:not(.collapse-immune) .click-image').show();
    }
    
    // hide authentication warning if theres a token
    if (user._token) {
        $('.auth-disabled').hide();
    }
});

var licenses = {
    commercial: {
        file: 'LICENSE.txt',
        contents: 'This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n\nDownloaded from MCResourcePile (https://mcresourcepile.github.io/).'
    },
    noncommercial: {
        file: 'LICENSE.txt',
        contents: 'This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n\nDownloaded from MCResourcePile (https://mcresourcepile.github.io/).'
    },
    none: {
        file: 'NOTICE.txt',
        contents: 'This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n'
    }
};

function startDownload(name, slug, path, license) {
    var license_data;
    switch (license) {
        case "commercial":
            license_data = licenses.commercial;
            break;
        case "noncommercial":
            license_data = licenses.noncommercial;
            break
        default:
            license_data = licenses.none;
            break;
    }
    if (path) {
        if (user._token) {
            GitZip.setAccessToken(user._token);
        }
        GitZip.addTextFile(license_data.file, license_data.contents);
        if (is_development) {
            GitZip.setProductionState(false);
        }
        GitZip.zipRepo(path);
        if (user._preferences.show_map_suggestions) {
            suggestMaps(slug);
        }
    } else {
        var err = "No download path identified for " + slug + ".";
        onError(err);
    }
};

// handle errors from maps
function onError(message) {
    $('.modal.in').modal('hide');
    $('#download-error-message').modal('show');
    $('#download-error-output').text(message);
}

// modal control for download progress and error messages
GitZip.registerCallback(function(status, message, percent) {
    var progress = percent;
    if (status === 'done') {
        $('.modal').modal('hide');
        $('.map-download-pending:hidden').show();
        $('.map-download-started:visible').hide();
        $('.click-download:disabled').prop('disabled', false).text('Download');
        $('#download-complete-message').modal('show');
        progress = 0;
        updateAndDisplayRates();
    } else if (status === 'error') {
        $('.modal').modal('hide');
        $('.map-download-pending:hidden').show();
        $('.map-download-started:visible').hide();
        $('.click-download:disabled').prop('disabled', false).text('Download');
        if (message.indexOf('API rate limit exceeded for') === -1) {
            onError('An error occurred while retrieving your download. Check the console for more details.');
        } else {
            $('#download-rate-limit-message').modal('show');
        }
        progress = 0;
        updateAndDisplayRates();
    }
    $('.progress-bar').css({
        'width': (progress * 2) + '%',
        'background-color': 'rgb(71, 198, 99)'
    });
});

function suggestMaps(slug) {
    $('.map-suggestions-wrapper').show();
    // get json data for target map via slug
    var target = maps_json.filter(function(val, index, array) {
        return val.slug === slug;
    });
    // check if target map exists in data
    if (target.length > 0) {
        target = target[0];
        // array for similar maps
        var similar = [];
        // loop through the json array to compare and find similar maps to suggest
        for (var i = 0; i < maps_json.length; i++) {
            if (maps_json[i].slug != target.slug) {
                var weight = 0;
                // compare authors
                for (var j = 0; j < target.authors.length; j++) {
                    for (var k = 0; k < maps_json[i].authors.length; k++) {
                        if (target.authors[j].uuid === maps_json[i].authors[k].uuid) weight += 5;
                    }
                }
                // compare tags
                for (var j = 0; j < target.tags.length; j++) {
                    for (var k = 0; k < maps_json[i].tags.length; k++) {
                        if (target.tags[j] === maps_json[i].tags[k]) weight += 2;
                    }
                }
                // if the map has a weight score good enough
                // add it to the list of similar maps
                if (weight > 0) {
                    var temp = maps_json[i];
                    temp.weight = weight;
                    similar.push(temp);
                }
            }
        }
        if (similar.length >= 4) {
            // sort the list by weight
            similar.sort(function(a, b) {
                return b.weight - a.weight;
            });
            similar.sort();
            $('.map-suggestions-wrapper').show();
            $('.map-suggestions').text('');
            // display suggested maps in download success menu
            for (var i = 1; i < 4; i++) {
                var repo = $('#maps-data').data('source');
                if (repo == "overcast") {
                    var snip = similar[i].slug.substring(0, 1);
                    if (snip < "g") {
                        repo = "overcast-maps-a-to-f"
                    } else if (snip < "o") {
                        repo = "overcast-maps-g-to-n"
                    } else {
                        repo = "overcast-maps-o-to-z"
                    }
                } else {
                    repo = repo + "-maps";
                }
                var authors = "by ";
                for (var j = 0; j < similar[i].authors.length; j++) {
                    authors += similar[i].authors[j].username;
                    if (j == 1) {
                        authors += ", and more";
                        break;
                    }
                    if (similar[i].authors.length > 1) {
                        authors += ", ";
                    }
                }
                var tags = "";
                for (var j = 0; j < similar[i].tags.length; j++) {
                    tags += similar[i].tags[j];
                    if (j != similar[i].tags.length - 1) tags += ", ";
                }
                $('.map-suggestions').append(
                    "<div class='col-sm-4 img-thumbnail map-thumbnail small collapse-immune'>\
                        <div class='map-thumbnail-header'>\
                            <img class='image' src='https://raw.githubusercontent.com/MCResourcePile/" + repo + "/master/maps/" + similar[i].slug + "/map.png'>\
                            <div class='banner'>\
                                <div class='title'><a href='?dl=" + similar[i].slug + "'>" + similar[i].name + "</a></div>\
                            </div>\
                        </div>\
                        <div class='map-thumbnail-body'>\
                            <div class='authors'>" + authors + "</div>\
                        </div>\
                    </div>"
                );
            }
        } else {
            $('.map-suggestions-wrapper').hide();
        }
    } else {
        msg = "Could not load suggested maps as the given map slug could not be found.\nProvided slug: " + slug
        onError(msg);
    }
}

function fetchGlobalDownloads() {
    var total = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgICAgAoM&format=jsonp', function(data){return data});
    total.done(function() {
        var stats = total.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-total[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    total.fail(function() {
        console.warn('Failed to retrieve "Global lifetime downloads" query from Google Analytics superProxy application.');
        return;
    });
}

function fetchUniqueDownloads() {
    var unique = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgNrjhgoM&format=jsonp', function(data){return data});
    unique.done(function() {
        var stats = unique.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-unique[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    unique.fail(function() {
        console.warn('Failed to retrieve "Global unique downloads" query from Google Analytics superProxy application.');
        return;
    });
}

function fetchRecentDownloads() {
    var recent = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgPjChAoM&format=jsonp', function(data){return data});
    recent.done(function() {
        var stats = recent.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-recent[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    recent.fail(function() {
        console.warn('Failed to retrieve "Global downloads (30 days)" query from Google Analytics superProxy application.');
        return;
    });
}
