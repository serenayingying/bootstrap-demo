$(function () {
    $('.nav-ul').on('click', 'a', function () {
        switchNavbar.call(this, $(this).text());
    });
});

var configMap = {
    'Static top': {
        bodyClass: '',
        containerClass: 'navbar-static-top'
    },
    'Fixed top': {
        bodyClass: 'fixed',
        containerClass: 'navbar-fixed-top'
    },
    'Default': {
        bodyClass: '',
        containerClass: ''
    }
}

var $active = $('.active');
var containerClass = '';
var bodyClass = '';
function switchNavbar(type) {
    var config = configMap[type];

    // body
    $(body).removeClass(bodyClass).addClass(config.bodyClass);
    bodyClass = config.bodyClass;

    // container
    $('.container-top').removeClass(containerClass).addClass(config.containerClass);
    containerClass = config.containerClass;

    // active
    $active.removeClass('.active');
    $active = $(this).parent().addClass('active');
}

