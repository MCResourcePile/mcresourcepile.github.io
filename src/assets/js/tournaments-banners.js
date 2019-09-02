$(function() {
    var searchable = new List('searchable-collection', {
        valueNames: ['tm-name', 'tags']
    });
    var searchable_type = "tournaments";
    setupSearch(searchable, searchable_type);

    $('span#display-banners').click(function() {
        if ($(this).hasClass('active')) {
            $('.list').addClass('no-banners');
            $(this).removeClass('active');
        } else {
            $('.list').removeClass('no-banners');
            $(this).addClass('active');
        }
    });

    if (user._preferences.show_tm_banners == false) {
        $('span#display-banners').removeClass('active');
        $('.list').addClass('no-banners');
    }

    var myLazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    });
});