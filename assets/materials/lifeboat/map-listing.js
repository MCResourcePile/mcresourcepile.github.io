window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        maps: [ {
            map: "",
            slug: "",
            path: "",
            authors: [{}],
            tags: [{}],
            locked: "",
            discussion: "",
            download: true,
            xml: true,
            album: "",
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
