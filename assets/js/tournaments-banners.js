$(function() {
    var searchable = new List('searchable-collection', {
        valueNames: ['tm-name', 'tags']
    });
    var searchable_type = "tournaments";
    setupSearch(searchable, searchable_type);

    
    $('#display-banners').click(function() {
        if (!$(this).hasClass('disabled')) {
            if ($(this).hasClass('active')) {
                $('.list').addClass('no-banners');
                $(this).removeClass('active');
                $('#display-text').addClass('disabled');
            } else {
                $('.list').removeClass('no-banners');
                $(this).addClass('active');
                $('#display-text').removeClass('disabled');
            }
        }
    });

    $('#display-text').click(function() {
        if (!$(this).hasClass('disabled')) {
            if ($(this).hasClass('active')) {
                $('.list').addClass('no-text');
                $(this).removeClass('active');
                $('#display-banners').addClass('disabled');
            } else {
                $('.list').removeClass('no-text');
                $(this).addClass('active');
                $('#display-banners').removeClass('disabled');
            }
        }
    });

    if (user._preferences.tm_banners_display == "only-text") {
        $('#display-banners').removeClass('active');
        $('#display-text').addClass('disabled');
        $('.list').addClass('no-banners');
    } else if (user._preferences.tm_banners_display == "only-banners") {
        $('#display-text').removeClass('active');
        $('#display-banners').addClass('disabled');
        $('.list').addClass('no-text');
    }

    var lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    });
});