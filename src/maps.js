function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var requested_slug = getUrlVars()['map'];
var requested_map_details = $.grep(maps, function(obj){return obj.slug === requested_slug;})[0];
var requested_map_license = requested_map_details.license;
var requested_map_path = requested_map_details.path;


if (requested_map_license == 'none') {
    active_license_message = 'has no associated license; be careful when using this map in public servers';
    license_file = 'NOTICE.txt';
    license_content = 'This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n';
} else if (requested_map_license == 'commercial') {
    active_license_message = 'is using a Creative Commons BY-SA 4.0 license';
    license_file = 'LICENSE.txt';
    license_content = 'This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n';
} else if (requested_map_license == 'noncommercial') {
    active_license_message = 'is using a Creative Commons BY-NC-SA 4.0 license';
    license_file = 'LICENSE.txt';
    license_content = 'This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n';
}

if (current_token) {
    GitZip.setAccessToken(current_token);
    GitZip.zipRepo(requested_map_path);
    console.info('Using given GitHub API access token.');
} else {
    GitZip.zipRepo(requested_map_path);
    console.warn('No GitHub API access token provided. Please go to your preferences to generate an access token.')
}


var maps = [
    {{#data}}
    {{#each maps}}
    {
        "name": "{{name}}",
        "slug": "{{slug}}",
        "path": "https://github.com/MCResourcePile/{{@root.map-group}}-maps{{#is @root.map-group 'overcast'}}-{{findGroup slug}}{{/is}}/tree/master/maps/{{slug}}",
        "license": "{{#if sourced}}none{{else}}{{#unless commercial}}noncommercial{{else}}commercial{{/unless}}{{/if}}",
    },
    {{/each}}
    {{/data}}
]
