// fix:active
document.body.addEventListener('touchstart', function() {});

// --------------------------------------------- swiper --------------------------------------------- //

// introduce slide
var titleSlide = new Swiper('#title-slide', {
    effect: 'fade'
});
var introduceInfoSlide = new Swiper('#introduce-info-slide', {
    effect: 'fade'
});
var introduceImageSlide = new Swiper('#introduce-image-slide', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: '.introduce-pagination',
    uniqueNavElements: false,
    lazyLoading: true,
    watchSlidesVisibility: true,
    coverflow: {
        rotate: 0,
        stretch: -6,
        depth: 0,
        modifier: 1,
        slideShadows: false
    }
});
introduceImageSlide.params.control = [titleSlide, introduceInfoSlide];
introduceInfoSlide.params.control = [titleSlide, introduceImageSlide];

// image slide
var imageSlide = new Swiper('#image-slide', {
    loop: true,
    autoplay: 5000,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    pagination: '.swiper-pagination'
});

// tab slide
var tabbarSlide = new Swiper('#tabbar-slide', {
    spaceBetween: 10,
    hashnav:true,
    slidesPerView: 'auto'
});

// goods slide
var goodsSlide = new Swiper('#goods-slide', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    lazyLoading: true,
    watchSlidesVisibility: true,
    pagination: '.goods-flow-pagination',
    paginationType: 'fraction',
    coverflow: {
        rotate: 0,
        stretch: -10,
        depth: 0,
        modifier: 1,
        slideShadows: false
    }
});

// list slide
var listSlide = new Swiper('.list-slide', {
    slidesOffsetAfter: 100
});

// switchery
var elems = Array.prototype.slice.call(document.querySelectorAll('.switch'));
elems.forEach(function(html) {
    var switchery = new Switchery(html, {
        className: 'switch',
        color: '#53c7c6',
        secondaryColor: '#f5f6f7',
        jackColor: '#ffffff',
        jackSecondaryColor: '#ffffff'
    });
});

jQuery(document).ready(function($) {

    // image lazyload
    $('img.lazyload').lazyload({
        container: $('main.main'),
        threshold: 200,
        effect: 'fadeIn'
    });

    // radio-checkbox
    $('.radio-checkbox').iCheck({
        checkboxClass: 'checkbox',
        radioClass: 'radio',
    });

    // --------------------------------------------- fly --------------------------------------------- //

    // 计算offset
    var resetOffset = function() {
        var offset = $("#cart").offset();
        if (offset == null) {
            return;
        }
        if ($(window).height() < offset.top) {
            offset.top = $("#cart").offset().top - $(document).scrollTop();
        }
        return offset;
    }
    var offset = resetOffset();
    // 如果窗口大小发生变化时需要重新计算
    window.onresize = function() {
        offset = resetOffset(offset);
    }
    $(".add-cart").click(function(event) {
        //AJAX添加到购物车
        var flag = false;
        //AJAX添加成功后设置flag=true
        var addCart = $(this);
        var flyer = $('<div class="flyer"></div>');
        flyer.fly({
            speed: 1.2,
            start: {
                left: event.clientX - 25,
                top: event.clientY - 25
            },
            end: {
                left: offset.left + 12,
                top: offset.top + 12,
                width: 0,
                height: 0
            },
            onEnd: function() {
                var i = parseInt($("#cart-badge").html());
                $("#cart-badge").html(i + 1);
                $("#cart-badge").addClass('animated bounceIn').one('webkitAnimationEnd animationend', function() {
                    $(this).removeClass('animated bounceIn');
                });
            }
        });
    });

});

// swiper tab
// var swiperTab = new Swiper('#swiperTab', {
//     autoHeight: true,
//     onSlideChangeStart: function() {
//         $(".swiperTab .active").removeClass('active')
//         $(".swiperTab a").eq(swiperTab.activeIndex).addClass('active')
//     }
// });

// jQuery plugin
// jQuery(document).ready(function($) {
//
//
//
//     // fancy box
//     $(".fancyBox").fancybox({
//         padding: 0,
//         margin: 25,
//         minWidth: 300,
//         maxWidth: 1000,
//         minHeight: 0,
//         closeBtn: false,
//         helpers: {
//             overlay: {
//                 closeClick: false
//             }
//         }
//     });
//
//     // swiper tab
//     $(".swiperTab a").on('touchstart mousedown', function(e) {
//         e.preventDefault()
//         $(".swiperTab .active").removeClass('active')
//         $(this).addClass('active')
//         swiperTab.slideTo($(this).index())
//     });
//     $(".swiperTab a").click(function(e) {
//         e.preventDefault()
//     });
//
//     // selection
//     $(".selection .group").click(function() {
//         $(this).addClass("active").siblings().removeClass("active");
//     });
//
//     // iCheck
//     $('.iCheckInput').iCheck({
//         checkboxClass: 'iCheck',
//         radioClass: 'iRadio',
//     });
//     // 判断选中状态
//     // $("#submit").click(function() {
//     //
//     //     直接获取选中radio的值
//     //     alert($("input[name='radio-1']:checked").val());
//     //
//     //     循环判断是否选中
//     //     $("input[name='radio-1']:radio").each(function() {
//     //         if (true == $(this).is(':checked')) {
//     //             alert($(this).val());
//     //         }
//     //     });
//     //
//     // });
//
//     // raty
//     $('.raty').raty({
//         starType: 'a',
//         space: false
//     });
//     $('.ratyReadOnly').raty({
//         starType: 'a',
//         space: false,
//         readOnly: true,
//         score: function() {
//             return $(this).attr('data-score');
//         }
//     });
//
//     // nav
//     $("#sideNav").mmenu({
//         "navbar": {
//             "add": 'false',
//             "title": '筛选',
//         },
//         extensions: [
//             "pagedim-black"
//         ],
//         offCanvas: {
//             "position": "right"
//         }
//     });
//
//     // accordion
//     $('#accordion [data-accordion]').accordion();
//
// });
