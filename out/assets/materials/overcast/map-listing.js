window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
