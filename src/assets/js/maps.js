// store maps in JSON format for suggestions
var maps_json;
var maps_stats = [];
var maps_commons;
var uuids;

$(function() {
    // fetch author names
    uuids = JSON.parse($('#loaded_uuids_json').text())
    
    var searchable = new List('searchable-collection', {
        valueNames: ['tags', 's-title', 'users', 'uuids']
    });
    var searchable_type = "maps";
    setupSearch(searchable, searchable_type);
    
    $('[data-toggle="download-modal"]').click(function() {
        var slug = $(this).data('slug');
        var repo = $(this).data('repo');
        var branch = $(this).data('branch');
        var path = $(this).data('path');
        var env = $(this).data('environment');
        var downloads = {
            external: $(this).data('external-download'),
            source: $(this).data('source'),
            discussion: $(this).data('discussion')
        }
        var sponsor = $(this).data('sponsor');
        populateDownloadModal(maps_json.filter(function(val, index, array) {
            return val.slug === slug;
        })[0], repo, branch, path, env, downloads, sponsor);
        $('#map-download-display').modal('show');
    });
    
    // handle map download requests then send them to GitZip
    $('.click-download:not(.disabled)').click(function() {
        $(this).prop('disabled', true).text('Downloading...');
        $('.map-download-pending').hide();
        $('.map-download-started').show();
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
        $('#map-download-display').modal('hide');
        $('#download-opened').modal('show');
    });

    // handle map image requests
    $('.click-image').click(function() {
        var name = $(this).attr('id');
        var thumbnail = $(this).attr('thumbnail');
        $('#map-image-display .map-title').text(name);
        $('#map-image-display .map-image').attr('src', thumbnail);
        $('#map-image-display').modal('show');
    });
    
    // fetch json version gloabl map config
    // (tag short hands and environments)
    $.getJSON("/data/global.json", function(r) {
        maps_commons = r.settings.maps;
    });

    // fetch json version of loaded maps
    var source = $('#maps-data').data('source');
    $.getJSON("/data/maps/" + source + ".json", function(r) {
        maps_json = r.data.maps;
        
        var downloadBySlug = getUrlParam('dl');
        if (downloadBySlug) {
            var b = $('.map-download-trigger[data-slug="' + downloadBySlug + '"]').trigger('click');
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
    unlicensed: {
        file: 'NOTICE.txt',
        contents: 'This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n'
    }
};

function populateDownloadModal(map, repo, branch, path, env, downloads, sponsor) {
    // populate map name
    $('[data-entry="map-name"]').text(map.name);
    
    // populate map authors
    $('[data-entry="map-authors"]').empty().append([
        $('<span/>').text('Created by')
    ]);
    map.authors.forEach(function(author, index) {
        var normalised = author.uuid.replace(/-/g, "");
        if (normalised in uuids) {
            author.username = uuids[normalised];
        }
        $('[data-entry="map-authors"]').append([
            $('<span/>', {'class': 'author-name-avatar'}).append([
                $('<img>', {
                    'class': 'map-author-avatar',
                    'src': 'https://crafatar.com/avatars/' + author.uuid + '?size=16&default=MHF_Steve&overlay'
                }),
                $('<span/>', {
                    'class': 'author-filter-trigger',
                    'data-query': author.uuid
                }).text(author.username)
            ])
        ]);
    });
    
    // display correct license
    $('[data-license]').hide();
    var license;
    if (map.sourced || map.unlicensed) {
        $('[data-license="unlicensed"]').show();
        license = "unlicensed";
    } else if (map.commercial) {
        $('[data-license="by-sa"]').show();
        license = "commercial";
    } else {
        $('[data-license="by-nc-sa"]').show();
        license = "noncommercial";
    }
    
    // populate disclaimer
    if (env in maps_commons.environments) {
        $('[data-body="disclaimer"]').show();
        $('[data-entry="disclaimer"]').html(maps_commons.environments[env].message);
    } else {
        $('[data-body="disclaimer"]').hide();
    }
    
    // populate map tags
    $('[data-entry="map-tags"]').empty();
    map.tags.forEach(function(tag, index) {
        if (tag in maps_commons.tags) {
            tag = maps_commons.tags[tag].display;
        }
        $('[data-entry="map-tags"]').append([
            $('<span/>', {'class': 'badge badge-info'}).text(tag.charAt(0).toUpperCase() + tag.slice(1))
        ]);
    });
    $('[data-entry="map-tags"]').append([
        $('<span/>', {'class': 'badge badge-primary'}).text(maps_commons.environments[env].label),
        (map.commercial && !(map.sourced || map.unlicensed)) ? $('<span/>', {'class': 'badge badge-success'}).text("Commercial") : null,
        (!map.commercial && !(map.sourced || map.unlicensed)) ? $('<span/>', {'class': 'badge badge-warning'}).text("Noncommercial") : null,
        (map.sourced || map.unlicensed) ? $('<span/>', {'class': 'badge badge-secondary'}).text("Unlicensed") : null,
        $('<span/>', {'class': 'badge badge-secondary'}).text(map.slug)
    ]);
    
    // populate map preview image
    var src = 'https://raw.githubusercontent.com/' + repo + '/' + branch + path + map.slug + '/map.png';
    var preview = new Image();
    preview.src = src;
    preview.onload = function() {
        $('[data-entry="map-image"]').attr('src', src);
    }
    preview.onerror = function() {
        $('[data-entry="map-image"]').attr('src', '/assets/img/404.png');
    }
    
    // add links to download buttons
    $('[data-download-type]').hide();
    if (downloads.external) {
        $('[data-download-type="external"]').show().attr('href', downloads.external);
    }
    if (downloads.source) {
        $('[data-download-type="source"]').show().attr('href', downloads.source);
    }
    if (downloads.discussion) {
        $('[data-download-type="discussion"]').show().attr('href', downloads.discussion);
    }
    $('[data-entry="download"]').attr({
        'id': map.name,
        'slug': map.slug,
        'license': license,
        'path': 'https://github.com/' + repo + '/tree/' + branch + path + map.slug
    });
    $('[data-entry="github-page"]').attr('href', 'https://github.com/' + repo + '/tree/' + branch + path + map.slug);
    
    // populate map download stats
    if (user._preferences.show_map_stats) {
        var matched_total = false
        var matched_unique = false
        var matched_recent = false
        if (maps_stats.total != undefined) {
            $('.map-download-stats').show()
            if (maps_stats.total != undefined) {
                for (var i = 0; i < maps_stats.total.length; i++) {
                    if (map.name == (maps_stats.total[i])[0]) {
                        $('[data-entry="map-stats-total"]').text((maps_stats.total[i])[1])
                        matched_total = true
                    }
                }
            }
            if (maps_stats.unique != undefined) {
                for (var i = 0; i < maps_stats.unique.length; i++) {
                    if (map.name == (maps_stats.unique[i])[0]) {
                        $('[data-entry="map-stats-unique"]').text((maps_stats.unique[i])[1])
                        matched_unique = true
                    }
                }
            }
            if (maps_stats.recent != undefined) {
                for (var i = 0; i < maps_stats.recent.length; i++) {
                    if (map.name == (maps_stats.recent[i])[0]) {
                        $('[data-entry="map-stats-recent"]').text((maps_stats.recent[i])[1])
                        matched_recent = true
                    }
                }
            }
            if (!matched_total) $('[data-entry="map-stats-total"]').text("0")
            if (!matched_unique) $('[data-entry="map-stats-unique"]').text("0")
            if (!matched_recent) $('[data-entry="map-stats-recent"]').text("0")
        } else {
            $('.map-download-stats').hide()
        }
    }
    
    // populate sponsor
    if (sponsor && sponsor in maps_commons.sponsors) {
        $('[data-entry="sponsor-name"]').text(maps_commons.sponsors[sponsor].name);
        $('[data-entry="sponsor-description"]').html(maps_commons.sponsors[sponsor].description);
        $('[data-entry="sponsor-image"]').attr('src', maps_commons.sponsors[sponsor].logo);
        $('[data-body="sponsor"]').show();
    } else {
        $('[data-body="sponsor"]').hide();
    }
}

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
            license_data = licenses.unlicensed;
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
        updateUserRates();
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
    $('.modal.show').modal('hide');
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
                    "<div class='col-lg-4 img-thumbnail map-thumbnail small collapse-immune'>\
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
        maps_stats.total = total.responseJSON.rows;
    });
    total.fail(function() {
        console.warn('Failed to retrieve "Global lifetime downloads" query from Google Analytics superProxy application.');
        return;
    });
}

function fetchUniqueDownloads() {
    var unique = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgNrjhgoM&format=jsonp', function(data){return data});
    unique.done(function() {
        maps_stats.unique = unique.responseJSON.rows;
    });
    unique.fail(function() {
        console.warn('Failed to retrieve "Global unique downloads" query from Google Analytics superProxy application.');
        return;
    });
}

function fetchRecentDownloads() {
    var recent = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgPjChAoM&format=jsonp', function(data){return data});
    recent.done(function() {
        maps_stats.recent = recent.responseJSON.rows;
    });
    recent.fail(function() {
        console.warn('Failed to retrieve "Global downloads (30 days)" query from Google Analytics superProxy application.');
        return;
    });
}
