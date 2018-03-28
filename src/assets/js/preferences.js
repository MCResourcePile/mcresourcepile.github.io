/***
 * JS functions and variables which handle user preferences.
 * As this is used by all pages, be careful what is put
 * into this file.
 */

var user_settings = Cookies.getJSON('user_settings');
var user_info = Cookies.getJSON('user_info');

const default_settings = {token: "", theme: "default", hide_images: true, automatic_downloads: false, synced: false};
const default_info = {username: "User", avatar: "https://avatars0.githubusercontent.com/u/24795789?v=4", rate: {limit: 0, remaining: 0, reset: 0}};

function applySettings() {
    if (user_settings) {
        // apply dark theme
        if (user_settings.theme == 'dark') {
            $('head').append('<link href=\'/assets/css/dark.css\' rel=\'stylesheet\'>');
        }
        // collapse map thumbnails, otherwise lazy load images
        if (user_settings.hide_images == true) {
            $('.lazy').css({'height': '60px'});
            $('.map-banner').css({'height': '60px'});
            $('.map-labels').css({'top': '-21px', 'padding-left': '4px'});
            $('.map-button').addClass('map-button-sm');
            $('.click-image').show();
        } else {
            var myLazyLoad = new LazyLoad({
                elements_selector: '.lazy',
                threshold: 50
            });
        }
        output('Applied user settings to this page.');
    }
}

function loadSettings() {
    if (user_settings && user_info != "undefined") {
        if (user_settings.token) {
            $('#access_token').val(user_settings.token);
            $('#auth-well').addClass('well-custom-green');
        }
        $('#site-select-theme').val(user_settings.theme);
        $('#site-select-map-images').val(user_settings.hide_images);
        $('#site-select-auto-dl').val(user_settings.automatic_downloads);
        output('Successfully loaded user preferences.');
    } else {
        user_settings = default_settings;
        output('Applying default settings to "user_settings" as it does not exist.');
        saveSettings();
    }
    if (user_info && user_info != "undefined") {
        if (user_settings.token) {
            displayUserInfo();
            // auth panels in preferences
            $('.prf-token-unauth-panel').hide();
            $('.prf-token-auth-panel').show();
            // auth notifier in navigation
            $('.auth-enabled').show();
            $('.auth-disabled').hide();
            output('Successfully loaded user information.');
        }
    } else {
        user_info = default_info;
        output('Applying default information to "user_info" as it does not exist.');
        saveSettings();
    }
}

function saveSettings() {
    Cookies.set('user_settings', user_settings, {expires: 365});
    Cookies.set('user_info', user_info, {expires: 365});
    output('Saved user settings and user information.');
}

function syncSettings(callback) {
    if (user_settings.synced == false) {
        user_settings.token = Cookies.get('rp_user_token');
        user_settings.theme = Cookies.get('rp_user_theme');
        user_settings.hide_images = Cookies.get('rp_map_images?');
        user_settings.automatic_downloads = false;
        Cookies.remove('rp_user_token');
        Cookies.remove('rp_user_theme');
        Cookies.remove('rp_map_images?');
        updateUserInfo(function () {
            updateRateLimit(function () {
                user_settings.synced = true;
                saveSettings();
                output('Old settings have been synced with new format -- old information has been deleted.');
                callback();
            });
        });
    } else {
        output('Settings already saved in new format.', 1);
    }
}

function updateUserInfo(callback) {
    if (user_settings.token) {
        user = $.getJSON('https://api.github.com/user?access_token=' + user_settings.token, function(data){return data});
        user.done(function() {
            user_info.username = user.responseJSON.login;
            user_info.avatar = user.responseJSON.avatar_url;
            output('Updated user information.');
            if (callback) {
                callback();
            }
        });
        user.fail(function() {
            output('Failed to retrieve user information.', 2);
            return;
        });
    } else {
        output('No access token -- skipping user information request', 1);
        if (callback) {
            callback();
        }
    }
}

function updateRateLimit(callback) {
    if (user_settings.token) {
        ratelimit = $.getJSON('https://api.github.com/rate_limit?access_token=' + user_settings.token, function(data){return data});
    } else {
        ratelimit = $.getJSON('https://api.github.com/rate_limit', function(data){return data});
    }
    ratelimit.done(function() {
        user_info.rate.limit = ratelimit.responseJSON.rate.limit;
        user_info.rate.remaining = ratelimit.responseJSON.rate.remaining;
        user_info.rate.reset = ratelimit.responseJSON.rate.reset;
        output('Update user rate limit information.');
        if (callback) {
            callback();
        }
    });
    ratelimit.fail(function() {
        output('Failed to retrieve user rate limit information.', 2);
        return;
    });
}

function displayUserInfo() {
    // navigation user login
    $('.user-name').text(user_info.username);
    $('.user-avatar').attr('src', user_info.avatar);
    // token info display
    $('#user_user_name').text(user_info.username);
    $('#user_rate_remaining').text(user_info.rate.remaining);
    $('#user_rate_limit').text(user_info.rate.limit);
    $('#user_rate_approximate').text(Math.round(user_info.rate.remaining / 7));
    $('#user_rate_reset').text(moment.unix(user_info.rate.reset).fromNow());
    output('Updated display with user information.');
}

function saveToken() {
    $('#token-save-button').text('Saving...').addClass('disabled');
    var token_input = $('#access_token').val().replace(/\s/g,'');
    if (token_input.length > 40) {
        token_input = token_input.split('&')[0].replace('access_token=','').replace(/\s/g,'');
        $('#access_token').val(token_input);
        output('Token too long; attempting to trim excess.', 1);
    }
    if (token_input.length < 40) {
        $('#prf-alert-token-missing').show().delay(5000).fadeOut();
        output('Invalid or no token provided.', 2);
        $('#token-save-button').text('Save').removeClass('disabled');
        return;
    }
    output('Checking if token is valid: ' + token_input);
    response = $.getJSON('https://api.github.com/user?access_token=' + token_input, function(data){return data});
    response.done(function() {
        output('Token valid! Updating user information.');
        user_settings.token = token_input;
        updateUserInfo(function () {
            updateRateLimit(function () {
                displayUserInfo();
                saveSettings();
                $('#prf-alert-token-saved').show().delay(5000).fadeOut();
                $('#auth-well').addClass('well-custom-green');
                // auth panels in preferences
                $('.prf-token-auth-panel').show();
                $('.prf-token-unauth-panel').hide();
                // auth notifier in navigation
                $('.auth-enabled').show();
                $('.auth-disabled').hide();
                $('#token-save-button').text('Save').removeClass('disabled');
            });
        });
    });
    response.fail(function() {
        output('Token is not valid and saving has been aborted.', 2);
        $('#prf-alert-token-invalid').show().delay(5000).fadeOut();
        $('#token-save-button').text('Save').removeClass('disabled');
    });
}

function revokeToken() {
    if (user_settings.token && confirm('Are you sure you want to revoke your access token?')) {
        output('Current token has been removed.', 1);
        $('#prf-alert-token-revoked').show().delay(5000).fadeOut();
        $('#access_token').val('');
        $('#auth-well').removeClass('well-custom-green');
        // auth panels in preferences
        $('.prf-token-auth-panel').hide();
        $('.prf-token-unauth-panel').show();
        // auth notifier in navigation
        $('.auth-enabled').hide();
        $('.auth-disabled').show();
        user_settings.token = '';
        saveSettings();
    }
}

function savePreferences() {
    user_settings.theme = $('#site-select-theme :selected').val();
    user_settings.hide_images = $('#site-select-map-images :selected').val();
    user_settings.automatic_downloads = $('#site-select-auto-dl :selected').val();
    if (user_settings.theme == 'dark') {
        $('head').append('<link href=\'/assets/css/dark.css\' rel=\'stylesheet\'>');
    } else {
        $('head').find('link').filter(function(){
            return $(this).attr('href') === '/assets/css/dark.css'
        }).remove();
    }
    output('User preferences have been updated. Waiting for save.');
    saveSettings();
    $('#prf-alert-site-saved').show().delay(5000).fadeOut();
}
