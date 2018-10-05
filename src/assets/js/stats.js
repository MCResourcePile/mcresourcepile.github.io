/***
 * Common JS functions and variables which all stat pages use.
 * Anything that is unique to a stat page or can't be used by 
 * any other of the pages must be left in that document instead
 * of being put here.
 */

$(document).ready(function(){
    // handle direct search queries
    if (getUrlVars()['s']) {
        query = getUrlVars()['s'].replace('+', ' ').replace('%20', ' ');
        $('#search').val(query);
    }
    
    updateListing();

    // update stat listing in time with search bar interactions
    $('.record-search-container').click(function() { updateListing() });
    $('.record-search-container').keyup(function() { updateListing() });
});

function updateListing() {
    $('.bow-output .bow-dynamic').searchable({
        selector: '.bow-record',
        childSelector: '.bow-record-content',
        searchField: '#search'
    });
};
