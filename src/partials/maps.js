var maps = [
    {{#data}}
    {{#each maps}}
    {slug: "{{slug}}", name: "{{name}}", path: "https://github.com/MCResourcePile/overcast-maps-{{findGroup slug}}/tree/master/maps/{{slug}}", license: "{{#if sourced}}none{{else}}{{#unless commercial}}noncommercial{{else}}commercial{{/unless}}{{/if}}"}{{#unless isLast}},{{/unless}}
    {{/each}}
    {{/data}}
];

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};

var findMap = function(mapName) {
    for (var i = 0, len = maps.length; i < len; i++) {
        if (maps[i].slug === mapName)
            return maps[i];
    }
    return null;
};

var requested_map_slug = getUrlVars()['map'];
var requested_map = findMap(requested_map_slug);
var requested_map_name = requested_map.name;
var requested_map_path =  requested_map.path;
var requested_map_license = requested_map.license;
var broken_map_path = requested_map_path.split( '.com/' );
var requested_map_image = 'https://raw.githubusercontent.com/' + broken_map_path[1].replace('/tree',' ');

$(document).ready(function(){
    $('.map-name').text(requested_map_name);
    $('.click-download').attr("id", requested_map_slug);
    $('.map-image').css('background-image', 'url(\'' + requested_map_image + '/map.png\')');
                    
    if (requested_map_license == 'none') {
        $('#no-license').show();
        active_license_message = 'has no associated license; be careful when using this map in public servers';
        license_file = 'NOTICE.txt';
        license_content = 'This work has no associated license attached to it. We recommend getting in contact with authors, which are listed on our site at https://mcresourcepile.github.io/, before using this work for purposes other than private use. Please be considerate when using this map and please respect the wishes of the authors.\n';
    } else if (requested_map_license == 'commercial') {
        $('#commercial-license').show();
        active_license_message = 'is using a Creative Commons BY-SA 4.0 license';
        license_file = 'LICENSE.txt';
        license_content = 'This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n';
    } else if (requested_map_license == 'noncommercial') {
        $('#noncommercial-license').show();
        active_license_message = 'is using a Creative Commons BY-NC-SA 4.0 license';
        license_file = 'LICENSE.txt';
        license_content = 'This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.\n';
    };

    $('.click-download:not(.disabled)').click(function() {
        if (current_token) {
            GitZip.setAccessToken(current_token);
            GitZip.zipRepo(requested_map_path);
            console.info('Using given GitHub API access token.');
        } else {
            GitZip.zipRepo(requested_map_path);
            console.warn('No GitHub API access token provided. Please go to your preferences to generate an access token.')
        }
    });
});