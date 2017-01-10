window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        maps: [ {
            map: "Brisked",
            slug: "brisked",
            path: "KOTH/Standard/Brisked/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/54dc84b25f35b92ecc0005c1",
            download: false,
            xml: false,
            cardinal: false,
        }, {
            map: "Fracture",
            slug: "fracture",
            path: "KOTH/Standard/Fracture/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            download: false,
            xml: false,
            cardinal: false,
        }, {
            map: "Rooted Frontier",
            slug: "rooted_frontier",
            path: "Blitz/Classic/Standard/Rooted%20Fontier/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {blitz: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            download: false,
            xml: false,
            cardinal: false,
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
