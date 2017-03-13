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

// goods slide
var userCardImageListSlide = new Swiper('#user-card-image-list-slide', {
    effect: 'coverflow',
    slidesPerView: 3,
    spaceBetween: 12,
    lazyLoading: true,
    coverflow: {
        rotate: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false
    }
});

// list slide
var listSlide = new Swiper('.list-slide', {
    slidesOffsetAfter: 100
});

// address slide
var addressSlide = new Swiper('.address-slide', {
    slidesOffsetAfter: 150
});

// calendar
var calendarSlide = new Swiper('#calendar-slide', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    hashnav:true,
    freeMode : true,
    freeModeSticky : true,
    coverflow: {
        rotate: 0,
        depth: 0,
        slideShadows: false
    }
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

    // raty
    $('.raty-1').raty({
        starType: 'img',
        path: 'img',
        starHalf: 'star-half@2x.png',
        starOff: 'star-empty@2x.png',
        starOn: 'star@2x.png',
        space: false,
        targetKeep : true,
        hints: ['差劲', '一般', '中等', '良好, 手艺还需要提高', '完美'],
        target: '#raty-hint',
        targetScore: '#raty-number'
    });

    $('.raty-2').raty({
        starType: 'img',
        path: '../img',
        starHalf: 'star-half@2x.png',
        starOff: 'star-empty@2x.png',
        starOn: 'star@2x.png',
        space: false
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
