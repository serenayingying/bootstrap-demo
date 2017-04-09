$(function () {
    var $selected = $('.selected');
    $('.banner').on('click', '.banner-text', function () {
        $(this).addClass('selected');
        $selected.removeClass('selected');
        $selected = $(this);
    });
});
