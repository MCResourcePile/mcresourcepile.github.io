/**
 * Preferences
 */

$(document).ready(function() {
    loadUserPreferenceOptions();

    $('#user-save-preferences').click(saveUserPreferences);  
    $('#user-reset-preferences').click(resetUserPreferences);  
    $('#user-save-access-token').click(saveUserToken);  
    $('#user-reset-access-token').click(resetUserToken);  
});

function applyUserPreferences() {
    // do stuff
}

function loadUserPreferenceOptions() {
    // api token
    $('#user-access-token').val(user._token);
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

function saveUserToken() {
    var token = $('#user-access-token').val();
    sendAlert('Verifing access token. Please wait.', 'alert-info');
    if (user.verifyToken(token, function() {
        if(user.setToken(token)) {
            sendAlert('Successfully added your token. You can now download more maps at once.', 'alert-success');
            saveUser();
            updateUserInfo();
            updateUserRates();
        } else {
            sendAlert('Unable to save token. Please view the console for more details.', 'alert-danger');
        }
    }, function () {
        sendAlert('The token you provided is not valid. Please try again.', 'alert-danger');
    })) {
        sendAlert('The token you provided is not valid. Please try again.', 'alert-danger');
    }
}

function resetUserToken() {
    if (confirm('Are you sure you want to remove your access token?')) {
        if (user.resetToken()) {
            sendAlert('Your access token has been removed.', 'alert-success');
            saveUser();
            updateUserRates();
            loadUserPreferenceOptions();
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
