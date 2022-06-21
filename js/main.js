// 紙芝居

$(window).on('load resize', function () {
  var windowWidth = window.innerWidth;
  var elements = $('.fixed');
  if (windowWidth >= 768) {
    Stickyfill.add(elements);
  }else{
    Stickyfill.remove(elements);
  } 
});

//js-slideLeft 左から出てくる

$(function () {
  $(window).scroll(function () {
    $('.js-slideLeft').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeLeft');
      } else {
        $(this).removeClass('fadeLeft');
      }
    });
  });
});

//js-slideRight 右から出てくる

$(function () {
  $(window).scroll(function () {
    $('.js-slideRight').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('fadeRight');
      } else {
        $(this).removeClass('fadeRight');
      }
    });
  });
});

//js-slideUp 上に出てくる
$(function () {
  $(window).scroll(function () {
    $('.js-slideUp').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
});

// top-about専用
$(function () {
  $(window).scroll(function () {
    $('.js-slideUp').each(function () {
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight) {
        $(this).addClass('scrollintop');
      } else {
        $(this).removeClass('scrollintop');
      }
    });
  });
});