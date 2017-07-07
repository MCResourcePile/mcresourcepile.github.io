module.exports = function(slug) {
    var snip = slug.substring(0, 1);
    var output;
    
    if (snip < "g") {
    	output = 'a-to-f'
    } else if (snip < "o") {
    	output = "g-to-n"
    } else {
    	output = "o-to-z"
    };
    
    return output;
};
