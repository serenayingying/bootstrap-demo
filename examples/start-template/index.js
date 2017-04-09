// window.onload = function () {
//     var nodes = document.querySelectorAll('.banner-text');
//     nodes.forEach(function (item) {
//         item.addEventListener('click', function (e) {
//             e.target.classList.add('selected');
//             nodes.forEach(function (node) {
//                 if (node !== e.target) {
//                     node.classList.remove('selected');
//                 }
//             });
//         }, false);
//     });
// };

// $(function(){
//     $('.banner-text').each(function(index){
//         $(this).on('click',function(e){
//             $(e.target).addClass('selected');
//             $('.banner-text').each(function(index){
//                 if ( this !== e.target){
//                     $(this).removeClass('selected');
//                 }
//             });
//         });
//     });
// });

$(function(){
    var $selected = $('selected');
    $('.banner').on('click','.banner-text',function(){
        $(this).addClass('selected');
        $selected.removeClass('selected');
        $selected = $(this);
    })
})
