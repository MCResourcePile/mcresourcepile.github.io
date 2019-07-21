/**
 * User
 */

class User {
    constructor() {
        this._token = "";
        this._username = "Guest";
        this._avatar = "";
        this._rate = {
            limit: 0,
            remaining: 0,
            reset: 0
        };
        this._preferences = {
            theme: "default",
            show_map_stats: true,
            show_map_images: true,
            show_map_suggestions: true
        };
        // check if pre-existing User data exists
        if (this.saveExists()) {
            this.loadSave();
        }
    }

    /** 
     * Takes a GitHub access token and checks that it is valid before
     * applying it to the current User.
     *
     * @param  {string}  token The GitHub access token to parse
     * @return {boolean}       Success or fail response
     */
    parseToken(token) {
        var self = this;
        if (token.length > 40) {
            token = token.split('&')[0].replace('access_token=','').replace(/\s/g,'');
            $('.access_token').val(token);
        } else if (token.length < 40) {
            console.warn('Invalid access token');
            return false;
        }
        var api = "https://api.github.com/user?access_token=" + token;
        var req = $.getJSON(api, function(data) {return data });
        req.done(function() {
            self._token = token;
            console.log('Successfully validated User access token');
            return true;
        });
        req.fail(function() {
            console.log('Invalid access token');
            return false;
        })
    }

    /** 
     * Uses saved token to fetch basic GitHub account identity information.
     *
     * @return {boolean} Success or fail response
     */
    fetchUserInfo() {
        if (this._token) {
            var self = this;
            var api = "https://api.github.com/user?access_token=" + this._token;
            var req = $.getJSON(api, function(data) { return data });
            req.done(function() {
                var r = req.responseJSON;
                self._username = r.login;
                self._avatar = r.avatar_url;
                console.log('Successfully retrieved User identity data');
                return true;
            });
            req.fail(function() {
                console.warn('Failed to retrieve User identity data');
                return false;
            });
        } else {
            console.warn('Unable to retrieve User identity data as no token was provided');
            return false;
        }
    }

    /** 
     * Fetches the current GitHub API rate limit numbers. Uses access token
     * if one has been applied to the User.
     *
     * @return {boolean} Success or fail response
     */
    fetchRates() {
        var self = this;
        var api = "https://api.github.com/rate_limit";
        if (this._token) {
            api += "?access_token=" + this._token;
        }
        var req = $.getJSON(api, function(data) { return data });
        req.done(function() {
            var r = req.responseJSON.rate;
            var rate = {
                limit: r.limit,
                remaining: r.remaining,
                reset: r.reset
            };
            self._rate = rate;
            console.log('Successfully retrieved User rate limit data');
            return true;
        });
        req.fail(function() {
            console.warn('Failed to retrieve User rate limit data');
            return false;
        });
    }

    // TODO: move HTML interaction to preferences.js
    fetchPreferences() {
        var preferences = {};
        $('.preference').each(function(i, obj) {
            var type = $(this).data('type');
            var value = $(this).val();
            preferences[type] = value;
        });
        this._preferences = preferences;
    }

    loadPreferences() {
        try {
            var p = this._preferences;
            for (var i in p) {
                $('.preference[data-type=' + i + ']').val(p[i]);
            }
            console.log('Successfully loaded User preferences');
            return true;
        } catch (e) {
            console.log('Failed to load User preferences');
            return false;
        }
    }
    

    /** 
     * Checks if a User cookie already exists.
     *
     * @return {boolean} Yum cookie
     */
    saveExists() {
        return getCookie('user') ? true : false;
    }

    /** 
     * Saves current User data to a cookie.
     *
     * @return {boolean} Success or fail response
     */
    save() {
        try {
            var str = JSON.stringify(this);
            var b64 = btoa(str);
            setCookie('user', b64);
            console.log('Successfully saved User data');
            return true;
        } catch (e) {
            console.warn('Failed to save User data');
            return false;
        }
    }

    /** 
     * Loads User data from previously saved cookie.
     *
     * @return {boolean} Success or fail response
     */
    loadSave() {
        try {
            var b64 = getCookie('user');
            var str = atob(b64);
            var json = JSON.parse(str);
            this._token = json._token;
            this._username = json._username;
            this._avatar = json._avatar;
            this._rate = json._rate;
            this._preferences = json._preferences;
            console.log('Successfully loaded saved User data');
            return true;
        } catch (e) {
            console.warn('Failed to load save User data');
            return false;
        }
    }
}
