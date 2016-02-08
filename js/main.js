// function glyph(clicked)
// $('#menu-toggle').on('click', function () {
//     var iSelector = $(this).find('i:first');
//     if (iSelector.hasClass('glyphicon-collapse-down')) {
//         iSelector.removeClass('glyphicon-collapse-down')
//         iSelector.addClass('glyphicon-collapse-up')
//     } else if (iSelector.hasClass('glyphicon-collapse-up')) {
//         iSelector.removeClass('glyphicon-collapse-up')
//         iSelector.addClass('glyphicon-collapse-down')
//     }
// });

$('#menu-toggle').click( function(){
    $(this).find('i').toggleClass('glyphicon-collapse-down').toggleClass('glyphicon-collapse-up');
});