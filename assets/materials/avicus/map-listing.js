window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        // CC licenses that are currently accepted: BY_SA: true, BY_NC_SA: true
        maps: [ {
            map: "Clay Wars",
            slug: "clay-wars",
            path: "DTM/ClayWars/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            official: true,
            commercial: false,
            download: true,
            xml: true,
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
