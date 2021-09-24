/**
 * User
 *
 * NOTE: changes made to a User will not be saved unless User.save() is called.
 */

class User {
    constructor() {
        this._token = "";
        this._username = "Guest";
        this._avatar = "https://avatars0.githubusercontent.com/u/24795789?v=4";
        this._rate = {
            limit: 0,
            remaining: 0,
            reset: 0
        };
        this._preferences = {
            theme: "automatic",
            show_map_stats: true,
            show_map_images: true,
            show_map_suggestions: true,
            tm_banners_display: "all"
        };
        // check if pre-existing User data exists
        if (this.saveExists()) {
            this.loadSave();
        }
    }

    /** 
     * Takes an Object of preference ID value key pairs and sets
     * them as the current User preferences.
     *
     * @param  {object}  Parsed preferences to apply to the user
     * @return {boolean} Success or fail response
     */
    setPreferences(p) {
        const properties = ["theme", "show_map_stats", "show_map_images", "show_map_suggestions", "tm_banners_display"]
        try {
            for (var key in p) {
                if (properties.includes(key)) {
                    this._preferences[key] = p[key];
                } else {
                    console.warn('Unknown User preference property:', key)
                }
            }
            console.log('Successfully set User site preferences');
            return true;
        } catch (e) {
            console.log('Failed to set User site preferences');
            return false;
        }
    }

    /** 
     * Resets the User preferences to the defaults.
     *
     * @return {boolean} Success or fail response
     */
    resetPreferences() {
        this._preferences = {
            theme: "automatic",
            show_map_stats: true,
            show_map_images: true,
            show_map_suggestions: true,
            tm_banners_display: "all"
        };
        console.log('Successfully reset User site preferences');
        return true;
    }


    /** 
     * Sets a User's GitHub access token. Call as a success
     * response from verifyToken() only.
     *
     * @return {boolean} Success or fail response
     */
    setToken(token) {
        try {
            this._token = token;
            console.log('Successfully updated User access token');
            return true;
        } catch (e) {
            console.log('Failed to update User access token');
            return false;
        }
    }

    /** 
     * Resets the User access token to nothing.
     *
     * @return {boolean} Success or fail response
     */
    resetToken() {
        this._token = "";
        this._username = "Guest";
        this._avatar = "https://avatars0.githubusercontent.com/u/24795789?v=4";
        this.fetchRates(function(rates) {
            this.setRates(rates)
            this.save()
        }, function () {
            // do nothing
        });
        console.log('Successfully reset User access token');
        return true;
    }

    /** 
     * Updates User identity information. Call as a success response
     * from fetchUserInfo() only.
     *
     * @return {boolean} Success or fail response
     */
    setUserInfo(identity) {
        try {
            this._username = identity.login;
            this._avatar = identity.avatar_url;
            console.log('Successfully updated User identity data');
            return true;
        } catch (e) {
            console.log('Failed to update User identity data');
            return false;
        }
    }

    /** 
     * Fetches GitHub account identity based on provided token.
     *
     * @param {function} success Function to run if API call completes
     * @param {function} fail    Function to run if API call fails
     */
    fetchUserInfo(success, fail) {
        if (this._token) {
            var self = this;
            var url = "https://api.github.com/user";
            $.ajax({ 
                url: url
            })
            .done(function(data) {
                console.log('Successfully retrieved User identity data');
                success(data);
            })
            .fail(function() {
                console.warn('Failed to retrieve User identity data');
                fail();
            });
        }
    }

    /** 
     * Updates User rate limits. Call as a success response
     * from fetchRates() only.
     *
     * @return {boolean} Success or fail response
     */
    setRates(r) {
        try {
            var rate = {
                limit: r.rate.limit,
                remaining: r.rate.remaining,
                reset: r.rate.reset
            }
            this._rate = rate;
            console.log('Successfully updated User rate limit data');
            return true;
        } catch (e) {
            console.log('Failed to update User rate limit data');
            return false;
        }
    }

    /** 
     * Fetches the current GitHub API rate limit numbers. Uses access token
     * if one has been applied to the User.
     *
     * @param {function} success Function to run if API call completes
     * @param {function} fail    Function to run if API call fails
     */
    fetchRates(success, fail) {
        var url = "https://api.github.com/rate_limit";
        $.ajax({ 
            url: url
        })
        .done(function(data) {
            console.log('Successfully retrieved User rate limit data');
            success(data);
        })
        .fail(function() {
            console.warn('Failed to retrieve User rate limit data');
            fail();
        });
    }

    /** 
     * Quickly resets a user cookie. Useful for debugging.
     *
     * @return {boolean} Success or fail response
     */
    reset() {
        this._token = "";
        this._username = "Guest";
        this._avatar = "https://avatars0.githubusercontent.com/u/24795789?v=4";
        this._rate = {
            limit: 0,
            remaining: 0,
            reset: 0
        };
        this._preferences = {
            theme: "automatic",
            show_map_stats: true,
            show_map_images: true,
            show_map_suggestions: true,
            tm_banners_display: "all"
        };
        return this.save();
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