/***
 * JS functions and variables which handle user preferences.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

var current_token = Cookies.get('rp_user_token');
// Remove &scope=... from access tokens to prevent
// GitZip from throwing errors (fix existing saves)
if (current_token.length > 40) {
    current_token = current_token.split('&')[0];
    Cookies.set('rp_user_token', current_token, { expires: 365 });
var selected_theme = Cookies.get('rp_user_theme');
var hide_map_images = Cookies.get('rp_map_images?');

if (selected_theme == 'dark') {
    $('head').append('<link href='/assets/css/dark.css' rel='stylesheet'>');
}

$(document).ready(function(){
    updateUserInfo();
    current_token?($("#access_token").val(current_token),$("#auth-well").addClass("well-custom-green"),
    $(".auth-group-1").show()):$(".auth-group-2").show(),"dark"==selected_theme?
    $("#site-select-theme").val("dark"):$("#site-select-theme").val("default"),"true"==hide_map_images?
    $("#site-select-map-images").val("hide"):$("#site-select-map-images").val("show");
})

function updateUserInfo() {
    user = (function() {
        user = null;
        $.ajax({'async': false, 'global': false, 'url': 'https://api.github.com/user?access_token=' + current_token, 'dataType': 'json', 'success': function(data) {
                user = data;
            }
        });
        return user;
    })();
    $('#user_user_name').text(user.login);
    ratelimit = (function() {
        ratelimit = null;
        $.ajax({'async': false, 'global': false, 'url': 'https://api.github.com/rate_limit?access_token=' + current_token, 'dataType': 'json', 'success': function(data) {
                ratelimit = data;
            }
        });
        return ratelimit;
    })();
    $('#user_rate_remaining').text(ratelimit.rate.remaining);
    $('#user_rate_limit').text(ratelimit.rate.limit);
    $('#user_rate_approximate').text(Math.round(ratelimit.rate.remaining / 7));
}

function revokeToken() {
    if (current_token && confirm('Are you sure you want to revoke your access token?') == true) {
        Cookies.remove('rp_user_token');
        $('#prf-alert-token').show().text('Access token has been revoked').addClass('alert-success').delay(5000).fadeOut().removeClass('alert-success');
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

function saveToken() {
    var token_input = $('#access_token').val();
    // Remove &scope=... from access tokens to prevent
    // GitZip from throwing errors
    if (token_input.length > 40) {
        token_input = token_input.split('&')[0];
        $('#access_token').val(token_input);
    }
    response = (function() {
        response = null;
        $.ajax({'async': false, 'global': false, 'url': 'https://api.github.com/rate_limit?access_token=' + token_input, 'dataType': 'json', 'success': function(data) {
                response = data;
            }
        });
        return response;
    })();
    if (token_input.length < 40) {
        $('#prf-alert-token').show().text('Please enter a valid access token').addClass('alert-danger').delay(5000).fadeOut().removeClass('alert-danger');
    } else if (token_input && response !== null) {
        Cookies.set('rp_user_token', token_input, {
            expires: 365
        });
        updateUserInfo();
        $('#prf-alert-token').show().text('Access token successfully saved').addClass('alert-success').delay(5000).fadeOut().removeClass('alert-success');
        $('#auth-well').addClass('well-custom-green');
        $('.auth-group-1').show();
        $('.auth-group-2').hide();
        $('.auth-enabled').show();
        $('.auth-disabled').hide();
    } else {
        $('#prf-alert-token').show().text('Access token unable to be saved - bad credentials').addClass('alert-danger').delay(5000).fadeOut().removeClass('alert-danger');
    }
}

function savePreferences() {
    $('#prf-alert-site').show().text('Site preferences successfully updated').addClass('alert-success').delay(5000).fadeOut().removeClass('alert-success');
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
        $('head').append('<link href='/assets/css/dark.css' rel='stylesheet'>');
    }
    // Update preference to load map.png images
    if (optionMapImages == 'No') {
        Cookies.set('rp_map_images?', 'true', { expires: 365 });
    } else {
        Cookies.set('rp_map_images?', 'false', { expires: 365 });
    }
}
