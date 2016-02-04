$('#menu-toggle').on('click', function () {
    var iSelector = $(this).find('i:first');
    if (iSelector.hasClass('glyphicon-arrow-right')) {
        iSelector.removeClass('glyphicon-arrow-right')
        iSelector.addClass('glyphicon-arrow-left')
    } else if (iSelector.hasClass('glyphicon-arrow-left')) {
        iSelector.removeClass('glyphicon-arrow-left')
        iSelector.addClass('glyphicon-arrow-right')
    }
});