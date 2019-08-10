$(function() {
    var searchable = new List('searchable-collection', {
        valueNames: ['tm-name', 'tags']
    });
    var searchable_type = "tournaments";
    setupSearch(searchable, searchable_type);
});
