window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        maps: [ {
            map: "",
            slug: "",
            path: "",
            authors: [
                {player_name: "", player_uuid: ""}
            ],
            tags: [ {default: true} ],
            locked: "",
            discussion: "",
            download: false,
            xml: false,
            cardinal: false,
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
