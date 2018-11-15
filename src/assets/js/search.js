var maps;
var slider;
var filters = [];

function searchRequests() {
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
    
    // update search when user typs
    $("#search").change(function() {
        maps.search($('#search').val())
    });
}

function filterMaps() {
    if (filters.length > 0) {
        maps.filter(function(item) {
            string = item.values().tags;
            tags = string.split(',');
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
                return true;
            } else {
                return false;
            }
        });
    } else {
        maps.filter();
        maps.update();
    }
}
