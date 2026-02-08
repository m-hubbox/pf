"use strict";

$(function () {

    // 質問1以外を非表示
    $('section').not('#q1').hide();

    // 切り替わり後にTOPへスムーススクロール
    function smoothScrollTo() {
        let speed = 0;
        let position = $(".wrap").offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    }

    /* 質問1
    ---------------------------------------------------------- */
    $('[name="check"]:radio').change(function () {
        if ($('[id=q1-check1]').prop('checked')) {
            $('#q1-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q1-btn');
        } else if ($('[id=q1-check2]').prop('checked')) {
            $('#q1-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q1-btn');
            $('#q2-img').attr('src', './images/q2-img-02.jpg');
            $('#q2-txt').text('たるみ、ハリ不足')
            $('#end-img').attr('src', './images/end-img-02.jpg');

        } else if ($('[id=q1-check3]').prop('checked')) {
            $('#q1-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q1-btn');
            $('#q2-img').attr('src', './images/q2-img-03.jpg');
            $('#q2-txt').text('乾燥による小ジワ')
            $('#end-img').attr('src', './images/end-img-03.jpg');

        } else if ($('[id=q1-check4]').prop('checked')) {
            $('#q1-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q1-btn');
            $('#q2-img').attr('src', './images/q2-img-04.jpg');
            $('#q2-txt').text('肌トラブル')
            $('#end-img').attr('src', './images/end-img-04.jpg');
        }
    });

    $('.q1-btn').on('click', function () {
        $('#q1').hide();
        $('#q2').show();
        smoothScrollTo();
        return false;
    })


    /* 質問2
    ---------------------------------------------------------- */
    $('[name="check"]:radio').change(function () {
        if ($('[id=q2-check1]').prop('checked')) {
            $('#q2-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q2-btn');
            $('.q2-about').slideDown(500);
            $('.q2-inner').css('padding-bottom', 'min(calc(60 / 750 * 100vw), 60px)');

        } else if ($('[id=q2-check2]').prop('checked')) {
            $('#q2-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q2-btn');
            $('.q2-about').slideDown(500);
            $('.q2-inner').css('padding-bottom', 'min(calc(60 / 750 * 100vw), 60px)');
        }
    });

    $('.q2-btn').on('click', function () {
        $('#q2').hide();
        $('#q3').show();
        smoothScrollTo();
        return false;
    })

    /* 質問3
    ---------------------------------------------------------- */
    $("input[type='checkbox']").on('change', function () {
        //チェックされているチェックボックスの数
        if ($(".q3-checkbox:checked").length > 0) {
            //ボタン有効
            $('#q3-btn-img').attr('src', './images/btn.png');
            $('.next-btn-area a').removeClass('q3-btn');
        } else {
            //ボタン無効
            $('#q3-btn-img').attr('src', './images/btn_off.png');
            $('.next-btn-area a').addClass('q3-btn');
        }
    });

    $('.q3-btn').on('click', function () {
        $('#q3').hide();
        $('#result').show();
        smoothScrollTo();
        return false;
    })

});