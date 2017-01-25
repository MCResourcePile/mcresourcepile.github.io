window.onload = function() {
    var source = document.getElementById("records-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
    };
    var output = template(data);
    document.getElementById("records-output").innerHTML = output;
}
