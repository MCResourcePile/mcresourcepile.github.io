var maps;
var filters = [];

$(document).ready(function(){
    if ($('#slider').length != 0)
        $('#slider').slider({tooltip_split: true});
    countResults();
});
    
function searchRequests() {
    // update search when user typs
    $('#search').on('input',function(e){
        countResults();
        maps.search($('#search').val());
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
        $("body, html").animate({
            scrollTop: $('#searchable-collection').position().top - 90
        });
        filterMaps();
    });
    
    // handle slider
    if ($('#slider').length != 0) {
        $('#slider').slider().change(function() {
            filterMaps();
        });
    }
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
            tags = string.split(',');
            console.log(tags);
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
                    console.log(distances);
                    for (i = 0; i < distances.length; i++) {
                        console.log(range[0] <= distances[i]);
                        console.log(range[1] >= distances[i]);
                        if (range[0] <= distances[i] && range[1] >= distances[i]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
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
    countResults();
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
