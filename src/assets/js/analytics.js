/***
 * Providing analytical data from our Google Analytics
 * tracker to the user through Google Analytics superProxy.
 */

function fetchGlobalDownloads() {
    result = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgICAgAoM&format=jsonp', function(data){return data});
    result.done(function() {
        stats = result.responseJSON.rows;
        output(stats);
        for (var i = 0; i < stats.length; i++) {
            $('.downloads-total[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    result.fail(function() {
        output('Failed to retrieve "Global lifetime downloads" query from Google Analytics superProxy application.', 2);
        return;
    });
}

function fetchUniqueDownloads() {
    result1 = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgNrjhgoM&format=jsonp', function(data){return data});
    result1.done(function() {
        stats = result1.responseJSON.rows;
        output(stats);
        for (var i = 0; i < stats.length; i++) {
            $('.downloads-unique[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    result1.fail(function() {
        output('Failed to retrieve "Global unique downloads" query from Google Analytics superProxy application.', 2);
        return;
    });
}

function fetchRecentDownloads() {
    result2 = $.getJSON('https://project-id-0482060302718727966.appspot.com/query?id=aiBzfnByb2plY3QtaWQtMDQ4MjA2MDMwMjcxODcyNzk2NnIVCxIIQXBpUXVlcnkYgICAgPjChAoM&format=jsonp', function(data){return data});
    result2.done(function() {
        stats = result2.responseJSON.rows;
        output(stats);
        for (var i = 0; i < stats.length; i++) {
            $('.downloads-recent[data-map="' + (stats[i])[0].replace(/\'/g, '-') + '"]').text((stats[i])[1]);
        }
    });
    result2.fail(function() {
        output('Failed to retrieve "	Global downloads (30 days)" query from Google Analytics superProxy application.', 2);
        return;
    });
}
