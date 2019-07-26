var searchable;
var searchable_type = "items";
var filters = [];

$(function() {
    // handle top position of search controls
    var nav = $('.nav').height();
    var wrapper_top = $('#searchable-collection').position().top;
    var wrapper_height = $('#searchable-collection').height() + 98;
    $(document).scroll(function() {
        var scroll_position = $(document).scrollTop();
        var panel_top = $('.map-search').position().top;
        var panel_bottom = $('.map-search').height() + scroll_position;
        if (scroll_position + nav > wrapper_top) {
            if (panel_bottom < wrapper_height) {
                $('.map-search').css('top', nav + 15);
            } else {
                $('.map-search').css('top', nav - (panel_bottom - wrapper_height));
            }
        } else {
            $('.map-search').css('top', wrapper_top - scroll_position);
        }
    });
    
    // update search when user types
    $('#search').on('input', function(e){
        searchable.search($('#search').val());
        updateUrl();
    });
    
    // handle user filters
    $('.filter').click(function() {
        filter = $(this).text();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            filters = filters.filter(function(f){
                return f != filter;
            });
        } else {
            $(this).addClass('active');
            filters.push(filter);
        }
        filterMaps();
        updateUrl();
    });
    
    // handle slider
    if ($('#slider').length) {
        $('#slider').slider().change(function() {
            filterMaps();
        });
    }
    
    // update stats counter
    searchable.on('updated', function() {
        countMatching();
        scrollToTop();
    });
    
    // search on clickable item
    $('.click-search').click(function() {
        query = $(this).data('query');
        $('#search').val(query);
        updateSearch();
    });
});

function setupSearch(config, type) {
    searchable = config;
    searchable_type = type;
    if ($('#slider').length) {
        $('#slider').slider({tooltip_split: true});
    }
    countMatching();
    parseUrl();
}

function filterMaps() {
    var range = false;
    if ($('#slider').length != 0) {
        range = $('#slider').slider().context.value;
        range = range.split(',');
        range[0] = parseInt(range[0]);
        range[1] = parseInt(range[1]);
    }
    if (filters.length > 0 || range) {
        searchable.filter(function(item) {
            tags = item.values().tags;
            tags = tags.split(',');
            if ($.inArray('Destroy the Core and Monument', tags) != -1) {
                tags.push('Destroy the Core');
                tags.push('Destroy the Monument');
            }
            count = 0;
            for (i = 0; i < filters.length; i++) {
                for (j = 0; j < tags.length; j++) {
                    if (tags[j] == filters[i]) {
                        count++;
                    }
                }
            }
            if (count == filters.length) {
                if ($('#slider').length != 0) {
                    distances = item.values().distances;
                    distances = distances.split(',');
                    matched = false;
                    for (var i = 0; i < distances.length; i++) {
                        if (range[0] <= distances[i] && range[1] >= distances[i]) {
                            matched = true;
                            return true;
                        }
                    }
                    if (matched != true) return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        });
    } else {
        searchable.filter();
        searchable.update();
    }
}

function countMatching() {
    var total = searchable.items.length;
    var match = searchable.matchingItems.length;
    var output;
    if (match > 0) {
        output = "Showing " + match + " matching " + searchable_type + " out of " + total;
    } else if (match == 0) {
        output = "No " + searchable_type + " match your query or filter";
    } else {
        output = "There are no " + searchable_type + " to display";
    }
    $('#searchable-count').text(output);
}

function updateUrl() {
    var string = "?";
    var search = $('#search').val()
    var filterArr = encodeURIComponent(filters);
    if (search || filters.length > 0) {
        if (search) {
            string += "s=" + search;
        }
        if (filters.length > 0) {
            if (search) string += "&";
            string += "f=" + filterArr;
        }
    }
    window.history.replaceState( {} , document.title, string);
}

function parseUrl() {
    $('#search').val(getUrlParam('s'));
    var searchInput = getUrlParam('s');
    var urlFilters = getUrlParam('f');
    if (urlFilters || searchInput) {
        if (urlFilters) {
            urlFilters = urlFilters.split(',');
            for (i = 0; i < urlFilters.length; i++) {
                $('.filter:contains("' + urlFilters[i] + '")').filter(function() {
                    return $(this).text() == urlFilters[i];
                }).addClass('active');
                filters.push(urlFilters[i]);
            }
        }
        filterMaps();
        updateSearch();
    }
}

function updateSearch() {
    var search = $('#search').val();
    searchable.search(search);
    updateUrl();
    countMatching();
}

function scrollToTop() {
    $("body, html").stop(true).animate({
        scrollTop: $('#searchable-collection').position().top - 90
    });
}
