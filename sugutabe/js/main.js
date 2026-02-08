"use strict";

$(function () {
  $(".slide-items").slick({
    autoplay: true, // 自動再生
    speed: 1000, //フェードのスピード
    autoplaySpeed: 8000, //	自動再生時のスライド切り替えのスピード
    arrows: true, // 矢印
    dots: true, // インジケーター
    infinite: true, //	無限にスライドする
  });
});


$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});

$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 700;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
var responsiveImage;

if (windowwidth > 768) {
  responsiveImage = [ // PC用の画像
    {
      src: './images/mv03.jpg'
    },
    {
      src: './images/mv02.jpg'
    },
    {
      src: './images/mv.png'
    }
  ];
} else {
  responsiveImage = [ // タブレットサイズ（768px）以下用の画像
    {
      src: './images/mv03.jpg'
    },
    {
      src: './images/mv02.jpg'
    },
    {
      src: './images/mv.png'
    }
  ];
}


//Vegas全体の設定
$('#slider').vegas({
  overlay: true,
  transition: 'blur',
  transitionDuration: 2000,
  delay: 10000,
  animationDuration: 10000,
  animation: 'kenburns',
  slides: responsiveImage,
  timer: false,
});

// 要素のフェードイン
$(function () {
  $(window).scroll(function () {
    $('.js-fade').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('scroll');
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.js-fade2').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('scroll2');
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.js-fade-sp').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('scroll-sp');
      }
    });
  });
});