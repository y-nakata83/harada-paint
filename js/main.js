$(window).on('load resize', function() {
var windowWidth = window.innerWidth;
var elements = $('.fixed');
if (windowWidth >= 768) {
Stickyfill.add(elements);
}else{
Stickyfill.remove(elements);
} 
});