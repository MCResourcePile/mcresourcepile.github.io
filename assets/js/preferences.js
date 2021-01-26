/**
 * Preferences
 */

$(function() {
    // setup preferences page
    if (current_path == '/preferences') {
        loadUserPreferenceOptions();
        $('#user-save-preferences').click(saveUserPreferences);  
        $('#user-reset-preferences').click(resetUserPreferences);  
        $('#user-generate-access-token').click(generateUserToken);  
        $('#user-reset-access-token').click(resetUserToken);  
    }
});

function applyUserPreferences() {
    // apply dark theme
    if (user._preferences.theme == 'automatic') {
        // check if prefers-color-scheme is supported
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            var darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            // set either dark or light depending the color scheme
            function setTheme(e) {
                if (e.matches) {
                    $('html').attr('data-theme', 'dark');
                    $('meta[name="theme-color"]').attr('content', '#3d3d3d');
                } else {
                    $('html').attr('data-theme', 'light');
                    $('meta[name="theme-color"]').attr('content', '#f8f9fa');
                }
            }
            // change theme automatically
            darkMediaQuery.addListener(setTheme);
            // set the correct theme when page loads
            document.addEventListener("DOMContentLoaded", function() {
                setTheme(darkMediaQuery);
            });
        // if not, default to light
        } else {
            $('html').attr('data-theme', 'light');
            $('meta[name="theme-color"]').attr('content', '#f8f9fa');
        }
    } else if (user._preferences.theme == 'dark') {
        $('html').attr('data-theme', 'dark');
        $('meta[name="theme-color"]').attr('content', '#3d3d3d');
    // default light
    } else {
        $('html').attr('data-theme', 'light');
        $('meta[name="theme-color"]').attr('content', '#f8f9fa');
    }
    // load lazy loadable images
    if (user._preferences.show_map_images) {
        var myLazyLoad = new LazyLoad({
            elements_selector: '.lazy',
            threshold: 50,
            callback_error: function(element) {
                $(element).attr('src', '/assets/img/404.png');
            },
        });
    } else {
        // if map images are disabled, collapse hidden map images
        $('.map-thumbnail:not(.collapse-immune)').css({'height': 'auto'});
        $('.map-thumbnail:not(.collapse-immune) .image').css({'visbility': 'hidden', 'height': '60px'});
        $('.map-thumbnail:not(.collapse-immune) .banner').css({'height': '60px'});
        $('.map-thumbnail:not(.collapse-immune) .labels').css({'top': '45', 'left': '8'});
        $('.map-thumbnail:not(.collapse-immune) .map-results-label').css({'font-size': '16px', 'margin-top': '-8px'});
    }
}

function loadUserPreferenceOptions() {
    // api token
    $('#user-access-token').val(user._token);
    if (user._token) {
        $(".border-danger").addClass("border-success").removeClass("border-danger");
        $(".text-danger").addClass("text-success").removeClass("text-danger");
        $("#user-generate-access-token").hide();
        $("#user-reset-access-token").show();
    } else {
        $(".border-success").addClass("border-danger").removeClass("border-success");
        $(".text-success").addClass("text-danger").removeClass("text-success");
        $("#user-generate-access-token").show();
        $("#user-reset-access-token").hide();
    }
    displayRates();
    // site preferences
    var preferences = user._preferences;
    $('.preference').each(function() {
        var type = $(this).attr('name');
        var val = preferences[type];
        if (typeof val !== 'undefined') {
            if (typeof val == 'boolean') {
                val = val.toString();
            }
            $(this).val(val);
        }
    });
}

function saveUserPreferences() {
    var preferences = {};
    $('.preference').each(function() {
        var type = $(this).attr('name');
        var val = $(this).find('option:selected').val();
        // convert string boolean to boolean type
        if (val == 'true' || val == 'false') {
            val = (val == 'true');
        }
        preferences[type] = val;
    });
    if (user.setPreferences(preferences)) {
        sendAlert('Successfully updates your site preferences!', 'alert-success');
        saveUser();
        applyUserPreferences();
        if (user._preferences.theme == 'automatic') {
            if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    $('html').attr('data-theme', 'dark');
                    $('meta[name="theme-color"]').attr('content', '#3d3d3d');
                } else {
                    $('html').attr('data-theme', 'light');
                    $('meta[name="theme-color"]').attr('content', '#f8f9fa');
                }
            } else {
                $('html').attr('data-theme', 'light');
                $('meta[name="theme-color"]').attr('content', '#f8f9fa');
            }
        }
    } else {
        sendAlert('Unable to update your site preferences. Please try again.', 'alert-danger');
    }
}

function resetUserPreferences() {
    if (confirm('Are you sure you want to reset your preferences?')) {
        if (user.resetPreferences()) {
            sendAlert('Your site preferences have been reset.', 'alert-success');
            saveUser();
            loadUserPreferenceOptions();
        } else {
            sendAlert('Unable to reset your site preferences. Please try again.', 'alert-danger');
        }
    }
}

function generateUserToken() {
    window.location.replace("https://github.com/login/oauth/authorize?client_id=da313f2b7ca18563b216")
}

function resetUserToken() {
    if (confirm('Are you sure you want to remove your access token?')) {
        if (user.resetToken()) {
            sendAlert('Your access token has been removed.', 'alert-success');
            saveUser();
            updateUserRates();
            loadUserPreferenceOptions();
            $(".border-success").addClass("border-danger").removeClass("border-success");
            $(".text-success").addClass("text-danger").removeClass("text-success");
            $("#user-generate-access-token").show();
            $("#user-reset-access-token").hide();
        } else {
            sendAlert('Unable to remove your access token. Please try again.', 'alert-danger');
        }
    }
}

function updateUserInfo() {
    user.fetchUserInfo(function(data) {
        if (user.setUserInfo(data)) {
            saveUser();
        } else {
            // fail, do nothing
        }
    }, function () {
       // fail, do nothing
    });
}

function updateUserRates() {
    user.fetchRates(function(data) {
        if (user.setRates(data)) {
            saveUser();
        } else {
            // fail, do nothing
        }
    }, function () {
       // fail, do nothing
    });
}

function saveUser() {
    if (user.save()) {
        displayUserInfo();
        displayRates();
    } else {
        sendAlert('Something went wrong when saving your User. Please view the console for more details.', 'alert-warning');
    }
}

function sendAlert(message, style = 'alert-info') {
    $('#user-alert').text(message);
    $('#user-alert').attr('class', 'alert ' + style);
    $('#user-alert-wrapper').show().delay(5000).fadeOut();
}
