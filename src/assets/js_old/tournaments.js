/***
 * Common JS functions and variables which all stat pages use.
 * Anything that is unique to a stat page or can't be used by 
 * any other of the pages must be left in that document instead
 * of being put here.
 */
 
$(document).ready(function(){
    searchable_name = "tournaments";

    // create new searchable list
    maps = new List('searchable-collection', {
        valueNames: ['tm-name', 'tags']
    });
    
    // update position of side toolbar as user scrolls
    var $sidebar   = $(".map-search"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 100;
    $window.scroll(function() {
        var container  = $('#searchable-collection').position().top + $('#searchable-collection').outerHeight(true) - 356;
        if ($window.scrollTop() - offset.top + $sidebar.height() < container && $window.width() >= 992) {
            if ($window.scrollTop() > offset.top) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                });
            }
        }
    });

    searchRequests();

});
