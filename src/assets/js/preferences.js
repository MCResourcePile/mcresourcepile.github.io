/***
 * JS functions and variables which handle user preferences.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

var current_token = Cookies.get('rp_user_token');

$(document).ready(function(){
    if (current_token) {
        $('#access_token').val(current_token);
        $('#auth-well').addClass('well-custom-green');
        $('.auth-group-1').show();
        user = (function() {
            user = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'https://api.github.com/user?access_token=' + current_token,
                'dataType': "json",
                'success': function(data) {
                    user = data;
                }
            });
            return user;
        })();
        $('#user_user_name').text(user.login);
        ratelimit = (function() {
            ratelimit = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'https://api.github.com/rate_limit?access_token=' + current_token,
                'dataType': "json",
                'success': function(data) {
                    ratelimit = data;
                }
            });
            return ratelimit;
        })();
        $('#user_rate_remaining').text(ratelimit.rate.remaining);
        $('#user_rate_limit').text(ratelimit.rate.limit);
        $('#user_rate_approximate').text(Math.round(ratelimit.rate.remaining / 7));
    } else {
        $('.auth-group-2').show();
    }
    if (selected_theme == 'default') {
        $("#site-select-theme").val('default');
    } else {
        $("#site-select-theme").val('dark');
    }
    if (hide_map_images == true) {
        $("#site-select-map-images").val('true');
    } else {
        $("#site-select-map-images").val('false');
    }
})

function revokeToken() {
    if (current_token) {
        if (confirm("Are you sure you want to revoke your access token?") == true) {
            Cookies.remove('rp_user_token');
            $("#token-revoked").show().delay(5000).fadeOut();
            $('#access_token').val('');
            $('#auth-well').removeClass('well-custom-green');
            $('.auth-group-1').hide();
            $('.auth-group-2').show();
            $('.auth-enabled').hide();
            $('.auth-disabled').show();
        } else {
            return false;
        }
    }
}

function saveToken() {
    var token_input = $('#access_token').val();
    response = (function() {
        response = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://api.github.com/rate_limit?access_token=' + token_input,
            'dataType': "json",
            'success': function(data) {
                response = data;
            }
        });
        return response;
    })();
    if (token_input == '') {
        $("#token-no-input").show().delay(5000).fadeOut();
    } else if (token_input && response !== null) {
        Cookies.set('rp_user_token', token_input, {
            expires: 365
        });
        $("#token-save-success").show().delay(5000).fadeOut();
        $('#auth-well').addClass('well-custom-green');
        $('.auth-group-1').show();
        $('.auth-group-2').hide();
        $('.auth-enabled').show();
        $('.auth-disabled').hide();
    } else {
        $("#token-bad-credentials").show().delay(5000).fadeOut();
    }
}

var selected_theme = Cookies.get('rp_user_theme');
var hide_map_images = Cookies.get('rp_map_images?');

function savePreferences() {
    $("#site-preferences-updated").show().delay(5000).fadeOut();
    var optionTheme = $('#site-select-theme :selected').text();
    var optionMapImages = $('#site-select-map-images :selected').text();
    // Update user's chosen theme
    if (optionTheme == 'Default') {
        Cookies.set('rp_user_theme', 'default', { expires: 365 });
        $('head').find('link').filter(function(){
            return $(this).attr('href') === '/assets/css/dark.css'
        }).remove();
    } else {
        Cookies.set('rp_user_theme', 'dark', { expires: 365 });
        $('head').append('<link href="/assets/css/dark.css" rel="stylesheet">');
    }
    // Update preference to load map.png images
    if (optionMapImages == 'Yes') {
        Cookies.set('rp_map_images?', 'true', { expires: 365 });
    } else {
        Cookies.set('rp_map_images?', 'false', { expires: 365 });
    }
}

if (selected_theme == 'dark') {
    $('head').append('<link href="/assets/css/dark.css" rel="stylesheet">');
}
