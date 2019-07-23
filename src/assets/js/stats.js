$(function() {
    var searchable = new List('searchable-collection', {
        valueNames: ['bow-map', 'tags', 'users', 'uuids', 'distances']
    });
    var searchable_type = "records";
    setupSearch(searchable, searchable_type);

    // load more records for map
    $('.bow-records-more').click(function() {
        expanded = $(this).data('expanded');
        count = $(this).parent().children().length - 4;
        if (expanded == false) {
            $(this).data('expanded', true);
            $(this).text('Show less');
            $(this).parent().find('.extended-record').removeClass('hidden');
        } else {
            $(this).data('expanded', false);
            $(this).text('Show ' + count + ' more');
            $(this).parent().find('.extended-record').addClass('hidden');
        }
    });
    
    // unmute records whenever the search is run
    maps.on('searchStart', function() {
        $('.bow-user-record.bow-record-mute').removeClass('bow-record-mute');
    });

    // mute other player records on click search
    $('.bow-player').click(function() {
        var uuid = $(this).data('query');
        $('.bow-user-record').not('[data-user-uuid="' + uuid + '"]').addClass('bow-record-mute');
    });
});
