var maps;
var filters = [];
var url;

$(document).ready(function(){
    if ($('#slider').length != 0)
        $('#slider').slider({tooltip_split: true});
    countResults();
    url = new Url;
    parseUrl();
});
    
function searchRequests() {
    // update search when user typs
    $('#search').on('input', function(e){
        maps.search($('#search').val());
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
    if ($('#slider').length != 0) {
        $('#slider').slider().change(function() {
            filterMaps();
        });
    }
    
    // update stats counter
    maps.on('updated', function() {
        countResults();
        scrollToTop();
    });
    
    // search on clickable item
    $('.click-search').click(function() {
        query = $(this).data('query');
        $('#search').val(query);
        forceUpdateSearch();
    });
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
        maps.filter(function(item) {
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
        maps.filter();
        maps.update();
    }
}

function countResults() {
    total = maps.items.length;
    visible = maps.matchingItems.length;
    if (visible > 0) {
        string = "Showing " + visible + " matching maps out of " + total;
    } else if (visible == 0) {
        string = "No maps match your query or filter";
    } else {
        string = "There are no maps to display";
    }
    $('#records-count').text(string);
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
    window.history.pushState( {} , document.title, string);
}

function parseUrl() {
    $('#search').val(url.query.s);
    var urlFilters = url.query.f;
    if (urlFilters) {
        urlFilters = urlFilters.split(',');
        for (i = 0; i < urlFilters.length; i++) {
            $('.filter:contains("' + urlFilters[i] + '")').filter(function() {
                return $(this).text() == urlFilters[i];
            }).addClass('active');
            filters.push(urlFilters[i]);
        }
        filterMaps();
        forceUpdateSearch();
    }
}

function forceUpdateSearch() {
    maps.search($('#search').val());
    updateUrl();
    countResults();
}

function scrollToTop() {
    $("body, html").animate({
        scrollTop: $('#searchable-collection').position().top - 90
    });
}
