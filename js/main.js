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
    $('.js-slideUpTop').each(function () {
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

$(function () {
    $('.header_hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header_navSp').addClass('active');
        } else {
            $('.header_navSp').removeClass('active');
        }
		});
    $('.header_navSp').on('click', function () {
        $('.header_hamburger').click(); 
    });
});

function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
}
  // 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述