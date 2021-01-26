/**
 * GitHub OAuth
 */

$(function() {
    var url = "https://mcresourcepile-auth.herokuapp.com"
    var client_id = "da313f2b7ca18563b216"
    var user_code = getUrlParam("code")

    if (user_code) {
        var call = $.getJSON(url + "/" + client_id + "/" + user_code)
            .done(function(data) {
                user.setToken(data.access_token)
                user.fetchUserInfo(function(info) {
                    user.setRates(info)
                    user.save()
                    user.fetchRates(function(rates) {
                        user.setRates(rates)
                        user.save()
                        window.location.replace("https://mcresourcepile.github.io/preferences")
                    }, function () {
                       $(".splash-subheader").text("Bad Request: Unable to fetch user rate limits.")
                    })
                }, function () {
                   $(".splash-subheader").text("Bad Request: Unable to fetch user info.")
                })  
            })
            .fail(function(data) {
                $(".splash-subheader").text(data.error + ": " + data.message)
            })
    } else {
        window.location.replace("https://mcresourcepile.github.io/admin/preferences")
    }
})