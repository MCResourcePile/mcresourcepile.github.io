/***
 * Providing analytical data from our Google Analytics
 * tracker to the user through Google Analytics superProxy.
 */

function fetchGlobalDownloads() {
    total = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgICAgAoM&format=jsonp', function(data){return data});
    total.done(function() {
        stats = total.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-total[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    total.fail(function() {
        output('Failed to retrieve "Global lifetime downloads" query from Google Analytics superProxy application.', 2);
        return;
    });
}

function fetchUniqueDownloads() {
    unique = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgNrjhgoM&format=jsonp', function(data){return data});
    unique.done(function() {
        stats = unique.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-unique[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    unique.fail(function() {
        output('Failed to retrieve "Global unique downloads" query from Google Analytics superProxy application.', 2);
        return;
    });
}

function fetchRecentDownloads() {
    recent = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgPjChAoM&format=jsonp', function(data){return data});
    recent.done(function() {
        stats = recent.responseJSON.rows;
        for (var i = 0; i < stats.length; i++) {
            $('.stat-downloads-recent[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    recent.fail(function() {
        output('Failed to retrieve "Global downloads (30 days)" query from Google Analytics superProxy application.', 2);
        return;
    });
}

$(document).ready(function() {
    $('.map-dropdown').click(function() {
        open = $(this).find('.collapse').hasClass('in');
        output(open);
        target = $(this).find('.toggle').attr('data-toggle');
        $('#' + target).collapse('toggle');
        if (open) {
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
        } else (
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        )
    });
});