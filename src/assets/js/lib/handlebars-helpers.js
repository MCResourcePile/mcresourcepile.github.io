/***
 * Handlebars.js helpers for compiling templates
 * in the browser.
 */

Handlebars.registerHelper('listItems', function (from, to, context, options){
    var item = "";
    for (var i = from, j = to; i < j; i++) {
        item = item + options.fn(context[i]);
    }
    return item;
});

Handlebars.registerHelper('ifObject', function(item, options) {
    if(typeof item === "object") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
