$(function() {
    $('#team-fade-toggle').click(function() {
        if (this.checked) {
            $('.tm-team[data-advances="false"]').addClass('tm-team-fade');
        } else {
            $('.tm-team[data-advances="false"]').removeClass('tm-team-fade');
        }
    });

    $('.tournament-expand-results').click(function() {
        expanded = $(this).data('expanded');
        if (expanded) {
            $(this).data('expanded', false);
            $(this).text('Show Full Results +');
        } else {
            $(this).data('expanded', true);
            $(this).text('Hide Full Results -');
        }
    });

    $('.collapse-section-heading').click(function() {
        expanded = $(this).data('expanded');
        if (expanded) {
            $(this).data('expanded', false);
            $(this).find('.fas').removeClass('fa-angle-down').addClass('fa-angle-right');
        } else {
            $(this).data('expanded', true);
            $(this).find('.fas').removeClass('fa-angle-right').addClass('fa-angle-down');
        }
    });
});