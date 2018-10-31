is_maps_collection = true;
var maps;
var filters = [];

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
                        console.log(tags[j] + ' matched ' + filters[i]);
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

$(document).ready(function(){
    var options = {
        valueNames: [
            'title', 'map-tag', 'label', 'tags',
            'author-tag', 'tag_hidden', 'searchable'
        ]
    };
    maps = new List('maps-collection', options);
    
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
    });
});
